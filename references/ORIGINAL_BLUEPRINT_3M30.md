# FLOWGUARD AI — Video Demo 3 Menit 30 Detik
## Production Blueprint V2 — Human Stories → Engineering Risk → Verified Evidence

**Tanggal:** 26 Oktober 2026 WIB  
**Status:** storyboard & voice-over final siap produksi; **BELUM** MP4 hasil render.  
**Durasi master:** **03:30 = 210 detik = 6.300 frame** pada 30 FPS.  
**Output rencana:** 1920×1080, 16:9, H.264 MP4, English narration, English captions, visual asli + motion graphics Remotion.  
**Operasi:** produksi di proyek video TERPISAH. Tidak ada perubahan di repo aplikasi FlowGuard AI, tidak trigger TestSprite, tidak mengubah Discord atau Vercel.

---

## 1. Positioning film

**Tema:** *Behind Every Software Failure, There Is a Real Person.*  
**Premis:** keluhan nyata membantu mengilustrasikan mengapa keandalan pembayaran penting; risiko teknis memerlukan pengujian berbasis business invariant; FlowGuard AI membantu menyusun investigasi dan mengeksekusi fixture sintetis yang terkendali; integrasi TestSprite membuktikan siklus test-and-fix pada proyek ini.

**Kalimat inti:** *Evidence before verdicts. Don't just review code. Prove the behavior.*

Batas klaim utama: laporan publik ini **mendukung relevansi persoalan**, tetapi **bukan bukti bahwa pengalaman orang tersebut disebabkan oleh bug spesifik yang kita peragakan**, dan **bukan bukti bahwa laporan itu menginspirasi kita pada awal sejarah pengembangan**. Jangan menyatakan FlowGuard memperbaiki produk pihak ketiga atau memulihkan uang mereka.

---

## 2. Tiga laporan asli untuk opening dan satu fondasi teknis

### A. Pengguna Indonesia — QRIS/Google Play, November 2025
- **Sumber primer:** https://www.reddit.com/r/indotech/comments/1osvnyi/jebakan_betmen_apa_ada_yang_pernah_gagal/
- **Tanggal sumber:** 9 November 2025.
- **Apa yang dilaporkan:** pengguna melakukan pembelian in-app melalui Google Play menggunakan QRIS. Menurut posting, saldo mobile banking berkurang tetapi pembelian tidak masuk dan riwayat Google Play menunjukkan `cancelled`.
- **Apa yang TIDAK diketahui:** apakah dana kemudian kembali, penyebab utamanya, dan apakah ada concurrency/idempotency bug.
- **Copy layar yang aman:** `INDONESIA · PUBLIC USER REPORT · NOV 2025` / `Payment debited. Purchase shown as cancelled.` / `Reported experience — root cause unverified.`
- **Visual:** motion-design kartu cerita bersumber, bukan tangkapan layar aplikasi korban yang dibuat-buat; tautan tampil pada *source slate* dan deskripsi video.

### B. Pengguna Uber Eats — saldo tertahan, April 2026
- **Sumber primer:** https://www.reddit.com/r/UberEATS/comments/1sn6soa/uber_this_is_ridiculous/
- **Tanggal sumber:** 16 April 2026.
- **Apa yang dilaporkan:** pengguna merasa dana tambahan tertahan untuk pesanan; dalam diskusi, orang lain menegaskan entri `Pending` bisa berupa *authorization hold*, bukan transaksi selesai kedua. Pengguna mengakui dana tetap tidak dapat dipakai sementara.
- **Apa yang TIDAK diketahui:** jangan menyebutnya bukti Uber Eats menagih dua kali secara settled atau melakukan refund ganda.
- **Copy layar:** `CUSTOMER REPORT · APR 2026` / `A pending hold can still make funds unavailable.` / `Not proof of a second settled charge.`
- **Visual:** saldo ilustratif tanpa logo atau data rekening/receipt asli, label `Illustrative UI`.

