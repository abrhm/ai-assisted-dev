---
name: improve-ai
description: Create or update Claude configuration files — CLAUDE.md, .claude/rules/*.md, or .claude/skills/*.md
argument-hint: <what to improve, e.g. "create rule for controllers">
---

# Improve AI Configuration

User request: $ARGUMENTS

**IMPORTANT: Read all target files in full, including any files they reference, before making any changes.**

## Steps

1. **Propose** changes and wait for confirmation:
   ```
   Proposed changes to <file>:
   - <change 1>
   ```
2. **Apply** agreed changes. Keep edits minimal.
3. **Verify** cross-references between CLAUDE.md, rules, and skills stay valid and consistent.

## Skills (`.claude/skills/<name>/SKILL.md`)

- Name must be unique — check available skills (both system and local). Unless explicitly asked to override or create a local variant, warn the user about any name conflict.
- Must have a `description` in frontmatter — max 5 sentences, focused on purpose (what), not implementation (how).
- Keep `description` and `argument-hint` in sync with content.

## Rules (`.claude/rules/*.md`)

Run `Glob .claude/rules/*.md` before deciding which file to edit or create.
Each file needs a `paths` frontmatter array — use the narrowest glob that fits.
