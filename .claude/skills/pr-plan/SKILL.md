---
name: pr-plan
description: Runs preplan to clarify intent, then writes a PLAN.md with a PR description, ordered testable steps (each committable), and implementation notes. Invoke manually via /pr-plan, or automatically when a concrete implementation decision is made — append the decision to the Notes section of PLAN.md immediately.
argument-hint: <feature or change to plan, e.g. "add Redis caching to poll results">
when_to_use: Invoke manually via /pr-plan, or automatically when a concrete implementation decision is made during discussion (e.g. "use POST", "store in Redis") — append the decision to the Notes section of PLAN.md immediately.
effort: high
---

# PR Plan

User request: $ARGUMENTS

## Steps

1. **Check git history** — run `git log main..HEAD --oneline` to understand changes on the current branch before discussing.

2. **Clarify** — invoke the `preplan` skill. Do not proceed until shared understanding is reached.

3. **Write `PLAN.md`** in the project root with this structure:

```markdown
# PR Plan: <title>

## Description

<1-3 sentence summary of what this PR does and why.>

## Steps

- [ ] <Step description> — _testable: <how to verify>_
- [ ] <Step description> — _testable: <how to verify>_
      ...

## Notes

- <implementation detail, constraint, or design decision>
- <another note>
```

### Guidelines

**Description**: What changes, why, what the outcome is. One paragraph max.

**Steps**: Each step must be:

- Small enough to commit independently
- Testable (unit test, integration test, manual check, or type-check pass)
- Ordered so each builds on the last
- Written as an unchecked checkbox `- [ ]`

**NEVER check a checkbox.** Only the user checks steps when satisfied. Claude reads checkbox state to know where work left off.

**Notes**: Concrete facts from preplan — route methods, storage choices, data shapes, edge cases, external constraints. Not rationale (belongs in Description or Steps).

When a decision is made at any point (during preplan or implementation), append it to the Notes section of `PLAN.md` immediately — do not wait until the end.