### C. Developer open-source — Medusa payment module, September 2026
- **Sumber primer:** https://github.com/medusajs/medusa/issues/16681
- **Tanggal sumber:** 2 September 2026; issue ditutup `not planned` 24 September 2026.
- **Apa yang dilaporkan:** reporter menyatakan ketika panggilan refund ke provider gagal, record refund dihapus, dan retry memakai idempotency key yang berbeda. Bila refund pertama sebenarnya berhasil di provider tetapi balasannya hilang, retry **berpotensi** mengembalikan uang dua kali. Reporter memaparkan langkah reproduksi dan contoh kunci yang berbeda.
- **Apa yang TIDAK diketahui:** tidak ada bukti dalam issue itu bahwa konsumen nyata menerima refund ganda. Jangan menampilkan status issue sebagai perbaikan yang telah di-merge atau dituntaskan oleh FlowGuard.
- **Copy layar:** `OPEN-SOURCE BUG REPORT · SEP 2026` / `Refund retry → different idempotency key` / `Conditional duplicate-refund risk.`
- **Visual:** diagram pertama `ref_A` → timeout → kedua `ref_B` (huruf placeholder konseptual), plus label `Reported risk; not a confirmed customer loss`.

### D. Dasar engineering — dokumentasi Stripe
- **Sumber primer:** https://docs.stripe.com/api/idempotent_requests
- **Inti:** penggunaan idempotency key untuk menghindari side effects duplikat ketika operasi harus diulang setelah kendala jaringan.
- **Copy layar:** `Engineering principle: a retry must not silently duplicate an operation.`
- **Bukan:** bukti bahwa Stripe menyebabkan laporan pengguna di atas.

**Peraturan bukti:** hanya paraphrase ringkas, atribusi ke sumber primer + tanggal; jangan mengubah kata-kata agar terdengar lebih dramatis. Jangan menampilkan wajah, avatar, username, saldo spesifik, atau receipt orang tanpa alasan/izin. Bila menampilkan crop posting sungguhan, cantumkan sumber & sensor identitas; hindari pengambilan gambar yang menyiratkan dukungan mereka kepada FlowGuard.

---

## 3. Master storyboard tepat 03:30

| # | Timecode | Detik | Frame [start, end) | Judul scene | Materi visual & label layar |
|---|---|---:|---|---|---|
| 01 | 00:00–00:12 | 12 | [0, 360) | Human-first hook | Gelap → ilustrasi alur pembayaran terbagi dua. `Behind every software failure is a real person.` |
| 02 | 00:12–00:33 | 21 | [360, 990) | Indonesian customer report | Kartu sumber Reddit asli + animasi debit, receipt `CANCELLED`; footer `Reported experience · root cause unverified`. |
| 03 | 00:33–00:50 | 17 | [990, 1500) | Uber Eats pending-hold report | Kartu sumber + visualization `PENDING HOLD`; label tegas `Not proof of double settlement`. |
| 04 | 00:50–01:10 | 20 | [1500, 2100) | Medusa GitHub issue | GitHub Issue #16681 asli, highlighted `retry creates different idempotency key`; timeline `key A` → ambiguous failure → `key B`; `reported conditional risk`. |
| 05 | 01:10–01:26 | 16 | [2100, 2580) | Explain the invariant | Stripe idempotency doc URL + motion diagram `For one logical operation: committed side effects ≤ 1`; label `Engineering principle`. |
| 06 | 01:26–01:43 | 17 | [2580, 3090) | Introducing FlowGuard | Aset `homepage-desktop.webp`; camera push-in, judul `FLOWGUARD AI` / `Evidence before verdicts`. |
| 07 | 01:43–02:13 | 30 | [3090, 3990) | Three-stage analysis | Screenshot asli `analysis-workspace` → `analysis-risk-results`; roles Analyst / Hunter / Planner. `POTENTIAL ≠ executed proof`. |
| 08 | 02:13–02:49 | 36 | [3990, 5070) | Controlled verification lab | Split-screen asli `lab-vulnerable-evidence` vs `lab-corrected-evidence`; dua concurrent attempts; side effects 2 vs 1; `VERIFIED_FAIL` → `VERIFIED_PASS`; lower third `First-party synthetic fixtures only`. |
| 09 | 02:49–03:12 | 23 | [5070, 5760) | TestSprite integration | PR #14 asli, peralihan `blocked → fixed → green`; **angka final** 97/97 PASSED, 0 blocked, official TestSprite V3 on PR head `0f575c3`; link vendor final di sumber. |
| 10 | 03:12–03:23 | 11 | [5760, 6090) | Engineering trust | Animasi daftar green checks resmi: `118/118 Vitest`, `70/70 Playwright` on postmerge main. Hindari kata `security guaranteed`. |
| 11 | 03:23–03:30 | 7 | [6090, 6300) | Closing CTA | Brand, tagline, live URL `flowguard-ai-smoky.vercel.app`. Ending 1-2s boleh tanpa VO agar penonton membaca. |

