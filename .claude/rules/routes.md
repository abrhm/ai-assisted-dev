---
paths:
  - src/routes/**
---

# Route Conventions

- One route per file
- Filename: `{HttpMethod}{RouteName}Route.ts` — e.g. `GetPollRoute.ts`, `PostVoteRoute.ts`
- Each file exports exactly two named exports:
  - `schema` — Fastify route schema
  - `handler` — Fastify route handler function
