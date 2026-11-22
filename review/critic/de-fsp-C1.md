# Critical review, pass 4: de-fsp C1 (Fachsprachprüfung)

Slice: `content/de-fsp/C1/u01.json` … `u08.json`. Read against `content/CURRICULUM_FSP.md`, `content/AUTHOR_BRIEF_FSP.md`,
`content/FSP_HANDBOOK_SOURCE.md` (exam format, the seven steps, documentation structure, SBAR, the three mock exams and their keys)
and `content/SCHEMA.md`. There was no earlier pass-3 review of this slice in `review/`. I checked every word, phrase, dialogue line,
grammar explanation, table, example, exercise and answer, reading sentence and question, sentence (including `alts`), goal and
title, and checked each pharmaceutical or legal statement against standard German label facts.

## 1. Verdict

This is a strong, exam-shaped level and the best part of the course. The eight units follow the real exam: Teil 1A
consultations (u01–u03, u08), the 1B monologue (u04), both Teil 2 text types the handbook models (note, u05; UAW report, u06),
the 3A SBAR phone call (u07) and 3B lay translation (u08, plus lay items in every unit). All three mock exams are built in almost
verbatim (ibuprofen with ASS, ramipril and a past ulcer; amoxicillin rash in a 4-year-old; budesonide/formoterol and salbutamol
with a shortage). The pharmacy content is correct: the ibuprofen contraindications and interactions, the paracetamol adult dose
(500 mg, 1–2 tablets, at least 6 h apart, at most 8 a day) with the hidden-paracetamol warning, the clarithromycin, CYP3A4 and
simvastatin contraindication with myopathy and rhabdomyolysis signs, the amoxicillin rash workup with the decision left to the
pediatrician and the AMK report, ICS mouth rinsing and the two inhalation techniques, and salbutamol needed more than twice a week
as a warning sign. The grammar is precise C1 work (dative passive without a subject, Zustandspassiv, Konjunktiv I with the
Konjunktiv II replacement, Plusquamperfekt with nachdem, Nominalstil and Verbalstil). Gaps: some exam tasks from the mocks are
never practiced (the formal e-mail to a practice, a colleague handover, the call to the pediatrician), the legal side of
shortage substitution is only hinted at, and the app's exercise types cannot train the free speaking and writing the exam
grades.

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u03 | `grammar[0].exercises[2].answer` | `["wirkendes"]` → `["wirkendes", "wirksames"]` | "Ibuprofen ist ein schnell wirksames Schmerzmittel" is equally correct and very common (u08 itself says "schnell wirksamer Bronchodilatator"); a learner typing it was marked wrong. |
| u05 | `grammar[1].exercises[4].answer` | added `"Alternativ"` | "Ibuprofen kam nicht in Frage. Alternativ wurde Paracetamol empfohlen." is correct and fits the meaning. |
| u07 | `words[8].emoji` (die Myopathie) | `💪` → `""` | The flexed biceps means strength, the opposite of a muscle disease, which is misleading in "which picture / which word" questions. No emoji fits. |
| u01 | `sentences[0].alts` | none → `["Aus drei Teilen besteht die Fachsprachprüfung."]` | Order task (sentences of 8 words or fewer are used for word order); a correct order was missing. |
| u01 | `sentences[1].alts` | none → `["Ein Prüfer spielt im ersten Teil den Patienten."]` | Missing correct order. |
| u01 | `sentences[2].alts` | none → `["Ich frage zuerst, für wen das Medikament ist."]` | Missing correct order. |
| u02 | `sentences[1].alts` | none → `["Ich würde Ihnen davon abraten.", "Ihnen würde ich davon abraten."]` | Missing correct orders (the same orders are already accepted in g01 X7). |
| u02 | `sentences[4].alts` | none → `["Sie sollten viel trinken, solange Sie Fieber haben."]` | Missing correct order (clause order). |
| u02 | `sentences[7].alts` | none → `["Ich fasse kurz noch einmal zusammen."]` | Missing correct order. |
| u03 | `sentences[0].alts` | none → `["Jeden Morgen nimmt die Patientin einen Blutverdünner ein."]` | Missing correct order. |
| u03 | `sentences[2].alts` | none → `["Ibuprofen ist bei bestehenden Magengeschwüren kontraindiziert."]` | Missing correct order. |
| u03 | `sentences[5].alts` | none → `["Bei Rückenschmerzen kann ein Wärmepflaster gut helfen."]` | Missing correct order. |
| u03 | `sentences[6].alts` | none → `["In Laiensprache bedeutet Lumbalgie Kreuzschmerzen."]` | Missing correct order. |
| u04 | `sentences[0].alts` | none → `["Heute möchte ich über Antibiotikaresistenzen sprechen.", "Über Antibiotikaresistenzen möchte ich heute sprechen."]` | Missing correct orders. |
| u04 | `sentences[3].alts` | none → `["Apotheken können Patienten zudem niedrigschwellig beraten."]` | Missing correct order (the adverb in the middle field, as taught in g01). |
| u04 | `sentences[5].alts` | none → `["Beratung kostet zwar Zeit, aber sie verhindert Fehler."]` | Missing correct order (zwar in the middle field, as taught in g02). |
| u05 | `sentences[2].alts` | none → `["Seit dem Vortag klagte der Patient über Zahnschmerzen."]` | Missing correct order. |
| u05 | `sentences[3].alts` | none → `["Die Patientin nimmt als Dauermedikation ein Antikoagulans ein."]` | Missing correct order. |
| u05 | `sentences[4].alts` | none → `["Dem Patienten wurde daraufhin von Ibuprofen abgeraten."]` | Missing correct order (the adverb in the middle field, as taught in g02). |
| u05 | `sentences[7].alts` | none → `["Man verwendet in der Notiz Fachbegriffe statt Laiensprache."]` | Missing correct order. |
| u06 | `sentences[6].alts` | none → `["An die AMK wird der Fall gemeldet."]` | Missing correct order. |
| u06 | `sentences[7].alts` | none → `["Für eine Meldung reicht auch ein Verdacht aus."]` | Missing correct order. |
| u07 | `sentences[2].alts` | none → `["Er nimmt laut Medikationsplan dauerhaft Simvastatin."]` | Missing correct order. |
| u07 | `sentences[3].alts` | none → `["Laut Fachinformation ist die Kombination kontraindiziert."]` | Missing correct order. |
| u07 | `sentences[6].alts` | none → `["Ein anderes Antibiotikum käme als Alternative in Frage."]` | Missing correct order. |
| u08 | `sentences[0].alts` | none → `["In Laiensprache bedeutet Dyspnoe Atemnot."]` | Missing correct order. |
| u08 | `sentences[3].alts` | none → `["Der Blutdruck ist bei einer Hypotonie zu niedrig."]` | Missing correct order. |
| u08 | `sentences[4].alts` | none → `["Tragen Sie das Notfallspray bitte immer bei sich.", "Tragen Sie bitte das Notfallspray immer bei sich."]` | Missing correct orders (the imperative with the same words). |
| u08 | `sentences[6].alts` | none → `["Leider ist der Inhalator zurzeit nicht lieferbar.", "Zurzeit ist der Inhalator leider nicht lieferbar."]` | Missing correct orders. |

