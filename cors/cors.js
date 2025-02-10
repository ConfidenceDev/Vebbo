import cors from "cors";

/*origin: [
  "https://www.vebbo.onrender.com",
  "https://vebbo.onrender.com",
  "vebbo.onrender.com",
  "vebbo.me",
],*/

const corsObj = {
  origin: [
    "https://www.vebbo.onrender.com",
    "https://vebbo.onrender.com",
    "vebbo.onrender.com",
    "vebbo.me",
  ],
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: [
    "Access-Control-Allow-Headers",
    "X-Requested-With",
    "X-Access-Token",
    "Content-Type",
    "Host",
    "Accept",
    "Connection",
    "Cache-Control",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

export const corsHeader = corsObj;
export const corsPayload = cors(corsObj);
