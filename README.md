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

with ANY body

Returns **one random transaction object** from the in-memory array.

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


## 🌍 Environment

* Node.js 18+ recommended
* Uses `PORT` environment variable if defined
* Default port: `3000`