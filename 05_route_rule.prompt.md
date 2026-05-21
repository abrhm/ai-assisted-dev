1. /improve-ai Create a rule for the routes.

- Routes live in `src/routes/`
- One route per file
- Filename: `{HttpMethod}{RouteName}Route.ts` - e.g. `GetExampleRoute.ts`
- Each file exports exactly two named exports: `schema` (Fastify route schema) and `handler` (Fastify handler function)
- Keep rule simple
- Add to the Claude.md that routes should exists in `src/routes/`

2. Fix the route in the `@src/app.ts` based on the new rule. Use the route `/example`
