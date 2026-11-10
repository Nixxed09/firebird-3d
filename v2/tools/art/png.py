"""Deterministic compact PNG encoding for generated surfaces (standard library only).
RGB paint/normal and grayscale roughness, adaptive row filtering, deflate level 9.
"""
import struct,zlib
import numpy as np

def save(path,pixels,channel):
    linear=channel in ('normal','roughness')
    a=np.clip(pixels,0,1)
    if not linear:a=np.where(a<=.0031308,12.92*a,1.055*np.maximum(a,0)**(1/2.4)-.055)
    # Limited paint steps are deliberate stylization, preserving full 1024px detail.
    levels=255 if channel=='normal' else 63 if channel in ('albedo','emissive') else 31
    a=np.rint(np.rint(a*levels)/levels*255).astype(np.uint8)
    if channel=='roughness':a=a[:,:,:1]
    h,w,bpp=a.shape
    a=np.flipud(a).reshape(h,w*bpp).astype(np.int16)
    prev=np.zeros(w*bpp,np.int16);rows=[]
    for row in a:
        left=np.zeros_like(row);left[bpp:]=row[:-bpp]
        upperleft=np.zeros_like(row);upperleft[bpp:]=prev[:-bpp]
        p=left+prev-upperleft;pa=np.abs(p-left);pb=np.abs(p-prev);pc=np.abs(p-upperleft)
        paeth=np.where((pa<=pb)&(pa<=pc),left,np.where(pb<=pc,prev,upperleft))
        candidates=np.stack((row,row-left,row-prev,row-(left+prev)//2,row-paeth))%256
        cost=np.minimum(candidates,256-candidates).sum(axis=1);best=int(np.argmin(cost))
        rows.append(bytes([best])+candidates[best].astype(np.uint8).tobytes());prev=row
    def chunk(name,data):return struct.pack('>I',len(data))+name+data+struct.pack('>I',zlib.crc32(name+data)&0xffffffff)
    data=b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>IIBBBBB',w,h,8,0 if bpp==1 else 2,0,0,0))
    if not linear:data+=chunk(b'sRGB',b'\x00')
    data+=chunk(b'IDAT',zlib.compress(b''.join(rows),9))+chunk(b'IEND',b'')
    path.write_bytes(data)
