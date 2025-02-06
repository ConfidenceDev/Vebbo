//import { TonConnectUI } from "https://cdn.jsdelivr.net/npm/@tonconnect/ui";

const url = "https://vebbo.onrender.com/";
//const url = "http://localhost:5002";

// Initialize TonConnectUI
/*const tonConnectUI = new TonConnectUI({
  manifestUrl: `${url}/tcm.json`,
});*/

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: `${url}/tcm.json`,
});

// Function to handle payments
async function handlePayment() {
  const transaction = {
    to: "UQAtV9kBd9sKYwMtcmopkIFOLb1KcobvujnctacUeutNf-za", // Replace with your wallet
    value: "100000000", // 0.1 TON (nanoTONs)
    text: "Note update",
  };

  try {
    const result = await tonConnectUI.sendTransaction(transaction);
    console.log("Payment sent:", result);

    // Send transaction hash to backend for verification
    const response = await fetch(`${url}/note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ txHash: result.hash }),
    });

    const data = await response.json();
    alert(data.message); // "Payment successful" only after confirmation
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed. Try again.");
  }
}

// Attach event to button
document.getElementById("pay-btn").addEventListener("click", handlePayment);
