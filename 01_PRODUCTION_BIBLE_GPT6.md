# GPT-6 PRODUCTION BIBLE — FLOWGUARD AI / 03:30

## Creative statement
Film demo teknis bertema **“Behind Every Software Failure, There Is a Real Person.”** Visual premium ala presentasi teknologi kelas dunia, berakar pada fakta; bukan iklan yang mengarang testimoni. Cerita dimulai dengan pengalaman orang, masuk ke masalah teknis yang membedakan ketidakpastian dari bukti, lalu menunjukkan solusi dan pengujian asli. Tagline utama: **“Evidence before verdicts. Don't just review code. Prove the behavior.”**

## Target audiens
Juri hackathon, developer, QA/security reviewer, dan tech lead. Prioritaskan pemahaman dalam sekali tonton, tulisan terbaca, dan setiap klaim punya bukti klik.

## Video specification
Composition `FlowGuardDemo`; frame rate 30 fps; durationInFrames 6300; 1920×1080; 16:9. Simpan project Remotion terpisah pada `P:\Demo Vid\remotion-project`, jangan melakukan perubahan dalam repo produk. Output `remotion-project/out/flowguard-demo.mp4`, H.264, audio AAC jika tersedia. Tidak memerlukan footage AI berbayar: motion graphics harus dapat dibangun programatis.

## Visual identity (creative proposal, bukan salinan warna produk)
- Midnight: `#07121D`; dark panel: `#102539`; cyan: `#1AD9D1`; ice: `#E8FAF9`; muted: `#88A9B6`.
- Semantic failure: `#F66E72` **hanya** kegagalan nyata lab dan warning; pass: `#36C68B` **hanya** sukses asli.
- Typography: gunakan font berlisensi dari sistem/aplikasi seperti Arial/Inter bila benar-benar tersedia. High hierarchy, minimum teks utama ~46px di 1920x1080, captions ~38px dan lower-third ~28px; sumber ~24px atau lebih besar dan tetap terbaca. Subtitles tidak bertumpuk dengan URL/sumber.
- Camera: 2.5D pan, depth, parallax, subtle perspective, elegant pushes; hindari zoom agresif pada screenshot yang menyebabkan teks tidak terbaca.
- Motion: prefer timing menggunakan frame (`useCurrentFrame`), spring untuk entrance, interpolate untuk slow movement. Easing konsisten; transisi halus 8–16 frame **tidak boleh menggeser locked scene boundaries**.
- Mood: human/empathic intro → precise investigative engineering → evidence payoff → confident closing.
- Sound: subtle ambient synth, restrained pulse/riser between stories, quiet during verbal technical explanation; controlled click and swoosh SFX. No third-party copyrighted music without license. Duck audio under speech.

## 11 scenes, locked timecodes

| ID | Time | Frames [start,end) | Scene | Core screen direction |
|---|---|---|---|---|
| S01 | 00:00–00:12 | [0,360) | Hook | Payment flow bifurcates, no implied real victim; kinetic title, central human-first statement |
| S02 | 00:12–00:33 | [360,990) | Indonesian report | Reddit source slate, “Debited / Cancelled” conceptual animation; clearly attributed, root cause unknown |
| S03 | 00:33–00:50 | [990,1500) | Uber Eats report | Pending-hold/temporarily unavailable funds; no claim double-settled charge |
| S04 | 00:50–01:10 | [1500,2100) | Medusa report | GitHub issue URL/title; visual key-A → ambiguous failure → key-B; conditional double-refund risk |
| S05 | 01:10–01:26 | [2100,2580) | Business invariant | Stripe engineering doc attribution; side_effect_count ≤ 1 diagram |
| S06 | 01:26–01:43 | [2580,3090) | Meet FlowGuard AI | Real `homepage-desktop.webp` in premium browser frame, readable tilt/push-in |
| S07 | 01:43–02:13 | [3090,3990) | Three-stage analysis | Real input/result screenshots; Requirement Analyst → Risk Hunter → Verification Planner; external result POTENTIAL |
| S08 | 02:13–02:49 | [3990,5070) | Verification Lab | Genuine two concurrent attempts, vulnerable two effects VERIFIED_FAIL, corrected one VERIFIED_PASS; first-party synthetic only |
| S09 | 02:49–03:12 | [5070,5760) | TestSprite | Honest blocked→fix→green trajectory; official V3 97/97 on PR14 head 0f575c3; do not show historical screenshot as if final-run screenshot |
| S10 | 03:12–03:23 | [5760,6090) | CI | GitHub Actions post-merge 118/118 Vitest, 70/70 Chromium Playwright; real URL |
| S11 | 03:23–03:30 | [6090,6300) | Closing | Brand + tagline + website URL with 2s calm read time |

