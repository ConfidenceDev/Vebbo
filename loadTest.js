import os from "os-utils";
import io from "socket.io-client";

const SERVER_URL = "https://vebbo.onrender.com"; // Change to your server URL
const TOTAL_CLIENTS = 2000; // Number of simulated clients
const clients = [];

for (let i = 0; i < TOTAL_CLIENTS; i++) {
  const socket = io(SERVER_URL);

  socket.on("connect", () => {
    console.log(`Client ${i + 1} connected`);
    //socket.emit("message", `Hello from client ${i + 1}`);
  });

  //   socket.on("message", (data) => {
  //     console.log(`Client ${i + 1} received:`, data);
  //   });

  socket.on("disconnect", () => {
    console.log(`Client ${i + 1} disconnected`);
  });

  clients.push(socket);
}

// Monitor CPU & Memory every 5 seconds
setInterval(() => {
  os.cpuUsage((cpu) => {
    console.log(`CPU Usage: ${(cpu * 100).toFixed(2)}%`);
  });

  console.log(
    `Memory Usage: ${((1 - os.freememPercentage()) * 100).toFixed(2)}%`
  );
}, 5000);

process.on("SIGINT", () => {
  setTimeout(() => {
    clients.forEach((socket) => socket.disconnect());
    console.log("\nLoad test stopped.");
    process.exit();
  }, 40000);
});
