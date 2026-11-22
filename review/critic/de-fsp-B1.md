# Critical review, pass 4: de-fsp B1 (Grundlagen, pharmacy German basics)

Slice: `content/de-fsp/B1/u01.json` … `u06.json`. Read against `content/CURRICULUM_FSP.md`, `content/AUTHOR_BRIEF_FSP.md`,
`content/FSP_HANDBOOK_SOURCE.md` and `content/SCHEMA.md`. There was no earlier pass-3 review of this slice in `review/`.
I checked every word (t, s, pl, ex, emoji), phrase, dialogue line, grammar explanation, table, example, exercise and its answer,
reading sentence and question, sentence (including `alts`), goal and title.

## 1. Verdict

This is a careful, accurate level. Every pharmaceutical statement I checked is correct for Germany and names the patient group
it applies to: ibuprofen 400 mg for adults (one tablet, at least 6 h apart, at most 3 a day, at most 4 days for pain and 3 for
fever without a doctor, not in the last trimester or with an active ulcer), paracetamol at most 4 g a day for adults, the
ibuprofen and low-dose ASS interaction, grapefruit with simvastatin, milk with some antibiotics, decongestant nasal spray at
most 7 days, insulin at 2–8 °C, no copayment under 18, the E-Rezept (mandatory since 2024; card, app or printout), AMK reporting,
and Rezeptur made by the PTA and released by the pharmacist. The German is natural Apotheken-German, the English is American, the
grammar explanations are right and well chosen for the job (Sie imperative, dative with body parts, seit and vor, modal verbs with
the *must not* trap, passive), and the dialogues follow the handbook's seven steps in miniature. The main weakness is level:
the learner is A1–A2 in general German and this is real B1, with long dialogue lines. The units also leave out some everyday legal
basics (prescription types, the exact copayment rule, aut idem and Rabattvertrag exchanges).

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u04 | `grammar[0].exercises[7].alts` | `["Tut der Rücken Ihnen weh?"]` → `[]` | An unstressed pronoun after the full subject is unnatural (it only works with contrastive stress), so the alt taught a wrong default order. `Tut Ihnen der Rücken weh?` stays the only answer. |
| u01 | `sentences[3].alts` | none → `["Leider ist dieses Medikament verschreibungspflichtig."]` | A correct, natural order was missing from this order task (sentences of 8 words or fewer are used as word-order tasks). |
| u01 | `sentences[5].alts` | none → `["Bitte geben Sie mir Ihre Gesundheitskarte."]` | A correct, natural order was missing. |
| u01 | `sentences[6].alts` | none → `["Bitte warten Sie einen Moment, ich schaue nach."]` | A correct, natural order was missing. |
| u02 | `sentences[1].alts` | none → `["Bitte eine Packung mit zwanzig Filmtabletten."]` | A correct, natural order was missing. |
| u03 | `sentences[2].alts` | none → `["Wie oft nehmen Sie das Medikament am Tag?"]` | A correct, natural order was missing. |
| u04 | `sentences[0].alts` | added `"Der Magen tut mir seit gestern weh."` (the 2 existing alts kept) | A correct, natural order was missing. |
| u04 | `sentences[1].alts` | added `"Halsschmerzen habe ich seit drei Tagen."` | A correct, natural order (fronted object, very common in speech) was missing. |
| u05 | `sentences[2].alts` | none → `["Das Antibiotikum müssen Sie bis zum Ende nehmen."]` | A correct, natural order was missing. |
| u06 | `sentences[5].alts` | none → `["Von der Zuzahlung sind Kinder und Jugendliche befreit."]` | A correct order was missing. |

All files print OK with `tools/validate.py`. `tools/audit.py` reports nothing for de-fsp B1.

## 3. Remaining issues (need a decision or bigger work)

