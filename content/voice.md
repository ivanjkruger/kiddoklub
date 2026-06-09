# KiddoKlub Voice — index

This file used to be a single monolithic voice guide. Per Van Clief Constraint 05 (voice architecture), voice is now split into three files, each with one job. Load only what the current task needs.

| File | Job | Load when |
|---|---|---|
| [`voice-tone.md`](./voice-tone.md) | How Nadine sounds (directional patterns) | First drafts |
| [`format-patterns.md`](./format-patterns.md) | Per-channel structure (length, shape, sequence) | First drafts + channel switches |
| [`constraints.md`](./constraints.md) | The never-do list (banned chars/words/moves) | **Every** draft + every edit pass |

`kiddoklub-voice-audit` gates against `constraints.md` (the canonical banned lists live there, nowhere else).

A quick edit pass needs only `constraints.md`. A first draft needs `voice-tone.md` + `format-patterns.md`. A polish pass uses all three.
