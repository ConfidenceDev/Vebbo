const url = "https://vebbo.onrender.com/";
//const url = "http://localhost:5002"; // Replace with your server URL

// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Expand to full screen

// Initialize TON Wallet Connect
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: `${url}/tcm.json`,
});

const connectBtn = document.getElementById("connect-btn");
const walletLabel = document.getElementById("wallet-address");
const payBtn = document.getElementById("pay-btn");
const store = "wallet";
let walletConnected = false;

// Load saved wallet connection
async function loadWallet() {
  const savedWallet = localStorage.getItem(store);
  if (savedWallet) {
    walletLabel.innerText = `Wallet: ${savedWallet}`;
    walletConnected = true;
    connectBtn.innerText = "Disconnect Wallet";
    payBtn.disabled = false;
  }
}

loadWallet();

connectBtn.addEventListener("click", async () => {
  try {
    if (!walletConnected) {
      const walletInfo = await tonConnectUI.connectWallet();
      const address = walletInfo.account.address;

      // Send address to backend
      const response = await fetch(`${url}/toWallet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const data = await response.json();
      walletLabel.innerText = `Wallet: ${data.wallet}`;
      walletConnected = true;
      localStorage.setItem(store, data.wallet);
      connectBtn.innerText = "Disconnect Wallet";
      payBtn.disabled = false;
    } else {
      await tonConnectUI.disconnect();
      walletLabel.innerText = "Wallet Address: Not connected";
      walletConnected = false;
      localStorage.removeItem(store);
      connectBtn.innerText = "Connect Wallet";
      payBtn.disabled = true;
    }
  } catch (error) {
    console.error("Wallet Connection Error:", error);
    tg.showAlert("Failed to connect wallet.");
  }
});

payBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(`${url}/notepay`);
    const data = await response.json();

    if (data) {
      await tonConnectUI.sendTransaction(data.obj);
      tg.showAlert("Payment Successful ✅");

      // Share the note after payment
      tg.sendData(JSON.stringify({ status: "success", tx: data.obj }));
    }
  } catch (error) {
    console.error("Payment error:", error);
    tg.showAlert("Payment failed. Try again.");
  }
});
