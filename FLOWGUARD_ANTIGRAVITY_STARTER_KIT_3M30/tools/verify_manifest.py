from pathlib import Path
import json
root = Path(__file__).resolve().parents[1]
m = json.loads((root / '03_SCENE_MANIFEST_6300_FRAMES.json').read_text(encoding='utf-8'))
assert m['width']==1920 and m['height']==1080 and m['fps']==30
assert m['durationInFrames']==6300 and len(m['scenes'])==11
pos=0
for s in m['scenes']:
    assert s['from']==pos, f"Gap/overlap at {s['id']}"
    assert s['toExclusive']==s['from']+s['durationInFrames']
    pos=s['toExclusive']
assert pos==6300
print('PASS: exact 11 scenes, continuous 6300 frames, 3:30 at 30 FPS')
