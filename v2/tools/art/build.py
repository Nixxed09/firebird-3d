"""FIREBIRD original procedural art. Blender 4.5 -b -P build.py -- --group all."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import argparse
import kit

args = argparse.ArgumentParser()
args.add_argument('--group', default='all')
opt = args.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
for group in ('demons', 'weapons', 'props', 'pickups', 'surfaces'):
    if opt.group in ('all', group):
        __import__(group).build()
if opt.group=='all':
    import audit
    audit.build()
kit.manifest()
