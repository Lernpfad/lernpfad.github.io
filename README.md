# Lernpfad

A private language-learning website for Ehsan and Sanaz. It starts with **German A1–C1, explained in English** (51 units:
pictures, natural voices, vocabulary, listening, reading, writing, grammar, word order, matching, spaced repetition).
More languages can be added later as further courses. Progress is synced per person across devices, and the site works offline.

## Addresses
- Main: https://lernpfad.github.io (GitHub Pages, serves `/docs`)
- Login and progress server: https://lernpfad.zabanyar.workers.dev (Cloudflare Worker `lernpfad`; its code is `src/worker.js`, deployed in the Cloudflare dashboard editor)

## Logins
Name only, not case-sensitive. The list is the Worker secret **USERS** (Cloudflare → Workers & Pages → **lernpfad** → Settings →
Variables and secrets), JSON: `[{"id":"ehsan","name":"Ehsan","aliases":["احسان"]},{"id":"sanaz","name":"Sanaz","aliases":["ساناز"]}]`.
The value can't be read back — always paste the complete list. For local testing put `USERS=[…]` in `.dev.vars` (ignored by git).

## How it is built
- `content/<course>/<level>/uNN.json` — lesson content (`content/SCHEMA.md`; curricula in `content/CURRICULUM*.md`). Validate with
  `python3 tools/validate.py content/*/*/*.json`; automatic audit with `python3 tools/audit.py`.
- `tools/build.py` — turns content into `docs/data/…` (audio and picture paths, offline file lists, course index); to add a language,
  add it to `COURSES` and write its units.
- `tools/tts.py` — generates the MP3 voices (sherpa-onnx; German: Piper thorsten-high and kerstin-low).
- `docs/` — the website (plain HTML/CSS/JS, no build step; service worker for offline use).
- `src/worker.js` — Cloudflare Worker: name login + progress sync (Workers KV), serves `docs/` as static assets.

The German course is shared with the family site Zabanyar (same reviewed content), but this is a separate site, repo and database.

## Credits
Pictures: Microsoft Fluent Emoji (MIT), Twemoji (CC-BY 4.0). Voices: Piper (thorsten, kerstin). Font: Vazirmatn (OFL).
