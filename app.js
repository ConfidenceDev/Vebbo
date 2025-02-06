import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import { TonClient } from "ton";
import express from "express";
import { corsPayload } from "./cors/cors.js";
import { Telegraf } from "telegraf";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(corsPayload);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

const PORT = process.env.PORT || 5002;
const client = new TonClient({
  endpoint: "https://toncenter.com/api/v2/jsonRPC",
});
const MY_TON_WALLET = "UQAtV9kBd9sKYwMtcmopkIFOLb1KcobvujnctacUeutNf-za"; // Replace with your wallet address
let pendingTxHashes = new Set(); // Store unverified transactions
let verifiedPayments = new Set(); // Store confirmed transactions

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Save transaction hash & start verification
app.post("/note", async (req, res) => {
  const { txHash } = req.body;
  if (!txHash)
    return res.status(400).json({ error: "Invalid transaction hash" });

  pendingTxHashes.add(txHash);
  console.log("✅ Payment initiated:", txHash);

  // Start checking for payment confirmation
  await verifyPayment(txHash);

  // Once verified, respond with success message
  res.status(200).json({ message: "Payment successful" });
});

// Function to verify payments
async function verifyPayment(txHash) {
  console.log("🔄 Checking transaction:", txHash);

  while (pendingTxHashes.has(txHash)) {
    try {
      const transactions = await client.getTransactions(MY_TON_WALLET);

      for (let tx of transactions) {
        if (tx.hash === txHash && tx.inMessage?.value === "100000000") {
          // 0.1 TON
          console.log("✅ Payment confirmed from:", tx.inMessage.source);

          pendingTxHashes.delete(txHash);
          verifiedPayments.add(txHash);

          // TODO: Unlock game for the user here
          return;
        }
      }
    } catch (error) {
      console.error("❌ Error checking transaction:", error);
    }

    // Wait 5 seconds before re-checking
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
