//const url = "https://vebbo.onrender.com";
const url = "http://localhost:5002";

const reportBtn = document.querySelector(".report-icon");
const remoteVideo = document.getElementById("remote-video");
const localVideo = document.getElementById("local-video");
const noteBtn = document.getElementById("note-btn");
const startStopBtn = document.getElementById("start-stop");
const next = document.getElementById("next");

const constraints = {
  audio: true,
  video: true,
};

navigator.getUserMedia(constraints, onsuccess, onerror);

function onsuccess(stream) {
  window.stream = stream;
  localVideo.srcObject = stream;
  remoteVideo.srcObject = stream;

  remoteVideo.addEventListener("loadedmetadata", () => {
    remoteVideo.play();
  });

  localVideo.addEventListener("loadedmetadata", () => {
    localVideo.play();
  });
}

function onerror(error) {
  console.log("navigator.getUserMedia error: ", error);
}

reportBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loadModal("popup_report");
});

noteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loadModal("popup_note");
});

startStopBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loadModal("popup_start");
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
