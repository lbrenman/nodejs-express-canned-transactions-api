import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// 👉 Edit this array with your own transactions.
// It can be *any* JSON array you want to return.
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

// Health check (optional)
app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

/**
 * POST /transactions
 * Always returns one item the canned TRANSACTIONS array.
 * You can optionally filter based on request body if you want—example below (commented).
 */
app.post("/transactions", (req, res) => {
  if (!TRANSACTIONS.length) return res.status(404).json({ message: "No transactions available" });
  return res.json(TRANSACTIONS[Math.floor(Math.random() * TRANSACTIONS.length)]);
});



app.listen(PORT, () => {
  console.log(`Canned Transactions API listening on http://localhost:${PORT}`);
});
