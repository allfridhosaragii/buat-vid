# LEDGER ASLI: Sources, Proof & Claim Boundaries

## Public problem reports — ORIGINAL CASES ARE **NOT** CASES FIXED BY FLOWGUARD

| Source | Primary URL | What may be said | What must NOT be claimed |
|---|---|---|---|
| Indonesia QRIS/Google Play user report, Nov 2025 | https://www.reddit.com/r/indotech/comments/1osvnyi/jebakan_betmen_apa_ada_yang_pernah_gagal/ | User described a debited balance with an in-app purchase shown cancelled | A known bug root cause; actual proven double-debit; FlowGuard fixed it |
| Uber Eats customer discussion, Apr 2026 | https://www.reddit.com/r/UberEATS/comments/1sn6soa/uber_this_is_ridiculous/ | Customer described funds unavailable; discussion raised possibility of pending authorization hold | Proven duplicate settled charge or fraud |
| Medusa issue #16681, Sep 2026 | https://github.com/medusajs/medusa/issues/16681 | Public report of retry changing idempotency key and conditional double refund risk | Proven customer duplicate refund; issue definitively fixed/merged; project endorsed FlowGuard |
| Stripe official idempotency docs | https://docs.stripe.com/api/idempotent_requests | General technical principle: idempotent retries protect against duplicate side effects | Stripe caused above user reports |

The three reports were discovered during project research, not verified origins of the original FlowGuard product idea. Attribution and dates must appear on-screen and in source description. Use concise paraphrases, not invented quotes.

## FlowGuard project — real repo and source
- GitHub repo: https://github.com/allfridhosaragii/FlowGuard-AI (public).
- Live app: https://flowguard-ai-smoky.vercel.app/
- PR analysis: https://flowguard-ai-smoky.vercel.app/analyze
- Verification lab: https://flowguard-ai-smoky.vercel.app/lab
- Historical build-window PR #1: https://github.com/allfridhosaragii/FlowGuard-AI/pull/1 (opened Oct 20 2026; 22 pass / 1 blocked at that time).
- FINAL merged PR #14: https://github.com/allfridhosaragii/FlowGuard-AI/pull/14
- PR head `0f575c33d3d424843885eac73b46f2ff4b832d0e` official bot status: 97/97 passed, 0 failed, 0 blocked, TestSprite V3.
- Official FINAL vendor report: https://www.testsprite.com/dashboard-v3/o/28a6d5ec-2a40-54eb-9bf6-0c87db224fde/projects/570eab99-607a-49fa-96b2-fe5ef724f2d9/execution/901e7027-1c4a-477f-adc9-ca0d17b16635
- Postmerge main HEAD `dd00c0b0a64712da5137c454927ef9c50cebd8be`, same Git tree as final PR head `b654cd2c5507a6cdf79569348f62908dafa6af61`. **No separate vendor 97/97 run confirmed on main**; vendor result belongs to PR head.
- Postmerge CI (118/118 Vitest, 70/70 Playwright Chromium): https://github.com/allfridhosaragii/FlowGuard-AI/actions/runs/40273469302
- GitHub branch ruleset ID 25749816 (active), requires `test-and-verify` and `TestSprite V3` status checks.

## Core capability limits
- External GitHub PR and snippet analysis gives **POTENTIAL** heuristic/model findings with scoped reasoning; it does not execute third-party PR code.
- Three conceptual roles: Requirement Analyst, Risk Hunter, Verification Planner; don't claim neural AI used on every run (can use deterministic heuristic mode).
- Controlled first-party refund fixtures: 2 concurrent attempts, vulnerable 2 committed side effects `VERIFIED_FAIL`, corrected 1 committed side effect `VERIFIED_PASS`, invariant ≤1, no bank integration.
- SQL-deadlock and healthy-stream are in-memory simulations, not evidence for a live SQL database or third-party event system.
- Historic `testsprite-97-passed-overview.webp` / source PNG show *earlier* 97/97 TestSprite success at prior commit, **not** the final head `0f575c33`. Do not overwrite/edit them to masquerade as final. For final report, typeset supported numbers and link official PR bot comment/report, or capture new read-only browser screenshots of exact final report if possible.

## Suggested video description disclosures
“Public consumer and developer reports are independent third-party accounts illustrating engineering problems; root causes and actual losses are not independently established. FlowGuard AI did not fix those third-party incidents. Verification scenes use first-party synthetic fixtures. External PR findings are potential, not executed proofs. TestSprite V3 97/97 is the official final check on PR #14 head, before merge; post-merge CI is separate.”
