import { TonConnectUI } from "@tonconnect/ui";

// Initialize TonConnectUI
const tonConnectUI = new TonConnectUI({
  manifestUrl: "https://vebbo.onrender.com/tcm.json",
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
    const response = await fetch("https://vebbo.onrender.com/note", {
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
