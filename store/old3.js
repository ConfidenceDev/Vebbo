const tg = window.Telegram.WebApp;
tg.expand();

const smScreen = document.getElementById("sm-screen");
const lgScreen = document.getElementById("lg-screen");
const okBtn = document.getElementById("ok-btn");
const reportBtn = document.getElementById("report-btn");
const sendReportBtn = document.getElementById("send-report");
const loader = document.getElementById("loader");
const onlineContainer = document.getElementById("online-container");
const onlineCount = document.getElementById("online-count");
const remoteVideo = document.getElementById("remote-video");
const localVideo = document.getElementById("local-video");
const noteContent = document.getElementById("note-content");
const noteBtn = document.getElementById("note-btn");
const noteField = document.getElementById("note-field");
const noteCount = document.getElementById("note-count");
const walletLabel = document.getElementById("walletLabel");
const walletBtn = document.getElementById("wallet-btn");
const disconnectBtn = document.getElementById("disconnect");
const typing = document.getElementById("typing");
const chatList = document.getElementById("chat-list");
const chatField = document.getElementById("chat-field");
const sendBtn = document.getElementById("send-btn");
const startStopBtn = document.getElementById("start-stop");
const nextBtn = document.getElementById("next");

if (!tg || !tg.initData) {
  smScreen.style = "display: none;";
  lgScreen.style = "display: flex;";
} else {
  const isLocal = false;
  const url = "https://vebbo.onrender.com";
  //const url = "http://localhost:3000";

  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: `${url}/tcm.json`,
  });

  const socket = io(url);

  const store = "wallet";
  let walletConnected = false;
  chatField.disabled = true;
  nextBtn.style = "opacity: .4;";
  nextBtn.style.pointerEvents = "none";
  let remoteId = null;
  let call = null;
  let teleId = null;
  let flags = {};

  if (!localStorage.getItem("start")) {
    loadModal("popup_start");
  }

  okBtn.addEventListener("click", () => {
    localStorage.setItem("start", true);
    loadModal("");
  });

  const constraints = {
    audio: true,
    video: true,
  };

  const stream =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  stream(constraints, onsuccess, onerror);
  function onsuccess(stream) {
    window.stream = stream;
    localVideo.srcObject = stream;

    localVideo.addEventListener("loadedmetadata", () => {
      localVideo.play();
    });
  }
  function onerror(error) {
    console.log("navigator.getUserMedia error: ", error);
  }

  socket.on("connect", () => {
    socket.on("tns", (tns) => {
      const peer = new Peer(socket.id, {
        host: isLocal ? "localhost" : "vebbo.onrender.com",
        port: isLocal ? 3000 : 443,
        path: "/peerjs",
        secure: !isLocal,
        config: {
          iceServers: tns,
        },
      });

      peer.on("open", () => {});

      socket.on("start", (data) => {
        teleId = data;
      });

      socket.on("note", (data) => {
        noteContent.innerText = data;
      });

      socket.on("online", (data) => {
        onlineCount.innerText = toComma(data);
      });

      socket.on("flagged", (data) => {
        flags[data.flagger] = Date.now();
        localStorage.setItem("flags", JSON.stringify(flags));
      });

      async function loadWallet() {
        try {
          const savedWallet = localStorage.getItem(store);
          flags = JSON.parse(localStorage.getItem("flags"));
          if (savedWallet) {
            walletLabel.innerText = `Wallet: ${formatWalletAddress(
              savedWallet
            )}`;
            walletConnected = true;
            walletBtn.innerText = "Publish | 0.1 Ton";
            disconnectBtn.style = "display: flex;";
          } else {
            resetWalletUI();
          }
        } catch (error) {
          console.error("Wallet Load Error:", error);
          resetWalletUI();
        }
      }

      function resetWalletUI() {
        walletLabel.innerText = "Wallet: Not connected";
        localStorage.removeItem(store);
        walletBtn.innerText = "Connect Wallet";
        walletConnected = false;
        disconnectBtn.style = "display: none;";
      }

      disconnectBtn.addEventListener("click", async () => {
        await tonConnectUI.disconnect();
        resetWalletUI();
      });

      noteField.addEventListener("input", (e) => {
        const target = e.currentTarget;
        const currentLength = target.value.length;
        noteCount.innerText = `${currentLength}/1024`;
      });

      walletBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        walletBtn.disabled = true;
        try {
          if (!walletConnected) {
            if (localStorage.getItem(store)) await tonConnectUI.disconnect();
            const walletInfo = await tonConnectUI.connectWallet();
            if (!walletInfo || !walletInfo.account) {
              walletBtn.disabled = false;
              throw new Error("Wallet connection failed.");
            }

            const address = walletInfo.account.address;
            const response = await fetch(`${url}/toWallet`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ address }),
            });

            const data = await response.json();
            walletLabel.innerText = `Wallet: ${formatWalletAddress(
              data.wallet
            )}`;
            walletConnected = true;
            localStorage.setItem(store, data.wallet);
            walletBtn.innerText = "Publish | 0.1 Ton";
            walletBtn.disabled = false;
            disconnectBtn.style = "display: flex;";
          } else {
            const noteText = noteField.value;
            if (!noteText || noteText.value == "") {
              tg.showAlert("Write a note");
              return;
            }

            const response = await fetch(`${url}/notepay`);
            const data = await response.json();
            if (data) {
              await tonConnectUI.sendTransaction(data.obj);
              const response = await fetch(`${url}/note`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ noteText }),
              });

              await response.json();
              noteField.value = null;
              noteCount.innerText = "0/1024";
              socket.emit("note");
              loadModal("");
              tg.showAlert("Note published ✅");
            }
            walletBtn.disabled = false;
          }
        } catch (error) {
          walletBtn.disabled = false;
          console.error("Wallet Connection Error:", error);
          tg.showAlert(error);
          resetWalletUI();
        }
      });

      noteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loadWallet();
        loadModal("popup_note");
      });

      socket.on("chat", (data) => {
        typing.style = "display: none;";
        let li = document.createElement("li");
        addChat(data, li);
        chatList.scrollTop = chatList.scrollHeight;
      });

      function addChat(data, li) {
        if (data.msg !== null) {
          if (data.userId !== socket.id) {
            li.innerHTML = `
                      <p class="msg"><span class="other">User: </span>${data.msg}</p>`;
          } else {
            li.innerHTML = `
                      <p class="msg"><span class="you">You: </span>${data.msg}</p>`;
          }

          chatList.appendChild(li);
        }
      }

      sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (chatField.value !== null && chatField.value !== "") {
          const doc = {
            remoteId: remoteId,
            userId: socket.id,
            msg: chatField.value,
          };

          socket.emit("chat", doc);
          chatField.value = null;
        }
      });

      chatField.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          e.preventDefault();
          sendBtn.click();
        }
      });

      chatField.addEventListener("input", (e) => {
        const target = e.currentTarget;
        const currentLength = target.value.length;
        if (currentLength > 0) {
          const doc = {
            remoteId: remoteId,
            userId: socket.id,
            empty: false,
          };
          if (remoteId !== null) socket.emit("typing", doc);
        } else {
          const doc = {
            remoteId: remoteId,
            userId: socket.id,
            empty: true,
          };
          if (remoteId !== null) socket.emit("typing", doc);
        }
      });

      socket.on("typing", (data) => {
        if (!data.empty) typing.style = "display: flex;";
        else typing.style = "display: none;";
      });

      startStopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (startStopBtn.innerText === "Start") {
          loadPeer();
          nextBtn.style = "opacity: 1;";
          nextBtn.style.pointerEvents = "auto";
          startStopBtn.innerText = "Stop";
        } else {
          leavePeer();
          removePeer();
          stopStream();
          chatList.innerHTML = "";
          nextBtn.style = "opacity: .4;";
          nextBtn.style.pointerEvents = "none";
          loader.style = "display: none;";
          onlineContainer.style = "display: flex;";
          chatField.disabled = true;
          startStopBtn.innerText = "Start";
          startStopBtn.style = "opacity: 1;";
        }
        typing.style = "display: none;";
        reportBtn.style = "opacity: .4;";
        reportBtn.style.pointerEvents = "none";
      });

      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        leavePeer();
        toNext();
      });

      socket.on("leave", () => {
        toNext();
      });

      function toNext() {
        chatList.innerHTML = "";
        chatField.disabled = true;
        typing.style = "display: none;";
        stopStream();
        loadPeer();
      }

      function loadPeer() {
        onlineContainer.style = "display: none;";
        loader.style = "display: flex;";
        const doc = {
          teleId: teleId,
          userId: socket.id,
          flags: flags,
        };
        socket.emit("peer", doc);
      }

      function removePeer() {
        const doc = {
          userId: socket.id,
        };
        socket.emit("remove", doc);
      }

      socket.on("found", (data) => {
        if (data.userId !== socket.id) {
          loader.style = "display: none;";
          chatField.disabled = false;
          sendBtn.style = "opacity: 1;";
          sendBtn.style.pointerEvents = "auto";
          remoteId = data.userId;

          call = peer.call(remoteId, window.stream);

          call.on("stream", (remoteStream) => {
            remoteVideo.srcObject = remoteStream;
            remoteVideo.setAttribute("playsinline", "");
            remoteVideo.setAttribute("autoplay", "");
            remoteVideo.addEventListener("loadedmetadata", () => {
              remoteVideo.play();
            });
          });

          call.on("close", () => {
            remoteVideo.srcObject = null;
          });

          peer.on("call", (call) => {
            call.answer(window.stream);
            call.on("stream", (remoteStream) => {
              remoteVideo.srcObject = remoteStream;
              remoteVideo.setAttribute("playsinline", "");
              remoteVideo.setAttribute("autoplay", "");
              remoteVideo.addEventListener("loadedmetadata", () => {
                remoteVideo.play();
              });
            });
          });

          reportBtn.style = "opacity: 1;";
          reportBtn.style.pointerEvents = "auto";
          reportBtn.addEventListener("click", () => {
            loadModal("popup_report");
          });

          sendReportBtn.addEventListener("click", () => {
            flags[data.teleId] = Date.now();
            localStorage.setItem("flags", JSON.stringify(flags));
            const doc = {
              userId: data.userId,
              flagger: teleId,
            };
            socket.emit("flag", doc);
            loadModal("");
            leavePeer();
            toNext();
          });
        }
      });

      function stopStream() {
        sendBtn.style = "opacity: .4;";
        sendBtn.style.pointerEvents = "none";
        remoteId = null;
        if (call !== null && call !== undefined) {
          call.close();
          call == null;
        }
        if (remoteVideo.srcObject !== null && remoteVideo !== undefined) {
          remoteVideo.srcObject = null;
        }
      }

      function leavePeer() {
        reportBtn.style = "opacity: .4;";
        reportBtn.style.pointerEvents = "none";
        const doc = {
          remoteId: remoteId,
          userId: socket.id,
        };
        if (remoteId !== null) socket.emit("leave", doc);
      }

      window.Telegram.WebApp.onEvent("close", () => {
        leavePeer();
        stopStream();
        socket.disconnect();
      });

      window.addEventListener("beforeunload", () => {
        leavePeer();
        stopStream();
        socket.disconnect();
      });
    });
  });

  function loadModal(loc) {
    const path = document.location.href.split("/")[0];
    if (path.includes("#")) {
      const tPath = path.split("#");
      window.location.assign(`${tPath[0]}#${loc}`);
    } else {
      window.location.assign(`${path}#${loc}`);
    }
  }

  function showMsg(msg) {
    popMsg.innerText = msg;
    loadModal("popup_msg");
  }

  function formatWalletAddress(
    address,
    startLength = 6,
    endLength = 4,
    mask = "xxxxxxxxx"
  ) {
    if (address.length <= startLength + endLength) {
      return address;
    }
    return `${address.slice(0, startLength)}${mask}${address.slice(
      -endLength
    )}`;
  }

  function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
