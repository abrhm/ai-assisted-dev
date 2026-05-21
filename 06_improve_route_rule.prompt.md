AI configuration should evolve together with the codebase!

1. /improve-ai Update the @.claude/rules/routes.md the handler should have this signature: export const handler = async (request: FastifyRequest, reply: FastifyReply) => { ... }. Use \_request and \_reply as parameter names when they are not used to avoid lint errors.

**Problems:**

1. Claude updated the rule, but did not automatically updated the existing route files to match the new rule. This can lead to inconsistencies in the codebase and potential errors when running the application.
2. Now Claude has to check all related files to make sure the rule is valid
3. What if Claude misses some files? What if user forgets to update some files? This can lead to inconsistencies and errors in the codebase.
4. Run `npm check:prettier` -> Claude ignores the prettier config!
   Now it is only minor inconvenience, but in the future it can lead to inconsistent codebase!

This solution is not scalable, but static analysis can help us.
