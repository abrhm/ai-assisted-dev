# Roulette endpoint

`POST /roulette/pull` — Russian roulette.

- Body: `{ "playerName": string }`
- Nth pull by same player hits with chance N/6 (1/6, 2/6, …, 6/6).
- Hit → player banned, 401. Banned players always get 401.
- 401 body includes `survived`: shots survived before the hit (e.g. `{ "message": "...", "survived": 3 }`).
- Survive → 200.
- State: in-memory `Record<playerName, { tries, banned }>`.
- No tests yet.

```bash
curl -s -X POST http://localhost:3000/roulette/pull \
  -H 'content-type: application/json' \
  -d '{"playerName":"gabor"}' \
  -w '\nHTTP %{http_code}\n'
```
