---
paths:
  - src/routes/**/*
---

# Route Conventions

- One route per file
- Filename: `{HttpMethod}{RouteName}Route.ts` — e.g. `GetPollRoute.ts`, `PostVoteRoute.ts`
- Each file exports exactly two named exports:
  - `schema` — Fastify route schema
  - `handler` — Fastify route handler function with this signature:
  - Use `_request` when a param is unused to avoid lint errors.

## Example
```ts
import { FastifyRequest, FastifyReply } from 'fastify';

export const schema = {
  summary: 'Healthcheck',
  response: { 200: { type: 'string' } },
};

export const handler = async (_request: FastifyRequest, reply: FastifyReply) => {
  ...
};
```