**Total:** 12 + 21 + 17 + 20 + 16 + 17 + 30 + 36 + 23 + 11 + 7 = **210 detik**, 6.300 frames.  
**Rekomendasi pacing:** opening kisah manusia ~70 detik, dasar masalah ~16 detik, demo produk ~83 detik, proof TestSprite dan CI ~34 detik, penutup 7 detik. Musik dibangun progresif; turunkan saat narasi dan jangan menghilangkan waktu membaca kartu sumber.

---

## 4. Draft voice-over final — English (per scene)

**01 — Hook (00:00–00:12)**  
“Behind every software failure, there can be a real person. A delayed purchase. Money temporarily unavailable. A retry that behaves differently than expected.”

**02 — Indonesian report (00:12–00:33)**  
“In November 2025, an Indonesian customer publicly described a QRIS-funded app purchase. Their mobile banking balance had decreased, but the purchase never appeared, and Google Play marked it cancelled. The report describes the experience—not a verified technical root cause.”

**03 — Uber Eats report (00:33–00:50)**  
“In April 2026, an Uber Eats customer reported extra funds they could not use. Commenters pointed to a pending authorization hold, rather than a proven second settled charge. The impact of uncertainty was still real.”

**04 — Medusa technical report (00:50–01:10)**  
“Developers face a related engineering challenge. A September 2026 Medusa issue described a refund retry that could generate a different idempotency key after a provider error. If the first refund succeeded but its response was lost, another refund could become possible.”

**05 — Engineering principle (01:10–01:26)**  
“That is why payment systems need explicit invariants. Stripe's documentation explains idempotent requests: retries should not silently duplicate an operation. The question is not only whether code runs—but whether the business rule still holds.”

**06 — Product introduction (01:26–01:43)**  
“Meet FlowGuard AI. Built to help developers reason about behavioral risk, turn a business requirement into testable expectations, and distinguish suspected bugs from observed proof.”

**07 — Risk analysis (01:43–02:13)**  
“Start with a code snippet or a public GitHub pull request, then describe the rule that matters. FlowGuard's Requirement Analyst extracts invariants. Its Risk Hunter flags possible failure paths. Its Verification Planner proposes assertions to investigate. Findings from external code remain labelled POTENTIAL. Reading a pull request is not the same as executing it.”

**08 — Controlled lab (02:13–02:49)**  
“Now watch our controlled Verification Lab. With two concurrent refund attempts and the same logical key, the intentionally vulnerable synthetic fixture commits two side effects. The invariant allows only one, so the observed result is VERIFIED FAIL. Switch to the corrected fixture under the same controlled rule: just one side effect. VERIFIED PASS. These are reproducible first-party simulations—not claims about a real bank or an external repository.”

**09 — TestSprite (02:49–03:12)**  
“The engineering workflow was tested too. TestSprite automatically ran on our GitHub pull request. Earlier blocked checks prompted real improvements and repeat verification. On the final PR head, the official TestSprite V3 suite passed all ninety-seven tests, with zero failures and zero blocked cases, before merge.”

**10 — Postmerge CI (03:12–03:23)**  
“After merge, our independent CI also passed one hundred eighteen unit tests and seventy Chromium browser tests. Each result links back to a verifiable run.”

**11 — Closing (03:23–03:30)**  
“FlowGuard AI. Evidence before verdicts. Don't just review code. Prove the behavior.”

**Voice-over QA:** ini adalah draft narasi produksi, *bukan* audio yang sudah direkam. Validasi dengan TTS di setiap scene; apabila audio lebih panjang, pangkas teks atau alokasikan jeda dalam scene **tanpa melewati 03:30**. Jangan mempercepat suara berlebihan. Bila perlu utamakan kejelasan bukti dan kurangi efek dekoratif.

---

## 5. Aset asli FlowGuard AI & pemetaan scene