All files print OK with `tools/validate.py`. `tools/audit.py` reports only the 5 known false alarms for de-fsp C1 (adjective + noun
headwords: der grippale Infekt, die ärztliche Abklärung, das weitere Vorgehen, der zeitliche Zusammenhang, das inhalative
Glukokortikoid).

## 3. Remaining issues (need a decision or bigger work)

**High**
1. *Teil 2 formal e-mail is not taught.* Mock exam 3 asks for an e-mail to a practice (Betreff, Anrede, Sachverhalt, Bitte um
   neues Rezept, Rückfragen, Grußformel), and the handbook has a model. No unit practices this register: u05 and u06 cover only the
   note and the UAW report. Suggestion: make the u08 reading (or a new u09 reading) the model e-mail, and add phrases ("Ihre
   Patientin … hat heute ein Rezept über … eingelöst", "Wir würden Sie daher bitten, …", "Für Rückfragen stehen wir Ihnen gern zur
   Verfügung").
2. *Teil 3A has only one scenario.* u07 is the doctor call. The mocks also need a shift handover to a colleague (Mock 1: Frau Lange),
   a call to the pediatrician about the rash (Mock 2: Dr. Schulz, with "makulopapulöses Exanthem am Stamm, kein Angioödem, wie
   möchten Sie weiter vorgehen?") and the doctor's callback about the spacer (Mock 3: Dr. Yilmaz). The vocabulary for all three
   already exists in u03, u06 and u08. Suggestion: add one 3A dialogue each as `sentences`, or swap the u06 or u08 reading for an
   SBAR transcript.
3. *Shortage substitution law is only hinted at.* u08 correctly has the pharmacist consult the doctor before switching from the
   powder inhaler to an MDI, and B1 u06 shows a same-strength, same-pack-size switch to another manufacturer. Neither level states
   the rule an examiner may ask about: since the ALBVVG (2023), § 129 Abs. 2a SGB V lets the pharmacy, when a medicine is
   unavailable, change pack size, number of packs, partial quantities and strength without consulting the prescriber (total amount
   of active ingredient not exceeded, strength only if there are no pharmaceutical concerns). Only after consulting the prescriber
   may it dispense a pharmacologically and therapeutically comparable medicine, documented on the prescription. Note that the
   handbook (Mock 3) says a change of dosage form "needs a new prescription". The course's wording ("mit der Ärztin absprechen") is
   the safer one, but the handbook claim should be checked against the current § 129 (2a) and the Rahmenvertrag. Suggestion: one
   short reading paragraph plus 2–3 words (die Nichtverfügbarkeit, die Rücksprache dokumentieren, pharmakologisch-therapeutisch
   vergleichbar), after a fact-check of the current wording.

**Medium**
4. *Paracetamol with phenprocoumon (u05).* Recommending paracetamol for 2 days until the dental appointment is the standard
   choice. A C1 candidate should still be able to say that regular use of paracetamol for more than about a week, or high doses,
   can raise the INR, and should ask about weight (the 4 g a day maximum assumes adults over 50 kg), liver disease and alcohol for a
   68-year-old. Suggestion: add one reading sentence ("Bei längerer Einnahme kann Paracetamol die Wirkung von Phenprocoumon
   verstärken; deshalb wurde es nur bis zum Zahnarzttermin empfohlen.") and one question about weight in the dialogue.
5. *The AMK reporting duty is described softly.* u06 w01: "Eine UAW … **sollte** an die AMK gemeldet werden". For pharmacists this
   is a duty under the chambers' Berufsordnung, and the AMK passes reports to the BfArM or PEI. Suggestion: "… wird an die AMK
   gemeldet; dazu sind Apothekerinnen und Apotheker berufsrechtlich verpflichtet", after checking the Berlin Berufsordnung.
6. *Monologue topics are narrow.* u04 covers prescription-only painkillers (dialogue) and shortages (reading); antibiotic
   resistance appears only in words and grammar. The handbook's other practice topics are missing: E-Rezept, vaccination in
   pharmacies, medication review for older patients (a paid pharmaceutical service since 2022), cannabis as a medicine.
   Suggestion: 3–4 short pro/contra outlines as `sentences` or an extra reading, so the learner has content as well as connectors.
7. *Rx/OTC law and special prescriptions at C1.* The course never names the AMVV (Verschreibungspflicht), § 43 AMG
   (Apothekenpflicht), BtM handling (BtM-Rezept, Dokumentation) or the pharmaceutical services (pDL, for example the extended
   inhalation training, which fits u08 directly). These are typical Fachgespräch follow-up questions. Suggestion: words and example
   sentences in u04 and u08.
8. *Phrases and short dialogue lines are also used as word-order tasks, without `alts`.* The app turns phrases and dialogue lines of
   8 words or fewer into order tasks. Phrases with "…" (u02, u03, u04, u05, u07, u08: for example "Ich würde Ihnen … empfehlen.")
   then show "…" as a tile, and lines like "Ja, natürlich. Worum geht es?" accept only one order. Suggestion (app side, applies to
   all courses): skip items containing "…" in `orderStep`, or let phrases and lines carry `alts`.

**Low**
9. Emoji: u05 w06 (das Antikoagulans) and u03 w12 (das Blutungsrisiko) both use 🩸. A blood drop is weak for an anticoagulant;
   consider "" for Antikoagulans.
10. u08: the patient calls the powder inhaler "Kortisonspray" (L11) and the phrases call both devices "Spray" (p05, p06). That is
    natural lay speech, but the exam checks that the patient tells the two devices apart. Consistent lay labels ("das Kortison-Gerät
    für jeden Tag" and "das Notfallspray") would model this better.
11. u07: the reading mentions switching to a statin not metabolized by CYP3A4 only in general terms. Naming pravastatin or
    rosuvastatin as the usual example would give the learner a concrete alternative for the Fachgespräch.
12. Exam logistics are only in the u01 reading. Timing per part (Teil 1 about 15 + 5 min, Teil 2 about 20 min, Teil 3 about
    10 + 10 min; the Westfalen-Lippe format, since Berlin states only the 60 min total) could go into the u01 goals or reading,
    flagged "check your invitation letter", as the handbook does.

## 4. Improvement ideas (prioritized)

1. **Mock-exam runs.** The content of the three mocks is spread over u03, u06 and u08. Add an optional "Prüfungssimulation" step
   per mock that strings the parts together (1A role-card prompt → 1B topic → 2 writing prompt with a 120–150 word target and the
   checklist → 3A prompt → 3B eight terms typed one by one), with a timer and a self-recording button. The 3B part fits the current
   `type` exercise perfectly. Each mock's eight terms are already headwords, so this is mostly assembly.
2. **Error-correction drills for Teil 2.** The handbook's typical mistakes (bullet points, missing date or dose, lay words where
   technical ones fit) suit `choice` items: "Which sentence belongs in a note?" (Stichpunkt versus Fließtext; "die Tabletten
   vertragen sich nicht" versus "es besteht eine Wechselwirkung").
3. **Teach-back and closing variety.** Every 1A dialogue ends with "Können Sie mir kurz sagen, wie …?". Add 2–3 alternatives
   ("Damit ich sicher bin, dass ich mich klar ausgedrückt habe: …", "Wie werden Sie das Spray morgen früh anwenden?") so it does
   not sound memorized. Examiners penalize scripts.
4. **Difficult patients.** The mocks include a patient who insists ("Kann ich nicht einfach zwei nehmen?", "Macht Kortison nicht
   dick?"). Good, and both are used. Add one where the patient refuses the alternative or is angry about the shortage, to practice
   de-escalation in Sie-form.
5. **Cultural fit.** For an Iranian-trained pharmacist, the antibiotic-resistance monologue gains depth from comparing
   availability without prescription in Iran with strict Rx status in Germany. A Ramadan dosing consultation (shifting a
   three-times-daily antibiotic to non-fasting hours, or advising to consult the doctor) is a realistic Berlin case. Both fit u02 and
   u04 without changing the unit structure.
6. **Cumulative 3B list.** A single review list of all Fach → Laie pairs in the course (about 70 already exist across B1 and C1)
   would match the exam task exactly and could be generated from the `s` fields ("· Laie: …").

## 5. Pass 5 (Nov 2026)

Carried out `review/BRIEF_FIX5.md` tasks 1–7 for `content/de-fsp/C1/u01…u08.json` and wrote the **new unit u09**. All 9 files
print OK with `tools/validate.py`; `tools/audit.py` reports only the 5 known adjective + noun false alarms. `tools/build.py`
globs `content/de-fsp/C1/u*.json`, so u09 is picked up without any change (checked with `process_unit`, no missing pictures).

### New unit u09 "Die E-Mail an die Praxis und die Übergabe" (📧)

| Part | Content |
|---|---|
| Goals | Formal e-mail to a practice (Teil 2, mock 3); formal noun–verb phrases; shift handover in technical German (Teil 3A, mock 1); sein / haben + zu + infinitive; what a pharmacy may exchange in a shortage |
| Words (15) | der Betreff, die Anrede, die Grußformel, der Sachverhalt, die Rückmeldung, die Verordnung, der Rückruf, ausstehen, die Übergabe, die Schicht, der Defekt (Defektliste), das Betäubungsmittel, der Rabattvertrag, das Aut-idem-Kreuz, pharmakologisch-therapeutisch vergleichbar |
| Phrases (8) | Sehr geehrte Frau Dr. Yilmaz, · Ihre Patientin … hat heute ein Rezept über … eingelöst. · Das Präparat ist laut Großhandel voraussichtlich … nicht lieferbar. · Wir würden Sie daher bitten, … · Für Rückfragen stehen wir Ihnen gern zur Verfügung. · Mit freundlichen Grüßen · Ich übergebe Ihnen kurz die offenen Punkte. · Der Rückruf der Praxis steht noch aus. |
| Dialogue (12 lines) | Herr Ahmadi hands over to Frau Lange (the colleague named in mock 1): (1) Frau Richter's case from mock 1 in SBAR style (Lumbalgie; ASS 100 mg, ramipril, ulcer history → no ibuprofen, heat patch, refer to the doctor if no better after 3–4 days or numbness); (2) pending callback from Dr. Yilmaz about Frau Becker's unavailable powder inhaler (MDI with spacer to suggest, document the consultation, call the patient back); (3) Defektliste (children's antibiotic syrup to re-check tomorrow); (4) narcotics: today's receipts and dispensings documented, stock correct; colleague summarizes. |
| Grammar 1 | "zur Verfügung stehen, Rücksprache halten": the fixed frame of the formal e-mail (Betreff without verb, Anrede with comma and lower-case start, Sachverhalt, Bitte, Grußformel without comma) and Funktionsverbgefüge; 8 exercises incl. rewrite (in Kenntnis setzen) and function item (which sentence fits a formal e-mail) |
| Grammar 2 | "Das Rezept ist noch zu prüfen.": sein / haben + zu + infinitive for open tasks, zu inside separable verbs, negated = cannot; 8 exercises incl. rewrite (muss … werden → ist zu …) and function item (what to do if Frau Richter returns) |
| Reading | The model e-mail to Dr. Yilmaz (mock 3, Teil 2): subject, salutation, prescription with dose, 6-week shortage, same combination available as MDI, switch not made without consulting the doctor (dosage form and technique change), spacer because of arthritis, request for agreement *or* a new prescription, salbutamol already dispensed, offer for questions, closing. 5 questions, 2 of them inference. |
| Sentences (8) | e-mail chunks, handover, BtM documentation, aut-idem cross, Rabattvertrag |

The e-mail deliberately asks for "agreement or, if necessary, a new prescription" instead of the handbook's flat claim that the
change of dosage form "needs a new prescription" (see issue 3).

### Remaining issues and ideas from section 3 and 4: what was done

| Item | Status | What was done |
|---|---|---|
| 1 High: Teil 2 formal e-mail | done | u09 (reading = model e-mail, grammar 1, phrases). |
| 2 High: Teil 3A only one scenario | done | Handover to Frau Lange = u09 dialogue. Call to Dr. Schulz (mock 2): 4 SBAR sentences in u06 (makulopapulöses Exanthem am Stamm, leichter Pruritus, keine Dyspnoe, kein Angioödem, "Wie möchten Sie weiter vorgehen?") + function item u07 g01 X4. Dr. Yilmaz callback (mock 3): u08 sentences ("Wäre ein Dosieraerosol mit Inhalierhilfe für Frau Becker eine Option?") and u09 dialogue L6–L8. |
| 3 High: shortage substitution law | done | u08 reading + 4 sentences (simplified, § 129 SGB V / Rahmenvertrag): Rabattvertrag product unless the aut-idem cross excludes it; exchange only with same active ingredient, strength, pack size, same or interchangeable dosage form and at least one shared indication; if unavailable, without consulting: other pack size, several smaller packs, or another strength if there are no pharmaceutical concerns, total amount not exceeded; a pharmacologically-therapeutically comparable drug only after consulting the prescriber, documented. New headword *die Nichtverfügbarkeit* (u08 w16); u09 words Rabattvertrag, Aut-idem-Kreuz, pharmakologisch-therapeutisch vergleichbar; 2 new questions. A change of dosage form is not presented as allowed without consultation. |
| 4 Medium: paracetamol with phenprocoumon | done | u05 dialogue: weight question added (L4/L5, 80 kg); L8 says why only until the dental appointment; reading: weight in the header and "Paracetamol wurde nur kurzfristig empfohlen, da es bei längerer regelmäßiger Einnahme die Wirkung von Phenprocoumon verstärken kann."; 2 new questions. |
| 5 Medium: AMK duty soft | done | u06 w01 example: "… wird an die AMK gemeldet; dazu sind Apothekerinnen und Apotheker berufsrechtlich verpflichtet." |
| 6 Medium: monologue topics narrow | done | u04: 7 new sentences (E-Rezept pro and con, flu vaccination of adults by trained pharmacists, medication review, cannabis as a medicine, AMVV, AMG, antibiotics without prescription abroad) + headword *die Medikationsanalyse* + function item on vaccination (g02 X4) + rewrite on the E-Rezept (g02 X1). Cannabis kept to a neutral sentence because the rules are in flux. |
| 7 Medium: Rx/OTC law, BtM, pDL | done | AMVV and AMG sentences in u04; BtM documentation in u09 (dialogue, grammar 2, sentence); pDL inhalation training sentence in u08. |
| 8 Medium: order tasks with "…" / no alts on phrases | not done | App side (lead). |
| 9 Low: 🩸 for Antikoagulans | done | u05 w06 emoji → "". |
| 10 Low: inconsistent inhaler labels | done | u08 uses "das Kortison-Gerät" (daily) and "das Notfallspray" (salbutamol) consistently: p05, p06, L10, L11, w13 example, one sentence. |
| 11 Low: concrete statin alternative | done | u07 R8 names fluvastatin (the example the clarithromycin SmPC itself gives). |
| 12 Low: exam timing | done | u01 reading: about 20 minutes per part in the Westfalen-Lippe format; Berlin states only the total, read the invitation letter. |
| Idea 1: mock-exam runs | not done | App feature (lead). |
| Idea 2: error-correction drills for Teil 2 | done | Function items "Which sentence belongs in the note?" (u05 g01 X4) and "Which sentence is correct?" (u05 g02 X5), plus u09 g01 X7. |
| Idea 3: teach-back variety | done | u08 L10 now "Damit ich sicher bin, dass ich mich klar ausgedrückt habe: …"; u02 p07 and 2 new u02 sentences give alternatives. |
| Idea 4: difficult patients | done | u08 g01 X5 (angry about the shortage → acknowledge, concrete next step); u01 g02 X5 (herbal product "doesn't count"); u02 g02 X4 (wants to stop the antibiotic). |
| Idea 5: cultural fit | done | Antibiotics without prescription abroad: u04 g01 X3 and a u04 sentence (phrased "in manchen Ländern"). Ramadan: u02 g01 X5. |
| Idea 6: cumulative 3B list | not done | Generator / app (lead); the "· Laie:" convention in `s` makes it scriptable. |
| Brief rule: no re-teaching of B1 | done | 7 C1 phrases repeated B1 phrases word for word; replaced by C1 variants: u01 p01, p03, p08; u02 p05, p06, p07; u07 p01. |

### Counts (u01–u08 / u09)

| Category | u01–u08 | u09 |
|---|---|---|
| Production items (task 2) | 32 (16 rewrite + 16 function; 2 per grammar point, replacing repetitive items, counts kept at 8) | 4 |
| `why` (task 3) | 102 (every `choice` and `type` exercise) | 14 |
| New reading questions (task 4) | 10: 8 inference (u01 what helps most in the exam, u02 why teach-back, u03 which patient is most at risk, u04 the author's view on prices, u05 why no doctor consultation was needed, u06 why the pharmacist didn't stop the syrup, u07 why simvastatin and lovastatin, u08 two smaller packs) + 2 factual | 5 (2 inference) |
| `sym` marks (task 5) | 27 | 2 (Rückruf 📞, Übergabe 🤝) |
| New headwords / sentences / reading lines | 2 / 15 / 6 | 15 / 8 / 12 |
| Other fixes | 7 phrases replaced, 1 emoji removed, 6 dialogue lines changed, 1 word example, R8 in u07, answer variants completed, choice options rotated (answers no longer always first) | |

### For the lead
- Nothing needed in `tools/build.py` for u09 (units are globbed per level).
- New speaker "Frau Lange" (u09, the colleague named in mock 1); she is not in the curriculum's speaker list.
- App: issue 8 (order tasks with "…"), idea 1 (mock-exam runs), idea 6 (cumulative 3B list).
- Facts to re-check if the law changes: § 129 (2a) SGB V substitution rules, pharmacy vaccinations, cannabis.