## Scene-specific directing notes
### S01 Human-first hook
Near-black canvas, one central line of transaction data flows into two possible outcomes. Human silhouette optional **only stylized** and not identifiable. Words emerge: “Behind every software failure, there can be a real person.” Do not portray actual victim's bank UI. Camera settles as report cards emerge.
### S02 Indonesia
Show platform and date: `Reddit r/indotech · Nov 2025`. Recreate a typographic *summary card*, not a fake Reddit screenshot. Large animated “Balance ↓” versus “Purchase: CANCELLED”; footer “Public user report · cause unverified”. URL citation short display and full URL in description.
### S03 Uber Eats
Report narrative emphasizes pending authorization hold, not actual double capture. `Pending ≠ settled`. Show money “temporarily unavailable” as conceptual ledger tiles; attribution and label “Illustrative visualization”.
### S04 Medusa
Use issue metadata/title and official GitHub issue link. Animated receipt IDs A/B represent possible behavior, not real keys; display “Conditional risk in reported retry path”. Avoid alleging shipped vulnerable deployment or settled duplicate actual customer payout.
### S05 Engineering invariant
Readable invariant `For one logical idempotency key: committed refund side effects ≤ 1`. Use contrast between business law and operational code. Stripe docs cited as engineering guidance, not sponsor or source of consumer report.
### S06 Product intro
Use real original `homepage-desktop.webp` from package, natural perspective transform with understated cyan edge lighting; end with brand wordmark. Product introduction must be legible. If screenshot is low-res do not over-enlarge.
### S07 Three-stage analysis
Show actual `analysis-workspace.webp` then `analysis-risk-results.webp` with moving focus rectangles. Dynamic three-node pipeline overlays screenshot. **POTENTIAL ≠ VERIFIED** lockup highly visible. Do not promise arbitrary external GitHub code execution or automated confirmed bug detection.
### S08 Lab evidence (hero scene)
Largest visual payoff: real `lab-vulnerable-evidence.webp` and `lab-corrected-evidence.webp`, optionally `before-after-authentic.webp`. Start at 2 requests/2 committed effects, invariant ≤1, `VERIFIED_FAIL`. Transition by highlighting changed controlled fixture, same logical rule: 2 requests/1 side effect, `VERIFIED_PASS`. Bottom at all times: `First-party synthetic fixtures only`. No fabricated code editor or new result screenshots.
### S09 TestSprite final
Show `PR #14`, required check, actual source link and typeset `97 / 97 PASSED · 0 FAILED · 0 BLOCKED` from final bot report at PR SHA `0f575c33...`. `testsprite-97-passed-overview.webp` depicts **older successful run**, never re-label it as final. The animated scoreboard may summarize authentic final numbers; label “Source: official TestSprite V3 on PR #14 final head”. Include the actual link in source ledger and video description.
### S10 CI
Real GitHub Actions `40273469302` and numbers `118/118 Vitest`, `70/70 Chromium Playwright` verified on main after merge. Do not claim Firefox/WebKit were part of this specific post-merge run.
### S11 Closing
End “FlowGuard AI” / “Evidence before verdicts.” and `flowguard-ai-smoky.vercel.app`. No new unverified capabilities.

## Sound & narration
Use `04_VOICEOVER_EN.txt` as source; narration in clear warm neutral English, no inappropriate sensational tone. User wants 100% AI production; prefer offline/open licensed TTS if available, or optional user-approved external TTS service with known price/usage. If no TTS environment, generate timing-verified silent preview with subtitles and explicit `VOICEOVER_PENDING` notice in handoff; **never simulate that audio is present**. Narration must end before scene transitions; tune speaking pace and subtitle timing. No need to turn Reddit report verbatim into impersonation.

## Approval criteria
Video must actually render and be reviewed for broken frames/transitions, missing assets, overflow text, sound clipping, timing, sources, UI authenticity, correct source-SHA association, subtitle readability, no hidden placeholder panels, and exact video 6300 frames. In addition to master MP4, render low-res draft/proof frames per scene before full 1080p export to save time. Keep project and checkpoints locally so model quotas do not destroy progress.