- `docs/assets/readme/homepage-desktop.webp` → Scene 06.
- `docs/assets/readme/analysis-workspace.webp`, `analysis-risk-results.webp` → Scene 07.
- `docs/assets/readme/lab-vulnerable-evidence.webp`, `lab-corrected-evidence.webp`, `before-after-authentic.webp` → Scene 08.
- `docs/assets/readme/github-pr14-checks.webp` + current official PR URL → Scene 09.
- `docs/assets/readme/testsprite-97-passed-overview.webp` adalah **screenshot hasil 97/97 historis pada SHA lebih lama**. Boleh digunakan hanya bila jelas berlabel historical; **jangan** melabelinya sebagai screenshot eksekusi final `0f575c3`. Untuk final 97/97, motion typeset asli didasarkan pada **bot comment dan status TestSprite di PR #14** serta link report vendor final.
- `docs/assets/readme/github-regression-actions.webp` + postmerge actual CI URL → Scene 10.
- Tiga sumber dari Reddit dan GitHub Issue **bukan aset FlowGuard**: tampilkan source references, bukan membuat review palsu.

Bukti final:
- Final PR: https://github.com/allfridhosaragii/FlowGuard-AI/pull/14
- Final PR head: `0f575c33d3d424843885eac73b46f2ff4b832d0e`
- Official TestSprite 97/97: https://www.testsprite.com/dashboard-v3/o/28a6d5ec-2a40-54eb-9bf6-0c87db224fde/projects/570eab99-607a-49fa-96b2-fe5ef724f2d9/execution/901e7027-1c4a-477f-adc9-ca0d17b16635
- Main postmerge commit: `dd00c0b0a64712da5137c454927ef9c50cebd8be` dengan isi Git tree yang sama seperti head PR final; **bukan** vendor run terpisah pada main.
- Postmerge CI: https://github.com/allfridhosaragii/FlowGuard-AI/actions/runs/40273469302
- Live: https://flowguard-ai-smoky.vercel.app/

---

## 6. Remotion implementation plan

Set `fps:30, width:1920, height:1080, durationInFrames:6300`. Scene start dan end harus mengikuti frame table. Buat `SourceCard`, `BrowserFrame`, `DualTransaction`, `InvariantBadge`, `EvidenceCounter`, `CheckTicker`, `AttributionFooter` sebagai komponen. Gunakan `Sequence` untuk scene dasar dan `AbsoluteFill` untuk lapisan background/UI, `spring` untuk micro-motion, `interpolate` untuk scroll, pan, zoom. **Sumber real-world harus eksplisit ditandai atribusinya sepanjang scene**.

Buat desain original namun konsisten dengan website: dark navy, cyan/teal, status red untuk `VERIFIED_FAIL`, green hanya untuk `VERIFIED_PASS` dan hasil tes benar. Hindari UI buatan AI yang menyerupai bukti asli; animasi konseptual wajib label `Conceptual illustration`.

Gunakan font yang berlisensi untuk ekspor video; jangan menyebarkan file font. Musik/SFX bebas lisensi atau lisensi jelas, audio vokal TTS berlisensi. Tambahkan subtitle Inggris sinkron, burn-in optional. Uji frame 0, boundary setiap scene, frame sebelum/sesudah transisi, dan seluruh URL sumber; spot-check integritas angka di layar.

Deskripsi YouTube/video harus memuat daftar `Source documents` (A-D), `Technical proof` (PR14, vendor final, CI), dan disclosure: `Public reports illustrate industry problems and do not establish root causes. Demonstration tests are first-party synthetic fixtures. External PR findings are potential risks unless independently verified.`

---

## 7. Submission discipline

**Video demo opsional** menurut https://www.testsprite.com/hackathon-s4 ; tidak punya skor khusus tetapi dinilai secara kualitatif ketika ditonton. **Jangan menunda posting Discord** melewati target pengguna demi video. Deadline perpanjangan dari arsip pengumuman panitia: 27 Oktober 2026, 13.59 WIB; target internal sebelum 10.00 WIB. Periksa aturan pinned Discord aktual bila berbeda. Setelah submit, jangan mengubah repo, README, deployment, pengujian, ataupun posting tanpa aturan panitia mengizinkan.

**Status akhir file ini:** konsep, riset sumber, storyboard frame-accurate, dan VO script **selesai**. MP4, musik, TTS, dan render **belum diproduksi**. Dokumen ini sendiri tidak mengubah aplikasi.
