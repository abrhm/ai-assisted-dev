---
name: improve-lint
description: Create or update ESLint rule in eslint-rules/, register it in eslint.config.ts, and keep .claude/rules/*.md and CLAUDE.md consistent with the new convention.
argument-hint: <rule description, e.g. "enforce handler return type annotation">
---

# Improve Lint

User request: $ARGUMENTS

**IMPORTANT: Read all target files in full before making any changes.**

## Steps

1. **Explore** current state:
   - Read all `eslint-rules/*.ts` to understand existing rule patterns
   - Read `eslint.config.ts` to understand registration pattern
   - Run `Glob .claude/rules/*.md` and read each file
   - Read `CLAUDE.md`

2. **Propose** changes and wait for confirmation:

   ```text
   Proposed changes to <file>:
   - <change 1>
   ```

   Always propose:
   - `eslint-rules/<name>.ts` — new rule file
   - `eslint.config.ts` — import + spread into `defineConfig`
   - `.claude/rules/<name>.md` — if rule enforces a convention not yet documented (requires `paths` frontmatter)
   - `CLAUDE.md` — only if rule introduces a project-wide constraint worth documenting

3. **Apply** agreed changes. Keep edits minimal.

4. **Verify**:
   ```bash
   npm run check:lint
   ```

## ESLint Rule File (`eslint-rules/<name>.ts`)

- Export single `Linter.Config` as default (match existing rule pattern)
- `files`: narrowest glob matching the rule's scope
- Plugin namespace: domain-specific (e.g. `route-conventions`)
- `meta.type`: `'problem'` for incorrect code, `'suggestion'` for style, `'layout'` for formatting
- No auto-fix unless explicitly requested

## Registration (`eslint.config.ts`)

- Import as default: `import ruleName from './eslint-rules/<name>'`
- Add `ruleName` as a spread entry in `defineConfig([..., ruleName])`

## Rules File (`.claude/rules/<name>.md`)

- Required frontmatter: `paths` array — use narrowest glob matching the rule's scope
- Document the convention: what's allowed, what's not, examples
- Reference the ESLint rule name so it's clear enforcement is automated
