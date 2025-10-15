Absolutely — here’s the complete **README.md** you can copy and drop directly into your project (it includes everything from setup to examples, with your new “single JSON object” behavior clearly documented):

---

````markdown
# 🧾 Canned Transactions API (Node.js/Express)

A tiny, no-database **Express API** that exposes **POST `/transactions`** and returns **one randomly selected JSON object** from a hard-coded transactions array.

---

## 🚀 Features
- Single endpoint: `POST /transactions`
- Returns **one random transaction** each time
- Optional filtering by `accountId`
- Health check at `/health`
- Zero configuration, single dependency (`express`)

---

## 🧩 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the API
npm start

# (Optional) Auto-reload in Node 18+:
npm run dev
````

The server listens on [http://localhost:3000](http://localhost:3000) by default, or uses the `PORT` environment variable if set.

---

## 📡 API Endpoints

### **POST `/transactions`**

Returns **one random transaction object** from the in-memory array.

**Request body:**
Optional — if filtering by `accountId` is enabled, include:

```json
{
  "accountId": "acc_123"
}
```

**Example response:**

```json
{
  "id": "txn_1001",
  "accountId": "acc_123",
  "date": "2025-10-01",
  "amount": -42.5,
  "currency": "USD",
  "description": "Coffee shop"
}
```

If no transactions exist, the endpoint returns:

```json
{ "message": "No transactions available" }
```

---

### **GET `/health`**

Simple health-check endpoint.

**Example:**

```bash
curl -s http://localhost:3000/health | jq
```

**Response:**

```json
{ "ok": true }
```

---

## 🧪 Example `curl` Commands

Return a random canned transaction:

```bash
curl -s -X POST http://localhost:3000/transactions \
  -H "Content-Type: application/json" \
  -d '{}' | jq
```

(Optional) Filter by `accountId` (if enabled in code):

```bash
curl -s -X POST http://localhost:3000/transactions \
  -H "Content-Type: application/json" \
  -d '{"accountId":"acc_123"}' | jq
```

---

## ⚙️ Customize the Canned Data

Edit the array inside **`server.js`**:

```js
const TRANSACTIONS = [
  {
    id: "txn_1001",
    accountId: "acc_123",
    date: "2025-10-01",
    amount: -42.5,
    currency: "USD",
    description: "Coffee shop"
  },
  {
    id: "txn_1002",
    accountId: "acc_123",
    date: "2025-10-02",
    amount: 1200.0,
    currency: "USD",
    description: "Paycheck"
  },
  {
    id: "txn_2001",
    accountId: "acc_456",
    date: "2025-10-03",
    amount: -79.99,
    currency: "USD",
    description: "Grocery store"
  }
];
```

Each call to `/transactions` picks **one random element** from this list and returns it as the raw JSON response.

---

## 🧠 Optional Filtering

If you uncomment the following code in `server.js`, you can filter by `accountId` before random selection:

```js
const { accountId } = req.body || {};
const pool = accountId
  ? TRANSACTIONS.filter(t => t.accountId === accountId)
  : TRANSACTIONS;
```

Then the API will only select a random transaction matching that `accountId`.

---

## 🌍 Environment

* Node.js 18+ recommended
* Uses `PORT` environment variable if defined
* Default port: `3000`

---

## 📁 Example Project Structure

```
canned-transactions-api/
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## 📜 License

MIT License © 2025

```

---

✅ You can paste this whole thing directly into your project’s `README.md`.  
Would you like me to also include a short “example server.js” snippet at the bottom for quick reference?
```
