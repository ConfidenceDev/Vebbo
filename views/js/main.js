const url = "https://vebbo.onrender.com";
//const url = "http://localhost:5002"; // Change to your actual backend URL
const tg = window.Telegram.WebApp;
tg.expand(); // Ensure full screen

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: `${url}/tcm.json`,
});

const connectBtn = document.getElementById("connect-btn");
const walletLabel = document.getElementById("wallet-address");
const payBtn = document.getElementById("pay-btn");
const store = "wallet";
let walletConnected = false;

// 🌟 Force recheck on page load
async function loadWallet() {
  try {
    const savedWallet = localStorage.getItem(store);
    //tg.showAlert("Loaded Wallet from localStorage:", savedWallet);

    if (savedWallet) {
      walletLabel.innerText = `Wallet: ${savedWallet}`;
      walletConnected = true;
      connectBtn.innerText = "Disconnect Wallet";
      payBtn.disabled = false;
    } else {
      resetWalletUI();
    }
  } catch (error) {
    console.error("Wallet Load Error:", error);
    resetWalletUI();
  }
}

// 🚀 Force UI Reset
function resetWalletUI() {
  walletLabel.innerText = "Wallet Address: Not connected";
  localStorage.removeItem(store);
  connectBtn.innerText = "Connect Wallet";
  walletConnected = false;
  payBtn.disabled = true;
}

// 🏗 Connect or Disconnect Wallet
connectBtn.addEventListener("click", async () => {
  if (connectBtn.disabled) return;
  connectBtn.disabled = true; // Prevent multiple clicks

  try {
    if (!walletConnected) {
      await tonConnectUI.disconnect(); // 🔄 Ensure clean state before reconnecting
      const walletInfo = await tonConnectUI.connectWallet();
      if (!walletInfo || !walletInfo.account)
        throw new Error("Wallet connection failed.");

      const address = walletInfo.account.address;
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
      resetWalletUI();
    }
  } catch (error) {
    console.error("Wallet Connection Error:", error);
    tg.showAlert(error);
    resetWalletUI();
  } finally {
    connectBtn.disabled = false; // Re-enable button
  }
});

// 💸 Send Payment
payBtn.addEventListener("click", async () => {
  if (!walletConnected)
    return tg.showAlert("Please connect your wallet first.");

  try {
    const response = await fetch(`${url}/notepay`);
    const data = await response.json();
    if (data) {
      await tonConnectUI.sendTransaction(data.obj);
      tg.showAlert("Payment Successful ✅");
      //tg.sendData(JSON.stringify({ status: "success", tx: data.obj }));
    }
  } catch (error) {
    console.error("Payment error:", error);
    tg.showAlert("Payment failed. Try again.");
  }
});

loadWallet(); // 🔄 Auto-load wallet on startup
