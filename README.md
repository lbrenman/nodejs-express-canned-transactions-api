# Canned Transactions API (Node.js/Express)

A tiny, no-database Express API that exposes **POST `/transactions`** and returns a canned (in-code) JSON array of transactions.

## Features
- Single endpoint: `POST /transactions`
- Returns a canned array defined inside `server.js`
- Optional health check at `GET /health`
- Zero config, one dependency (`express`)

---

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Start the API
npm start
# or during development:
npm run dev   # requires Node 18+ for --watch
```

The server will listen on **http://localhost:3000** by default.

---

## API

### POST `/transactions`

**Request Body**: Anything (ignored by default).  
**Response**: `200 OK`
```json
{
  "count": <number>,
  "items": [ /* canned transactions */ ]
}
```

#### Sample `curl` commands

Return all canned transactions:
```bash
curl -s -X POST http://localhost:3000/transactions   -H "Content-Type: application/json"   -d '{}' | jq
```

(Optional) If you enable the simple filter in `server.js` (see comments), you can filter by `accountId`:
```bash
curl -s -X POST http://localhost:3000/transactions   -H "Content-Type: application/json"   -d '{"accountId":"acc_123"}' | jq
```

### GET `/health`
Simple health check endpoint.
```bash
curl -s http://localhost:3000/health | jq
```

---

## Customize the Canned Data

Open **`server.js`** and edit the `TRANSACTIONS` array:
```js
const TRANSACTIONS = [
  { id: "txn_1001", accountId: "acc_123", date: "2025-10-01", amount: -42.5, currency: "USD", description: "Coffee shop" },
  // add/remove/modify entries as needed
];
```

You can also uncomment the filter code in `POST /transactions` to allow basic filtering by `accountId` (or extend it further).

---

## Environment

- Node.js 18+ recommended
- Uses `PORT` env var if set (defaults to `3000`)

---

## License
MIT
