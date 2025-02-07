import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { corsPayload } from "./cors/cors.js";
import { Address } from "@ton/core";
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
const MY_TON_WALLET =
  process.env.WALLET || "UQAdyrHwaVRI3fnsp3id3iZdiPSW-rwzdkh42xAT1ggFbSyW";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/toWallet", async (req, res) => {
  try {
    const { address } = req.body;
    if (!address)
      return res.status(400).json({ error: "Public key is required" });

    const parsedAddress = Address.parse(address);
    console.log(address);
    console.log(parsedAddress);
    console.log(parsedAddress.toString({ urlSafe: true, bounceable: false }));

    return res.status(200).json({
      wallet: parsedAddress.toString({ urlSafe: true, bounceable: false }),
    });
  } catch (error) {
    console.error("Error converting public key:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/notepay", async (req, res) => {
  const payload = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
      {
        address: MY_TON_WALLET,
        amount: "100000000", // 0.1 TON (nanoTONs)
      },
    ],
  };
  res.status(200).json({ obj: payload });
});

app.post("/note", async (req, res) => {
  res.status(200).json({ message: "" });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
