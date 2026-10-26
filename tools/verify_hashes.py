import csv
import hashlib
from pathlib import Path

root = Path(__file__).resolve().parents[1]
csv_file = root / "08_ASSET_SHA256.csv"

errors = 0
total = 0
with open(csv_file, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        total += 1
        filepath = root / row["file"]
        if not filepath.exists():
            print(f"MISSING: {row['file']}")
            errors += 1
            continue
        data = filepath.read_bytes()
        actual = hashlib.sha256(data).hexdigest()
        if actual != row["sha256"]:
            print(f"MISMATCH: {row['file']} expected {row['sha256']} got {actual}")
            errors += 1

if errors == 0:
    print(f"PASS: all {total} assets verified with identical SHA256 checksums.")
else:
    print(f"FAIL: {errors} asset checksum mismatches.")
