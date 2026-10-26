import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
vo_file = root / "04_VOICEOVER_EN.txt"
lines = vo_file.read_text(encoding="utf-8").splitlines()

# Parse scenes
scenes = []
current_id = None
scene_ids = ["S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10", "S11"]
idx = 0

for line in lines:
    line = line.strip()
    if not line:
        continue
    if "–" in line and (line.startswith("00:") or line.startswith("01:") or line.startswith("02:") or line.startswith("03:")):
        current_id = scene_ids[idx]
        idx += 1
    elif current_id:
        # Clean em-dash to regular dash to be safe with all voice synthesizers
        clean_text = line.replace("—", " - ").replace("–", "-")
        scenes.append({
            "id": current_id,
            "text": clean_text
        })
        current_id = None

out_json = root / "tools" / "voiceovers.json"
out_json.write_text(json.dumps(scenes, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Extracted {len(scenes)} scenes into {out_json}")
