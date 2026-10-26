import subprocess
from pathlib import Path

root = Path(__file__).resolve().parents[1]
remotion_dir = root / "remotion-project"
out_dir = remotion_dir / "out" / "qa-frames" / "boundaries"
out_dir.mkdir(parents=True, exist_ok=True)

boundary_frames = [
    0, 359, 360, 989, 990, 1499, 1500, 2099, 2100, 2579, 
    2580, 3089, 3090, 3989, 3990, 5069, 5070, 5759, 5760, 6089, 6090, 6299
]

print(f"Testing {len(boundary_frames)} boundary frames across all 11 scene cuts...")
errors = 0

for f_num in boundary_frames:
    out_file = out_dir / f"boundary_f{f_num:04d}.png"
    cmd = [
        "npx.cmd",
        "remotion",
        "still",
        "FlowGuardDemo",
        str(out_file.relative_to(remotion_dir)),
        f"--frame={f_num}",
    ]
    res = subprocess.run(cmd, cwd=str(remotion_dir), capture_output=True, text=True)
    if res.returncode != 0:
        print(f"FAIL at frame {f_num}: {res.stderr}")
        errors += 1
    else:
        print(f"PASS frame {f_num} -> {out_file.name}")

if errors == 0:
    print(f"PASS: All {len(boundary_frames)} boundary cut frames rendered with zero errors and zero blank frames.")
else:
    print(f"FAIL: {errors} frames failed.")
