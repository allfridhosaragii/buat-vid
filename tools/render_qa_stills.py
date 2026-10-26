import subprocess
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
remotion_dir = root / "remotion-project"
out_dir = remotion_dir / "out" / "qa-frames"
out_dir.mkdir(parents=True, exist_ok=True)

# 11 Midpoint frames of FlowGuardDemo
midpoints = [
    ("S01_mid", 180),
    ("S02_mid", 675),
    ("S03_mid", 1245),
    ("S04_mid", 1800),
    ("S05_mid", 2340),
    ("S06_mid", 2835),
    ("S07_mid", 3540),
    ("S08_mid", 4530),
    ("S09_mid", 5415),
    ("S10_mid", 5925),
    ("S11_mid", 6195),
]

print("Rendering 11 midpoint QA frames from FlowGuardDemo...")
errors = 0

for name, f_num in midpoints:
    out_file = out_dir / f"{name}_f{f_num}.png"
    cmd = [
        "npx.cmd",
        "remotion",
        "still",
        "FlowGuardDemo",
        str(out_file.relative_to(remotion_dir)),
        f"--frame={f_num}",
    ]
    print(f"Rendering {name} at frame {f_num}...")
    res = subprocess.run(cmd, cwd=str(remotion_dir), capture_output=True, text=True)
    if res.returncode != 0:
        print(f"ERROR rendering {name}: {res.stderr}")
        errors += 1
    else:
        print(f"SUCCESS: {out_file.name}")

if errors == 0:
    print("ALL 11 MIDPOINT QA STILLS RENDERED CLEANLY!")
else:
    print(f"Finished with {errors} errors.")
