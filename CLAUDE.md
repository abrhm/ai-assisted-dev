# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

REST API for a polling app. Users can create polls with multiple options, vote on open polls, close polls to stop further voting, and see which polls they haven't voted on yet.

## Commands

```bash
npm start          # run with hot reload (tsx watch)
npm test           # run Vitest test suite
npm run check      # run all checks (types + lint + prettier)
npm run check:types
npm run check:lint
npm run check:prettier
```

Run single test file: `npx vitest run src/app.test.ts`

## Architecture

Fastify v5 REST API for a polling app. TypeScript + ESM throughout.

- `src/main.ts` — entry point, starts server on port 3000
- `src/app.ts` — Fastify app factory, registers Swagger UI at `/docs`
- `src/app.test.ts` — Vitest tests (node env, beforeAll/afterAll for app lifecycle)

## Key Config

- TypeScript strict mode: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- ESLint flat config (`eslint.config.ts`), covers `.ts` and markdown
- Prettier: 80-char, single quotes, trailing commas (ES5), 2-space indent
