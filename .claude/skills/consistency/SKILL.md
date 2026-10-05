---
name: consistency
description: Audit CLAUDE.md and all .claude/rules/*.md and .claude/skills/*/SKILL.md for inconsistencies and suggest improvements.
---

# Consistency Audit

## Step 1 — Read all configuration files

Read these files in parallel:

- `CLAUDE.md`
- All `.claude/rules/*.md` files
- All `.claude/skills/*/SKILL.md` files

## Step 2 — Check for inconsistencies

Examine the files for anything that seems off, contradictory, or out of sync. Check at minimum:

- **Command name consistency** — commands in skill files must match the canonical forms in CLAUDE.md (e.g. `pnpm be:lint`, not `pnpm run be:lint`); flag any spelling differences
- **Cross-references** — every file path, skill name, or rule file referenced in any doc must exist in the repo; verify with Glob or Bash
- **Skill metadata accuracy** — `description` frontmatter must match what the skill actually does; `argument-hint` must be present when the body uses `$ARGUMENTS` and absent when it doesn't
- **Rule `paths` selectors** — every `.claude/rules/*.md` must have a `paths` array; globs should be as narrow as possible and must match the package the rule describes
- **Coverage gaps** — every package in CLAUDE.md's Packages section must have a `.claude/rules/<package>.md`; every skill referenced by name in CLAUDE.md must exist
- **Convention drift** — any convention stated in more than one place must be consistent across all occurrences

## Step 3 — Report findings

Present a flat numbered list. For each finding:

```text
1. Problem: Inconsistent command usage
   File(s):
    - `CLAUDE.md`: uses `pnpm be:lint`
    - `.claude/skills/consistency/SKILL.md`: uses `pnpm run be:lint`
   Fix: Change all occurrences to `pnpm be:lint`
```

## Step 4 — Ask before fixing

After presenting all findings, ask the user to respond per finding. Accepted responses:

- `1. fix` — apply the suggested fix as-is
- `2. <custom instruction>` — apply a different fix described by the user
- `3. skip` or `3. false positive` — ignore this finding, no change needed
- `all fix` — apply all suggested fixes
- `none` — skip everything

Process each instruction in order. Keep each edit minimal — change only the inconsistent text, do not restructure surrounding content.