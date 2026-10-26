# QA CHECKLIST — GPT-6 REVIEW / GEMINI IMPLEMENTATION

## A. Before render
- [ ] 11 scenes with exact ranges and boundaries, sum 6300.
- [ ] UI originals remain recognizable, not recreated screenshots.
- [ ] Each Reddit and Medusa story has source, date, and appropriate uncertainty label.
- [ ] No quotes attributed to anonymous users unless exact quote source-checked.
- [ ] No financial account details, faces, usernames or private consumer content displayed unnecessarily.
- [ ] Synthetic fixture disclaimer stays readable during S08.
- [ ] S07 `POTENTIAL` not confused with S08 `VERIFIED_*`.
- [ ] TestSprite **V3** official 97/97 PASS attributed to final PR head `0f575c3`, never to main.
- [ ] Screenshots showing older vendor 97/97 are not miscaptioned as newest proof.
- [ ] CI 118/118 + 70/70 tied to postmerge main, no unsupported browser claim.
- [ ] App URL readable and actually correct.
- [ ] Contrast/readability at 1080p and ideally preview downscaled to 720p/mobile.
- [ ] English subtitles synchronized; source footer not obscured.
- [ ] Speech speed natural; audio sources licensed; music under VO; no clipping.
- [ ] Zero missing local asset links; zero React warnings and broken frames.

## B. Preview and export
- [ ] Preview composition successfully loads in Remotion Studio.
- [ ] Midpoint frame render for each S01...S11 saved in `out/qa-frames/`.
- [ ] Boundary spot checks: 0,359,360,989,990,1499,1500,2099,2100,2579,2580,3089,3090,3989,3990,5069,5070,5759,5760,6089,6090,6299.
- [ ] Low-resolution draft reviewed beginning to end, especially transitions, captions and source URLs.
- [ ] 1080p H.264 MP4 exists; probe with ffprobe for duration ~210s, 1920x1080 30 FPS and audio stream if claimed.
- [ ] Audio if omitted is honestly marked pending rather than falsely complete.
- [ ] Edit provenance notes and QA result saved alongside output.

## C. How to iterate efficiently
Report each finding with `frame`, `scene`, `severity`, `what is wrong`, and `repair instruction`. Do not ask Gemini for a total visual redesign unless there is a consistent failure. Make 1–3 changes per iteration, re-render affected stills, then full draft. Preserve previous successful MP4 as checkpoint.

## D. No-app-change gate
No changes to FlowGuard production repo, Vercel, GitHub PRs, TestSprite, Discord. If user has already submitted, observe organizer freeze. Project demo lives ONLY inside `P:\Demo Vid`.
