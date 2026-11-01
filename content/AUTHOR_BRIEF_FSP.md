# Lernpfad — brief for unit authors of the pharmacy course `de-fsp` (Pharmazie-Deutsch / Fachsprachprüfung)

You write lesson units for Lernpfad, a free private language-learning website for Ehsan and his wife Sanaz. Sanaz is a
foreign-trained pharmacist preparing for the C1 Fachsprachprüfung (FSP) for pharmacists in Berlin. Correctness is the top priority:
every German sentence must be correct, natural and at the right level; every English translation exact; every exercise answer
unambiguous; every grammar explanation factually right; and **every pharmaceutical statement accurate** (a wrong dose or a wrong
interaction is worse than useless for an exam candidate).

Read first (in /home/claude/lernpfad):
1. `content/SCHEMA.md` — the JSON format.
2. `content/CURRICULUM_FSP.md` — the course plan, your unit table, the pharmacy content rules. Follow it exactly.
3. `content/FSP_HANDBOOK_SOURCE.md` — the handbook this course is built on (exam format, seven steps, Redemittel, documentation
   structure, SBAR, Fachsprache → Laiensprache list, vocabulary, three mock exams with keys). Use its facts and terminology;
   don't contradict it. If you think the handbook itself is wrong on a fact, don't copy the error — mention it in your final message.
4. `content/CURRICULUM_NEW_LEVELS.md` — only for the general size rules of B1/C1 units.
5. Format models (copy their structure exactly: grammar tables, exercises, dialogue speakers, reading questions):
   `content/de-en/B2/u01.json` (for C1) and `content/de-en/A2/u04.json` / `content/de-en/B1/u01.json` (for B1).
   Note: in de-en the support language is English, German has **no `pr` fields** — same here.

Write each unit with a Python script that builds the dict and `json.dump(obj, f, ensure_ascii=False, indent=2)` + newline,
to `content/de-fsp/<LEVEL>/uNN.json` with `"level": "<LEVEL>"` if the models carry a level field (copy whatever the models do).
Then run `python3 tools/validate.py content/de-fsp/<LEVEL>/uNN.json` — every file must print OK; fix until it does.

Style rules:
- German: correct Rechtschreibung (ß/ss, capitalisation, commas before subordinate clauses), correct cases, natural pharmacy German
  as spoken in a German Apotheke. Patients are addressed with **Sie**; team members (PTA Lena) may be "du" if natural.
- English (support language, `s` fields, grammar explanations, goals): American spelling, clear and short.
- Text that the voice reads (`t` of words, examples, phrases, dialogue lines, reading text, exercise sentences): no "/", "=", "→",
  "·", brackets, digits or unit abbreviations — write numbers and units out ("vierhundert Milligramm", "dreimal täglich",
  "zwei bis drei Tage"). Exception: headword `t` of a word may be a short term; still avoid symbols there.
  A lay-translation exercise is written as e.g. t "Die Mykose ist in Laiensprache eine ___." with answer ["Pilzerkrankung", "Pilzinfektion"].
- Words: nouns with article in `t` ("die Packungsbeilage") and plural in `pl` if the schema/model has it; `s` = "English · Laie: plain German"
  when a lay term exists, otherwise just English. One emoji per word if a fitting one exists, else "".
- Dialogue speakers: one f and one m voice. Names from the curriculum (Frau Ahmadi / Herr Ahmadi as pharmacist, Frau Richter,
  Herr Klein, Frau Becker, Frau M., Dr. Weber, PTA Lena). Never use the name "Neda".
- Pharmacy facts: only standard, uncontroversial label facts. Typical examples you may use: ibuprofen 400 mg for adults,
  max. 1200 mg per day in self-medication, take with/after a meal, not for more than 4 days for pain / 3 days for fever without a doctor,
  contraindicated in the last trimester of pregnancy and in active stomach ulcers; paracetamol max. 4 g per day for adults, liver risk
  with alcohol; macrolides (clarithromycin) inhibit CYP3A4 → simvastatin exposure ↑ → myopathy/rhabdomyolysis risk, simvastatin
  is contraindicated with clarithromycin (pause the statin or choose another antibiotic); amoxicillin rash in children → AMK/UAW report;
  antibiotic course: take as prescribed, don't stop early unless the doctor says so; insulin and many vaccines in the fridge at 2–8 °C,
  do not freeze. When unsure about a fact, leave it out.
- Grammar: two points per unit as in the table, each with a short English explanation, an example table and 6–8 exercises
  (mix of choice / type / order; order sentences ≤ 10 words, give `alts` for other correct word orders). Exercises must be about
  pharmacy situations.

Self-check every unit before finishing: re-read each `t` / `s` pair, each exercise and its answer (is any other option also correct?),
each reading question against the text, and every number/fact.
Only write your own files (other authors write the other units at the same time — stay on your themes and avoid using the same
headwords as the other units of the course: B1 u01–u06 and C1 u01–u08 share one vocabulary space, plus the de-en course for
very general words).

Final message: list of files written and, for each unit, one line with the theme and any doubt you could not resolve.
