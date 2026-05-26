---
name: commit
description: Suggest commit message alternatives based on staged changes and commit after the user picks one. Only invoke when the user explicitly requests it (e.g. "/commit") — never auto-trigger.
---

Run the following to see what is staged:

```bash
git diff --staged
```
Never add a Co-Authored-By trailer to commit messages.
Analyze the staged changes and suggest 3 commit message alternatives using the most fitting types from the conventional commits spec:

| Type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `docs`     | Documentation only changes                              |
| `chore`    | Maintenance, tooling, dependencies                      |
| `test`     | Adding or updating tests                                |
| `style`    | Formatting, whitespace (no logic change)                |
| `perf`     | Performance improvements                                |

Rules for each suggestion:

- Lowercase, no trailing period
- Max ~72 characters
- Describe _what_ and _why_, not _how_

Present 3 alternatives based on the actual diff, varying in scope or emphasis:

```
1. <type>: <msg>
2. <type>: <msg>
3. <type>: <msg>
```

If the changes span multiple unrelated concerns, flag it and suggest splitting the commit before proceeding.

Then wait for the user's response:

- If they reply `1`, `2`, or `3` — use the corresponding message
- If they reply with custom text — use that as the commit message

Then commit with:

```bash
git commit -m "<chosen message>"
```