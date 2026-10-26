import math
import struct
import wave
from pathlib import Path

# Parameters for 215s ambient bed (44.1kHz, 16-bit stereo)
SAMPLE_RATE = 44100
DURATION_SEC = 215
TOTAL_SAMPLES = SAMPLE_RATE * DURATION_SEC

root = Path(__file__).resolve().parents[1]
out_file = root / "remotion-project" / "public" / "audio" / "ambient_bed.wav"

# Chords (frequencies in Hz): Atmospheric space pad
# Dm, Bb, F, C progression
chords = [
    [146.83, 220.0, 261.63, 349.23], # Dm7 (D3, A3, C4, F4)
    [116.54, 174.61, 233.08, 293.66], # Bbmaj7 (Bb2, F3, Bb3, D4)
    [174.61, 261.63, 329.63, 392.0],  # Fmaj7 (F3, C4, E4, G4)
    [130.81, 196.0, 261.63, 329.63],  # C (C3, G3, C4, E4)
]
chord_duration = 16.0 # seconds per chord

print(f"Synthesizing {DURATION_SEC}s ambient music track...")

with wave.open(str(out_file), "w") as wav:
    wav.setnchannels(2)
    wav.setsampwidth(2)
    wav.setframerate(SAMPLE_RATE)
    
    buf = bytearray()
    
    for i in range(TOTAL_SAMPLES):
        t = i / SAMPLE_RATE
        chord_idx = int((t / chord_duration) % len(chords))
        freqs = chords[chord_idx]
        
        # Soft chord crossfade
        t_in_chord = t % chord_duration
        envelope = math.sin(math.pi * (t_in_chord / chord_duration)) ** 0.5
        
        # Subtle sub-bass drone (73.4 Hz, D2)
        sub = 0.12 * math.sin(2 * math.pi * 73.416 * t)
        
        # Chord tones with slight chorusing
        sample_l = sub
        sample_r = sub
        
        for f in freqs:
            # Left channel slightly detuned for stereo width
            s_l = math.sin(2 * math.pi * (f - 0.25) * t)
            # Right channel slightly detuned
            s_r = math.sin(2 * math.pi * (f + 0.25) * t)
            # Add subtle harmonic
            s_l += 0.3 * math.sin(4 * math.pi * f * t)
            s_r += 0.3 * math.sin(4 * math.pi * f * t)
            
            sample_l += 0.05 * s_l * envelope
            sample_r += 0.05 * s_r * envelope
        
        # Master volume ceiling & gentle fade in/out
        master_fade = min(1.0, t / 4.0) * min(1.0, (DURATION_SEC - t) / 5.0)
        vol = 0.25 * master_fade
        
        val_l = int(max(-32767, min(32767, sample_l * vol * 32767)))
        val_r = int(max(-32767, min(32767, sample_r * vol * 32767)))
        
        buf.extend(struct.pack("<hh", val_l, val_r))
        
        if len(buf) > 100000:
            wav.writeframes(buf)
            buf.clear()
            
    if buf:
        wav.writeframes(buf)

print(f"Ambient track synthesized successfully: {out_file}")