**High**
- *Missing legal basics the learner needs from day one.* B1 never names the prescription types (Muster 16 "rosa" Kassenrezept, blue
  Privatrezept, green recommendation slip, yellow BtM-Rezept, T-Rezept), how long a prescription is valid (Kassenrezept and
  E-Rezept: 28 days at the expense of the health insurance), the copayment rule (10 %, at least 5 €, at most 10 €, never more than
  the price; exemption certificate), or why the patient often gets a different brand (Rabattvertrag, aut idem, "Warum sieht meine
  Tablette anders aus?"). Suggestion: add 3–4 words and one reading to u01 or u06, or a short u07 "Rezept und Kasse".

**Medium**
- *Level gap.* The curriculum puts the learner at A1–A2, but these units use genitive after während, passive with modal verbs and
  Konjunktiv II, and dialogue lines of up to 30 words (u01 L10, u03 L10, u05 L5/L7). Suggestion: split the longest lines into two
  turns, or mark B1 as "start after A2 of de-en", as the handbook route suggests.
- *AMK reporting described as optional.* u05 R9 says "Die Apotheke **kann** die Nebenwirkung … an die AMK melden". For a future
  pharmacist this is a professional duty (Berufsordnung of the chambers; § 21 ApBetrO for Arzneimittelrisiken). Suggestion: "Die
  Apotheke meldet Nebenwirkungen an die Arzneimittelkommission der Deutschen Apotheker." Check the wording of the Berlin
  Berufsordnung first, which is why I did not change it.
- *Slightly unsafe message in an exercise.* u05 `grammar[0].exercises[5]`: "Das Medikament gibt es ohne Rezept. Sie ___ nicht zum
  Arzt gehen." It is grammatically fine, but it suggests that an OTC medicine means no doctor is needed. Suggestion: "… Sie müssen
  nicht zuerst zum Arzt gehen, um es zu bekommen." (Keep the answer `müssen`.)
- *Only a few picture questions are possible.* About two thirds of the words have no emoji, so the "Which picture is it?" step
  rarely appears. That is the right choice for abstract terms, but basic objects could take one (die Tube, die Packung, die Haut,
  der Magen); check that the picture is unambiguous before adding it.

**Low**
- u01 `grammar[1].exercises[6].alts` "Nehmen Sie mit Wasser die Tablette ein." and u02 `grammar[0].exercises[7].alts` "Ich hätte eine
  Packung mit zwanzig Tabletten gern." are grammatical but marked. Consider removing them so learners copy the unmarked order.
- u06 `grammar[1].exercises[3]` (Könntest) and `[5]` (Würdest) do not accept the other polite form. The verb hint in `s` makes
  the intended form clear, so this is acceptable. Adding `Würdest` or `Könntest` would avoid frustration.
- The PTA is called "Lena" in B1 u06 and "PTA Lena" in C1 u04. Pick one speaker name.
- All B1 reading and choice answers have index 0. The app shuffles options, so this does not matter now, but it would show in any
  printed or exported version.

## 4. Improvement ideas (prioritized)

1. **Recycle the handbook's core vocabulary systematically.** Several core entries never appear in the course: *das Granulat,
   die Augentropfen, entsorgen, absetzen (B1), die Überdosierung, die Vergiftung, der Husten (trocken / verschleimt) as a headword,
   Halsschmerzen as Pharyngitis*. Cough and sore throat are the most frequent OTC consultations and a likely Teil-1A case. Add a
   cough scene (dry versus chesty, a cough syrup for a child, honey and fluids, when to see a doctor) to u04 or u05.
2. **Doses by ear.** The exam fails candidates who mix up numbers. Add more short dose sentences (8 words or fewer, so the app
   uses them for dictation and listening): "Dreimal täglich fünf Milliliter." "Alle acht Stunden eine Tablette."
3. **Cultural fit for an Iranian pharmacist.** (a) Explain the difference from Iran, where many antibiotics and other Rx drugs are
   in practice sold without a prescription. In Germany all systemic antibiotics are strictly Rx, which is a good hook for u01 and
   later the C1 resistance monologue. (b) Ramadan: a customer who fasts asks how to take a three-times-daily antibiotic, which is
   realistic in Berlin and good practice of time expressions in u03. (c) u02 already mentions gelatin capsules: a customer who asks
   about pork gelatin and wants a vegetarian alternative is a natural, respectful scene.
4. **One dialogue with friction per level.** All six dialogues run smoothly. Add a customer who does not understand, insists on a
   product or is annoyed about a shortage or the copayment, so the learner practices "Habe ich Sie richtig verstanden …?" and
   polite refusal at B1.
5. **A consistent lay/technical format in `s`.** Most words use "· Laie: …", some use "· Fach: …" (u02 w09, u03 w04, u04 w03–w14).
   Both are useful; state the convention once in u01, or always give both sides, so the learner sees the pairs the exam's Teil 3B
   asks for.
6. **A bridge to C1.** The B1 lay-translation exercises (Verschreibungspflichtig, Suppositorium, peroral, Cephalgie, Diarrhö,
   Kontraindikation, Lieferengpass) are excellent. Add one per grammar point for the terms C1 will use (Obstipation, Emesis,
   Pruritus, Exanthem, Zystitis are already headwords) so the 3B list starts here.

## 5. Pass 5 (Nov 2026)

Carried out `review/BRIEF_FIX5.md` tasks 1–7 for `content/de-fsp/B1/u01…u06.json`, plus the lead's extra requirements
(prescription types, AMK reporting duty, anticoagulant/INR warning). All files print OK with `tools/validate.py`;
`tools/audit.py` reports no findings for de-fsp B1.

### Remaining issues and ideas from section 3 and 4: what was done

| Item | Status | What was done |
|---|---|---|
| High: prescription types, validity, copayment, aut idem / Rabattvertrag | done | u01: new headword *das Kassenrezept* (w16); reading renamed "Rezepte in unserer Apotheke" with 4 new sentences: 28 days for statutory patients, pink Kassenrezept (now rare) and blue Privatrezept, green prescription (patient usually pays), yellow Betäubungsmittelrezept (morphine) and T-Rezept (active ingredients that can harm an unborn child); 2 new questions; new sentence "Ist das ein Kassenrezept oder ein Privatrezept?". u06: reading gets the copayment rule for statutory-insured adults (10 %, at least 5 €, at most 10 €, never more than the price) and the Rabattvertrag explanation ("Warum sieht meine Tablette anders aus?"); function item g01 X5 on the same question; 2 new questions (one a copayment calculation). The aut-idem rule itself is taught at C1 (u08 reading, u09 words), where it belongs. |
| Medium: level gap, long dialogue lines | done (content side) | Longest lines split into short sentences: u01 L10, u03 L10, u05 L5. Dialogues already have the maximum of 12 lines, so no extra turns. Whether B1 should be labeled "start after A2 of de-en" is a decision for the lead (course description in the app). |
| Medium: AMK reporting described as optional | done | u05 R9 → "Die Apotheke meldet die Nebenwirkung an die Arzneimittelkommission der Deutschen Apotheker. Das ist für Apothekerinnen und Apotheker eine Pflicht, auch wenn es nur ein Verdacht ist." (professional duty under the chambers' Berufsordnung). |
| Medium: unsafe "Sie ___ nicht zum Arzt gehen" (u05 g01 X5) | done | Item replaced (it duplicated X3's *nicht müssen* point) by a lay item, so the message is gone. |
| Medium: few picture questions | partly | *die Packung* gets 📦. *Tube, Haut, Magen* have no unambiguous emoji, so they stay "". |
| Low: marked alts | done | Removed "Nehmen Sie mit Wasser die Tablette ein." (u01 g02 X6) and "Ich hätte eine Packung mit zwanzig Tabletten gern." (u02 g01 X7). |
| Low: Könntest / Würdest not cross-accepted (u06 g02 X3, X5) | done | Both items accept both forms (with oe/ue spellings). |
| Low: "Lena" vs "PTA Lena" | done | u06 speaker renamed "PTA Lena", as in C1 u04 and the curriculum. |
| Low: all answers at index 0 | done | Options of choice items and reading questions rotated deterministically; answers are now spread over 0–2. |
| Idea 1: core vocabulary, cough scene | done | New headwords *der Husten* (dry / chesty, u04 w15), *absetzen* (u03 w16); *Halsschmerzen* now shows Fach: Pharyngitis; *Überdosierung* in u03 g02 X3, *Granulat* and *Augentropfen* in the u02 reading, *entsorgen* in the u06 reading. Cough: function item u04 g01 X1 ("Ist der Husten trocken oder verschleimt?"), rewrite u04 g02 X4, 3 new sentences (incl. when to see a doctor). *Vergiftung* left out (no natural place). |
| Idea 2: doses by ear | done | u03 sentences + "Dreimal täglich fünf Milliliter." and "Alle acht Stunden eine Tablette." (short, so used for dictation). |
| Idea 3: cultural fit | done | (a) u01 g01 X4: customer used to buying antibiotics without a prescription → "In Deutschland brauchen Sie für Antibiotika zum Einnehmen ein Rezept." (b) Ramadan: u03 g01 X1 (pharmacist clarifies with the doctor; doses are never combined or skipped). (c) Gelatin: u02 g01 X5 (customer doesn't want gelatin capsules → tablet), phrased without mentioning pork. |
| Idea 4: friction | done | u05 dialogue: Frau Richter insists ("Aber Ibuprofen hilft mir immer so gut! Kann ich es nicht trotzdem nehmen?"), the pharmacist refuses politely ("Das verstehe ich. Aber mit Ihrem Blutverdünner ist das zu riskant."). Function items with difficult customers in u01, u03, u06. |
| Idea 5: Laie / Fach convention | done | Stated once at the end of the u01 g01 explanation. |
| Idea 6: lay items for C1 terms | done | One lay item added in each grammar point that had none: Obstipation (u01 g02), Pruritus (u02 g02), Emesis (u03 g02), Zystitis (u05 g01), Exanthem (u06 g02). |
| Lead requirement: anticoagulant / INR | done | u05: new headword *der INR-Wert* (w16); reading + 3 sentences (phenprocoumon; ibuprofen or ASS with phenprocoumon → bleeding risk; INR is measured regularly and shows how fast the blood clots); function item g01 X2 (patient on phenprocoumon asks for ibuprofen); 2 new questions. |

### Counts

| Category | Count |
|---|---|
| Production items (task 2) | 24 (12 rewrite `type` + 12 function `choice`, 2 per grammar point, replacing the most repetitive items; counts kept at 8) |
| Lay-translation items (idea 6) | 5 (replacing a third repetitive item in those 5 points) |
| `why` explanations (task 3) | 81 (every `choice` and `type` grammar exercise) |
| New reading questions (task 4) | 9: 6 inference (u01 six-week-old e-prescription, u02 child who spits out everything, u03 next ibuprofen dose, u04 why ask about fever, u05 patient on phenprocoumon with a headache, u06 copayment of a 30 € medicine) + 3 factual (green prescription, INR, Rabattvertrag) |
| `sym` marks (task 5) | 9 (E-Rezept 📱, Gesundheitskarte 💳, Filmtablette 💊, Packungsbeilage 📄, Lieferung 🚚, Kühlkette ❄️, Verfallsdatum 📅, Botendienst 🚲, Notdienst 🌙); 1 new emoji (Packung 📦) |
| New headwords / sentences / reading lines | 4 / 7 / 13 |
| Other fixes | 3 dialogue lines shortened, 3 dialogue lines rewritten for friction, AMK duty, 2 marked alts removed, 2 answer lists cross-completed, speaker renamed, 98 options rotated (B1 + C1), ae/oe/ue/ss variants completed in all `type` answers |

All new items reuse B1 words (Rezept, Gesundheitskarte, Packung, Saft, Wärmepflaster, Blutverdünner, Lieferengpass, Großhandel, Kühlschrank …).

### For the lead
- Voice: "der INR-Wert" (u05) is the only new acronym in spoken text; if the German voice does not spell it, add `("INR", "I N R")` to `ABBR["de"]` in `tools/build.py`.
- App: whether to label B1 "start after A2 of de-en" (level description).
- Facts to re-check if the law changes: copayment rule (§ 61 SGB V) and the 28-day validity of statutory prescriptions.
