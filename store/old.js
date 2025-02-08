//const url = "https://vebbo.onrender.com/";
const url = "http://localhost:5002";

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: `${url}/tcm.json`,
});

const connectBtn = document.getElementById("connect-btn");
const walletLabel = document.getElementById("wallet-address");
const store = "wallet";
let walletConnected = false;

async function load() {
  const value = localStorage.getItem(store);
  if (value) {
    console.log("Retrieved Data:", value);
    walletLabel.innerText = value;
    walletConnected = true;
    connectBtn.innerText = "Disconnect Wallet";
  }
}

async function loadWallet2() {
  try {
    let connectedWallet = await tonConnectUI.getWallet();
    console.log("Loaded Wallet from TonConnect:", connectedWallet);

    if (connectedWallet && connectedWallet.account) {
      // ✅ Wallet is connected
      walletLabel.innerText = `Wallet: ${connectedWallet.account.address}`;
      localStorage.setItem(store, connectedWallet.account.address);
      walletConnected = true;
      connectBtn.innerText = "Disconnect Wallet";
      payBtn.disabled = false;

      return;
    }

    const savedWallet = localStorage.getItem(store);
    console.log("Loaded Wallet from localStorage:", savedWallet);

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

load();
connectBtn.addEventListener("click", async () => {
  try {
    if (!walletConnected) {
      const walletInfo = await tonConnectUI.connectWallet();
      const address = walletInfo.account.address;
      const response = await fetch(`${url}/toWallet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const data = await response.json();
      walletLabel.innerText = data.wallet;
      walletConnected = tonConnectUI.connected;
      localStorage.setItem(store, data.wallet);
      console.log("Data saved!");
      connectBtn.innerText = "Disconnect Wallet";
    } else {
      await tonConnectUI.disconnect();
      walletLabel.innerText = "Wallet Address: Not connected";
      walletConnected = tonConnectUI.connected;
      localStorage.removeItem(store);
      console.log("Data removed!");
      connectBtn.innerText = "Connect Wallet";
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

document.getElementById("pay-btn").addEventListener("click", async () => {
  try {
    const response = await fetch(`${url}/notepay`);
    const data = await response.json();
    if (data) {
      await tonConnectUI.sendTransaction(data.obj);
      console.log("Payment made ✅");

      //Share Note
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed. Try again.");
  }
});
