import "dotenv/config";
import path from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";
import express from "express";
import { corsHeader, corsPayload } from "./cors/cors.js";
import { Address } from "@ton/core";
import { Telegraf } from "telegraf";
import { ExpressPeerServer } from "peer";
const app = express();
const server = createServer(app);
import { Server } from "socket.io";
import { getNote, setNote, fetchPeer, removePeer } from "./db/db.js";

const io = new Server(server, {
  cors: corsHeader,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(corsPayload);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

const PORT = process.env.PORT || 443;
const MY_TON_WALLET = process.env.WALLET;

const options = {
  debug: true,
  allow_discovery: true,
};
app.use("/peerjs", ExpressPeerServer(server, options));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// ============================ GET WALLET ADDRESS =======================
app.post("/toWallet", async (req, res) => {
  try {
    const { address } = req.body;
    if (!address)
      return res.status(400).json({ error: "Public key is required" });

    const parsedAddress = Address.parse(address);
    return res.status(200).json({
      wallet: parsedAddress.toString({ urlSafe: true, bounceable: false }),
    });
  } catch (error) {
    console.error("Error converting public key:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ============================ MAKE PAYMENT FOR AD ======================
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
  try {
    const { noteText } = req.body;
    await setNote(noteText);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
  }
});

// ===================== PEER ==================================
io.on("connection", (socket) => {
  socket.emit("port", PORT);
  let count = io.sockets.server.engine.clientsCount;
  io.emit("online", count);
  socket.emit("note", getNote());

  socket.on("note", async () => {
    io.emit("note", getNote());
  });

  //============= Peer =================
  socket.on("peer", (data) => {
    fetchPeer(data)
      .then((result) => {
        const doc = {
          userId: result,
        };
        socket.emit("found", doc);
        socket.broadcast.to(result).emit("found", data);
      })
      .catch((err) => {
        //console.log(err);
      });
  });

  //============= Remove =================
  socket.on("remove", async (data) => {
    await removePeer(data);
  });

  //============= Chat =================
  socket.on("chat", (data) => {
    if (data.remoteId) {
      socket.broadcast.to(data.remoteId).emit("chat", data);
      socket.emit("chat", data);
    }
  });

  //============= Leave =================
  socket.on("leave", (data) => {
    if (data.remoteId) socket.broadcast.to(data.remoteId).emit("leave", data);
  });

  //============= DISCONNECT =================
  socket.on("disconnect", () => {
    let count = io.sockets.server.engine.clientsCount;
    io.emit("online", count);
  });
});

//=================== RUN SERVER ==============================
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
