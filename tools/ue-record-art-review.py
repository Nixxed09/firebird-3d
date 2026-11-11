"""Collect verified captures into the original art kit's review deliverables."""
import argparse
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / 'art'
parser = argparse.ArgumentParser(description=__doc__)
for name in ('art', 'motion', 'gameplay', 'coop', 'no-dash'):
    parser.add_argument('--'+name, required=True, help='Capture directory relative to the project')
parser.add_argument('--art-build-id', help='Record an earlier art-only capture when only the review camera changed')
parser.add_argument('--earlier-attempts', nargs='*', default=[])
args = parser.parse_args()


def capture(path):
    resolved = (ROOT / path).resolve()
    if not resolved.is_relative_to((ROOT / 'captures' / 'ue').resolve()):
        raise ValueError('Review captures must be inside captures/ue: '+path)
    return resolved


def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


runs = {
    'packaged_art': capture(args.art),
    'packaged_motion': capture(args.motion),
    'packaged_gameplay': capture(args.gameplay),
    'no_dash_control': capture(args.no_dash),
    'coop_host': capture(args.coop) / 'host',
    'coop_joiner': capture(args.coop) / 'p2',
}
report = {
    'build_info': (ROOT / 'builds/windows/BUILD-INFO.txt').read_text().splitlines(),
    'runs': {},
    'limitations': [
        'Foot IK, dedicated slide/dash clips, skeletal LODs and hardware performance profiling remain.',
        'Two-player networking was tested as two processes on one machine, not across separate computers.',
        'Simultaneous rendering of two game instances can be slow; benchmark captures are not FPS measurements.',
        'The no-dash control is retained from the earlier pass; movement tuning and geometry were unchanged.',
    ],
    'earlier_attempts': [],
    'packaged_missing_art_errors': [],
}
for key, path in runs.items():
    summary = read(path / 'summary.json')
    if not summary['all_ok']:
        raise ValueError('Cannot publish a failed review run: '+str(path))
    for shot in summary['shots']:
        if not (path / (shot+'.png')).is_file():
            raise ValueError('Missing captured view: '+shot)
    report['runs'][key] = {'capture_directory': path.relative_to(ROOT).as_posix(), **summary}
    log = (path / 'game.log').read_text(errors='replace')
    report['packaged_missing_art_errors'].extend(
        line for line in log.splitlines() if re.search(r'FB_ART_MISSING|Failed to compile Material', line, re.I))
    if key.startswith('coop_'):
        report['runs'][key]['restoration_observed'] = 'FB_ART restoration_started' in log
        if not report['runs'][key]['restoration_observed']:
            raise ValueError('No restoration evidence for '+key)
if args.art_build_id:
    report['runs']['packaged_art']['build_id'] = args.art_build_id
    report['runs']['packaged_art']['note'] = 'Captured before the motion-review camera framing update; art and gameplay were unchanged.'
for attempt in args.earlier_attempts:
    folder = capture(attempt)
    entry = {'capture_directory': folder.relative_to(ROOT).as_posix(), 'results': {}}
    for side in ('host', 'p2'):
        summary = folder / side / 'summary.json'
        entry['results'][side] = read(summary) if summary.is_file() else {'status': 'stopped before completion'}
    report['earlier_attempts'].append(entry)

blender = read(ART / 'validation.json')
unreal = read(ART / 'unreal-import-report.json')
report['blender_geometry_passed'] = blender['passed']
report['unreal_reload_passed'] = unreal['passed'] and unreal['fresh_process_reload_passed']
report['asset_count'] = len(unreal['meshes'])
report['animation_count'] = len(unreal['animations'])
report['static_mesh_lods'] = {m['name']: m['lod_triangles'] for m in unreal['meshes'] if m.get('lod_count', 1) > 1}
report['player_animation_checks'] = blender['player_animation_checks']
report['player_crouch_world_bounds_z_m'] = blender['player_crouch_world_bounds_z_m']
report['passed'] = report['blender_geometry_passed'] and report['unreal_reload_passed'] and not report['packaged_missing_art_errors']
if not report['passed']:
    raise ValueError('Asset validation or capture art errors prevent publishing the review')
videos = [('packaged_motion', 'motion.mp4', 'firebird-player-motion-v01.mp4'),
          ('packaged_gameplay', 'feel.mp4', 'firebird-gameplay-v01.mp4')]
for key, source, _ in videos:
    if not (runs[key] / source).is_file() or (runs[key] / source).stat().st_size == 0:
        raise ValueError('Missing review video '+source)
report['screenshots'] = []
for key, folder in [('packaged_art', 'runtime'), ('packaged_motion', 'motion')]:
    dest = ART / 'renders' / folder
    dest.mkdir(parents=True, exist_ok=True)
    for shot in report['runs'][key]['shots']:
        shutil.copy2(runs[key] / (shot+'.png'), dest / (shot+'.png'))
        report['screenshots'].append('renders/'+folder+'/'+shot+'.png')
for key, source, target in videos:
    shutil.copy2(runs[key] / source, ART / 'renders' / target)
(ART / 'runtime-validation.json').write_text(json.dumps(report, indent=2)+'\n')
print(json.dumps({'passed': report['passed'], 'assets': report['asset_count'],
                  'animations': report['animation_count'], 'screenshots': len(report['screenshots'])}))
