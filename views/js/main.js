function _0x24f2(_0x9fe046, _0xccdfa0) {
  const _0x2ee4f7 = _0x2ee4();
  return (
    (_0x24f2 = function (_0x24f22e, _0x283b4c) {
      _0x24f22e = _0x24f22e - 0x11a;
      let _0xf1d781 = _0x2ee4f7[_0x24f22e];
      return _0xf1d781;
    }),
    _0x24f2(_0x9fe046, _0xccdfa0)
  );
}
function _0x2ee4() {
  const _0x3853e6 = [
    "send-btn",
    "stringify",
    "connect",
    "answer",
    "innerText",
    "open",
    "close",
    "href",
    "note-field",
    "connectWallet",
    "</p>",
    "0/1024",
    "/peerjs",
    "click",
    "disabled",
    "sendTransaction",
    "Start",
    "getItem",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22msg\x22><span\x20class=\x22you\x22>You:\x20</span>",
    "1508370UMiOyA",
    "wallet",
    "keyCode",
    "popup_note",
    "394491AIcEHG",
    "innerHTML",
    "local-video",
    "setItem",
    "teleId",
    "start",
    "srcObject",
    "TonConnectUI",
    "/1024",
    "autoplay",
    "appendChild",
    "webkitGetUserMedia",
    "/notepay",
    "Enter",
    "keyup",
    "mozGetUserMedia",
    "17OxfrhG",
    "/toWallet",
    "remove",
    "preventDefault",
    "ok-btn",
    "localhost",
    "input",
    "includes",
    "expand",
    "popup_msg",
    "call",
    "Wallet:\x20",
    "966glRgHp",
    "scrollHeight",
    "Wallet\x20connection\x20failed.",
    "innerWidth",
    "Note\x20published\x20✅",
    "loader",
    "leave",
    "https://vebbo.onrender.com",
    "json",
    "popup_report",
    "Telegram",
    "disconnect",
    "display:\x20none;",
    "/note",
    "display:\x20flex;",
    "5416173AeBlLA",
    "playsinline",
    "Wallet\x20Connection\x20Error:",
    "getElementById",
    "toString",
    "replace",
    "createElement",
    "showAlert",
    "popup_start",
    "flagger",
    "wallet-btn",
    "send-report",
    "Wallet\x20Load\x20Error:",
    "found",
    "value",
    "style",
    "obj",
    "opacity:\x201;",
    "log",
    "now",
    "slice",
    "pointerEvents",
    "application/json",
    "note-content",
    "start-stop",
    "flags",
    "28902JCPxRw",
    "5925070EKqjsk",
    "8EIIRnH",
    "stream",
    "account",
    "setAttribute",
    "Publish\x20|\x200.1\x20Ton",
    "removeItem",
    "none",
    "3289368KOFzFD",
    "getUserMedia",
    "scrollTop",
    "split",
    "auto",
    "location",
    "addEventListener",
    "userId",
    "xxxxxxxxx",
    "115946EGeJKJ",
    "address",
    "vebbo.onrender.com",
    "assign",
    "online",
    "Wallet:\x20Not\x20connected",
    "key",
    "error",
    "note",
    "note-count",
    "play",
    "loadedmetadata",
    "remote-video",
    "walletLabel",
    "beforeunload",
    "opacity:\x20.4;",
    "emit",
    "WebApp",
    "length",
    "chat",
    "msg",
  ];
  _0x2ee4 = function () {
    return _0x3853e6;
  };
  return _0x2ee4();
}
const _0x11e89d = _0x24f2;
(function (_0x2afc23, _0x598585) {
  const _0x3aafbf = _0x24f2,
    _0x29b05a = _0x2afc23();
  while (!![]) {
    try {
      const _0x583962 =
        (-parseInt(_0x3aafbf(0x18b)) / 0x1) *
          (-parseInt(_0x3aafbf(0x14f)) / 0x2) +
        (parseInt(_0x3aafbf(0x17b)) / 0x3) *
          (parseInt(_0x3aafbf(0x13f)) / 0x4) +
        -parseInt(_0x3aafbf(0x177)) / 0x5 +
        (-parseInt(_0x3aafbf(0x13d)) / 0x6) *
          (parseInt(_0x3aafbf(0x197)) / 0x7) +
        parseInt(_0x3aafbf(0x146)) / 0x8 +
        parseInt(_0x3aafbf(0x123)) / 0x9 +
        -parseInt(_0x3aafbf(0x13e)) / 0xa;
      if (_0x583962 === _0x598585) break;
      else _0x29b05a["push"](_0x29b05a["shift"]());
    } catch (_0x57c7bb) {
      _0x29b05a["push"](_0x29b05a["shift"]());
    }
  }
})(_0x2ee4, 0xab870);
if (window[_0x11e89d(0x19a)] <= 0x400) {
  const url = _0x11e89d(0x11b),
    tg = window[_0x11e89d(0x11e)][_0x11e89d(0x160)];
  tg[_0x11e89d(0x193)]();
  const tonConnectUI = new TON_CONNECT_UI[_0x11e89d(0x182)]({
      manifestUrl: url + "/tcm.json",
    }),
    socket = io(url),
    isLocal = ![],
    okBtn = document[_0x11e89d(0x126)](_0x11e89d(0x18f)),
    reportBtn = document[_0x11e89d(0x126)]("report-btn"),
    sendReportBtn = document[_0x11e89d(0x126)](_0x11e89d(0x12e)),
    loader = document[_0x11e89d(0x126)](_0x11e89d(0x19c)),
    onlineContainer = document[_0x11e89d(0x126)]("online-container"),
    onlineCount = document[_0x11e89d(0x126)]("online-count"),
    remoteVideo = document["getElementById"](_0x11e89d(0x15b)),
    localVideo = document[_0x11e89d(0x126)](_0x11e89d(0x17d)),
    noteContent = document[_0x11e89d(0x126)](_0x11e89d(0x13a)),
    noteBtn = document[_0x11e89d(0x126)]("note-btn"),
    noteField = document[_0x11e89d(0x126)](_0x11e89d(0x16c)),
    noteCount = document[_0x11e89d(0x126)](_0x11e89d(0x158)),
    walletLabel = document[_0x11e89d(0x126)](_0x11e89d(0x15c)),
    walletBtn = document[_0x11e89d(0x126)](_0x11e89d(0x12d)),
    disconnectBtn = document["getElementById"](_0x11e89d(0x11f)),
    chatList = document[_0x11e89d(0x126)]("chat-list"),
    chatField = document[_0x11e89d(0x126)]("chat-field"),
    sendBtn = document[_0x11e89d(0x126)](_0x11e89d(0x164)),
    startStopBtn = document[_0x11e89d(0x126)](_0x11e89d(0x13b)),
    nextBtn = document[_0x11e89d(0x126)]("next"),
    store = _0x11e89d(0x178);
  let walletConnected = ![];
  (chatField[_0x11e89d(0x172)] = !![]),
    (nextBtn[_0x11e89d(0x132)] = _0x11e89d(0x15e)),
    (nextBtn[_0x11e89d(0x132)][_0x11e89d(0x138)] = "none");
  let remoteId = null,
    call = null,
    teleId = null,
    flags = {};
  !localStorage[_0x11e89d(0x175)]("start") && loadModal(_0x11e89d(0x12b));
  okBtn[_0x11e89d(0x14c)]("click", () => {
    const _0xea1e21 = _0x11e89d;
    localStorage[_0xea1e21(0x17e)](_0xea1e21(0x180), !![]), loadModal("");
  });
  const constraints = { audio: !![], video: !![] },
    stream =
      navigator[_0x11e89d(0x147)] ||
      navigator[_0x11e89d(0x186)] ||
      navigator[_0x11e89d(0x18a)] ||
      navigator["msGetUserMedia"];
  stream(constraints, onsuccess, onerror);
  function onsuccess(_0x414298) {
    const _0x8163a0 = _0x11e89d;
    (window["stream"] = _0x414298),
      (localVideo[_0x8163a0(0x181)] = _0x414298),
      localVideo[_0x8163a0(0x14c)](_0x8163a0(0x15a), () => {
        const _0x2f2282 = _0x8163a0;
        localVideo[_0x2f2282(0x159)]();
      });
  }
  function onerror(_0x43a8fd) {
    const _0x2c2f4f = _0x11e89d;
    console[_0x2c2f4f(0x135)](
      "navigator.getUserMedia\x20error:\x20",
      _0x43a8fd
    );
  }
  socket["on"](_0x11e89d(0x166), () => {
    const _0x148b02 = _0x11e89d,
      _0x4b805f = new Peer(socket["id"], {
        host: isLocal ? _0x148b02(0x190) : _0x148b02(0x151),
        port: isLocal ? 0xbb8 : 0x1bb,
        path: _0x148b02(0x170),
        secure: !isLocal,
      });
    _0x4b805f["on"](_0x148b02(0x169), () => {}),
      socket["on"](_0x148b02(0x180), (_0x50c761) => {
        teleId = _0x50c761;
      }),
      socket["on"](_0x148b02(0x157), (_0x8df6d6) => {
        const _0x163026 = _0x148b02;
        noteContent[_0x163026(0x168)] = _0x8df6d6;
      }),
      socket["on"](_0x148b02(0x153), (_0x49da8e) => {
        const _0x41c4de = _0x148b02;
        onlineCount[_0x41c4de(0x168)] = toComma(_0x49da8e);
      }),
      socket["on"]("flagged", (_0x5991f5) => {
        const _0x3b7cfe = _0x148b02;
        (flags[_0x5991f5[_0x3b7cfe(0x12c)]] = Date[_0x3b7cfe(0x136)]()),
          localStorage[_0x3b7cfe(0x17e)](
            _0x3b7cfe(0x13c),
            JSON[_0x3b7cfe(0x165)](flags)
          );
      });
    async function _0x1c0dee() {
      const _0x4ff5b0 = _0x148b02;
      try {
        const _0x4c4b74 = localStorage["getItem"](store);
        (flags = JSON["parse"](localStorage["getItem"](_0x4ff5b0(0x13c)))),
          _0x4c4b74
            ? ((walletLabel[_0x4ff5b0(0x168)] =
                _0x4ff5b0(0x196) + formatWalletAddress(_0x4c4b74)),
              (walletConnected = !![]),
              (walletBtn[_0x4ff5b0(0x168)] = _0x4ff5b0(0x143)),
              (disconnectBtn[_0x4ff5b0(0x132)] = _0x4ff5b0(0x122)))
            : _0x5efa8d();
      } catch (_0x478f3a) {
        console[_0x4ff5b0(0x156)](_0x4ff5b0(0x12f), _0x478f3a), _0x5efa8d();
      }
    }
    function _0x5efa8d() {
      const _0x4d1a65 = _0x148b02;
      (walletLabel[_0x4d1a65(0x168)] = _0x4d1a65(0x154)),
        localStorage[_0x4d1a65(0x144)](store),
        (walletBtn[_0x4d1a65(0x168)] = "Connect\x20Wallet"),
        (walletConnected = ![]),
        (disconnectBtn["style"] = "display:\x20none;");
    }
    disconnectBtn[_0x148b02(0x14c)](_0x148b02(0x171), async () => {
      const _0x5c0606 = _0x148b02;
      await tonConnectUI[_0x5c0606(0x11f)](), _0x5efa8d();
    }),
      noteField[_0x148b02(0x14c)](_0x148b02(0x191), (_0x1bbf1f) => {
        const _0x802122 = _0x148b02,
          _0x53aa3c = _0x1bbf1f["currentTarget"],
          _0x10a953 = _0x53aa3c[_0x802122(0x131)][_0x802122(0x161)];
        noteCount["innerText"] = _0x10a953 + _0x802122(0x183);
      }),
      walletBtn[_0x148b02(0x14c)](_0x148b02(0x171), async (_0x1553f6) => {
        const _0x4a758f = _0x148b02;
        _0x1553f6[_0x4a758f(0x18e)](), (walletBtn[_0x4a758f(0x172)] = !![]);
        try {
          if (!walletConnected) {
            if (localStorage[_0x4a758f(0x175)](store))
              await tonConnectUI["disconnect"]();
            const _0xcf6361 = await tonConnectUI[_0x4a758f(0x16d)]();
            if (!_0xcf6361 || !_0xcf6361[_0x4a758f(0x141)]) {
              walletBtn[_0x4a758f(0x172)] = ![];
              throw new Error(_0x4a758f(0x199));
            }
            const _0x133e2a = _0xcf6361[_0x4a758f(0x141)][_0x4a758f(0x150)],
              _0x212250 = await fetch(url + _0x4a758f(0x18c), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON[_0x4a758f(0x165)]({ address: _0x133e2a }),
              }),
              _0x1f6eaa = await _0x212250[_0x4a758f(0x11c)]();
            (walletLabel[_0x4a758f(0x168)] =
              "Wallet:\x20" + formatWalletAddress(_0x1f6eaa[_0x4a758f(0x178)])),
              (walletConnected = !![]),
              localStorage[_0x4a758f(0x17e)](store, _0x1f6eaa["wallet"]),
              (walletBtn["innerText"] = "Publish\x20|\x200.1\x20Ton"),
              (walletBtn[_0x4a758f(0x172)] = ![]),
              (disconnectBtn["style"] = _0x4a758f(0x122));
          } else {
            const _0x521d8d = noteField[_0x4a758f(0x131)];
            if (!_0x521d8d || _0x521d8d[_0x4a758f(0x131)] == "") {
              tg[_0x4a758f(0x12a)]("Write\x20a\x20note");
              return;
            }
            const _0x4773ca = await fetch(url + _0x4a758f(0x187)),
              _0x2f8b53 = await _0x4773ca[_0x4a758f(0x11c)]();
            if (_0x2f8b53) {
              await tonConnectUI[_0x4a758f(0x173)](_0x2f8b53[_0x4a758f(0x133)]);
              const _0x125abd = await fetch(url + _0x4a758f(0x121), {
                method: "POST",
                headers: { "Content-Type": _0x4a758f(0x139) },
                body: JSON["stringify"]({ noteText: _0x521d8d }),
              });
              await _0x125abd[_0x4a758f(0x11c)](),
                (noteField[_0x4a758f(0x131)] = null),
                (noteCount[_0x4a758f(0x168)] = _0x4a758f(0x16f)),
                socket[_0x4a758f(0x15f)]("note"),
                loadModal(""),
                tg[_0x4a758f(0x12a)](_0x4a758f(0x19b));
            }
            walletBtn[_0x4a758f(0x172)] = ![];
          }
        } catch (_0x1cb92e) {
          (walletBtn[_0x4a758f(0x172)] = ![]),
            console[_0x4a758f(0x156)](_0x4a758f(0x125), _0x1cb92e),
            tg[_0x4a758f(0x12a)](_0x1cb92e),
            _0x5efa8d();
        }
      }),
      noteBtn[_0x148b02(0x14c)]("click", (_0x23fa22) => {
        const _0x38f26c = _0x148b02;
        _0x23fa22[_0x38f26c(0x18e)](), _0x1c0dee(), loadModal(_0x38f26c(0x17a));
      }),
      socket["on"](_0x148b02(0x162), (_0x34ae83) => {
        const _0x3418a9 = _0x148b02;
        let _0x475a79 = document[_0x3418a9(0x129)]("li");
        _0x1c0ebd(_0x34ae83, _0x475a79),
          (chatList[_0x3418a9(0x148)] = chatList[_0x3418a9(0x198)]);
      });
    function _0x1c0ebd(_0x1b7fbd, _0x1ef58d) {
      const _0x50adee = _0x148b02;
      _0x1b7fbd[_0x50adee(0x163)] !== null &&
        (_0x1b7fbd[_0x50adee(0x14d)] !== socket["id"]
          ? (_0x1ef58d[_0x50adee(0x17c)] =
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22msg\x22><span\x20class=\x22other\x22>User:\x20</span>" +
              _0x1b7fbd["msg"] +
              _0x50adee(0x16e))
          : (_0x1ef58d[_0x50adee(0x17c)] =
              _0x50adee(0x176) +
              _0x1b7fbd[_0x50adee(0x163)] +
              _0x50adee(0x16e)),
        chatList[_0x50adee(0x185)](_0x1ef58d));
    }
    sendBtn[_0x148b02(0x14c)](_0x148b02(0x171), (_0x110546) => {
      const _0x1ccbe1 = _0x148b02;
      _0x110546[_0x1ccbe1(0x18e)]();
      if (
        chatField[_0x1ccbe1(0x131)] !== null &&
        chatField[_0x1ccbe1(0x131)] !== ""
      ) {
        const _0x1b2317 = {
          remoteId: remoteId,
          userId: socket["id"],
          msg: chatField[_0x1ccbe1(0x131)],
        };
        socket["emit"](_0x1ccbe1(0x162), _0x1b2317),
          (chatField[_0x1ccbe1(0x131)] = null);
      }
    }),
      chatField[_0x148b02(0x14c)](_0x148b02(0x189), (_0x4d2d1c) => {
        const _0x3b3a44 = _0x148b02;
        (_0x4d2d1c[_0x3b3a44(0x155)] === _0x3b3a44(0x188) ||
          _0x4d2d1c[_0x3b3a44(0x179)] === 0xd) &&
          (_0x4d2d1c["preventDefault"](), sendBtn[_0x3b3a44(0x171)]());
      }),
      startStopBtn[_0x148b02(0x14c)](_0x148b02(0x171), (_0x5e9b4f) => {
        const _0x4e5b31 = _0x148b02;
        _0x5e9b4f[_0x4e5b31(0x18e)](),
          startStopBtn[_0x4e5b31(0x168)] === _0x4e5b31(0x174)
            ? (_0x56afcc(),
              (nextBtn[_0x4e5b31(0x132)] = _0x4e5b31(0x134)),
              (nextBtn[_0x4e5b31(0x132)][_0x4e5b31(0x138)] = _0x4e5b31(0x14a)),
              (startStopBtn[_0x4e5b31(0x168)] = "Stop"))
            : (_0x314c14(),
              _0x47617c(),
              _0x532d51(),
              (chatList["innerHTML"] = ""),
              (nextBtn[_0x4e5b31(0x132)] = _0x4e5b31(0x15e)),
              (nextBtn[_0x4e5b31(0x132)][_0x4e5b31(0x138)] = _0x4e5b31(0x145)),
              (loader[_0x4e5b31(0x132)] = _0x4e5b31(0x120)),
              (onlineContainer["style"] = _0x4e5b31(0x122)),
              (chatField[_0x4e5b31(0x172)] = !![]),
              (startStopBtn["innerText"] = _0x4e5b31(0x174)),
              (startStopBtn[_0x4e5b31(0x132)] = _0x4e5b31(0x134))),
          (reportBtn["style"] = _0x4e5b31(0x15e)),
          (reportBtn[_0x4e5b31(0x132)][_0x4e5b31(0x138)] = _0x4e5b31(0x145));
      }),
      nextBtn["addEventListener"](_0x148b02(0x171), (_0x198dd6) => {
        const _0x34b416 = _0x148b02;
        _0x198dd6[_0x34b416(0x18e)](), _0x314c14(), _0x3deb2d();
      }),
      socket["on"]("leave", () => {
        _0x3deb2d();
      });
    function _0x3deb2d() {
      const _0x1fae5a = _0x148b02;
      (chatList[_0x1fae5a(0x17c)] = ""),
        (chatField["disabled"] = !![]),
        _0x532d51(),
        _0x56afcc();
    }
    function _0x56afcc() {
      const _0x438942 = _0x148b02;
      (onlineContainer[_0x438942(0x132)] = _0x438942(0x120)),
        (loader[_0x438942(0x132)] = _0x438942(0x122));
      const _0x1fe259 = { teleId: teleId, userId: socket["id"], flags: flags };
      socket[_0x438942(0x15f)]("peer", _0x1fe259);
    }
    function _0x47617c() {
      const _0x386a52 = _0x148b02,
        _0x5269ab = { userId: socket["id"] };
      socket[_0x386a52(0x15f)](_0x386a52(0x18d), _0x5269ab);
    }
    socket["on"](_0x148b02(0x130), (_0x2c29ff) => {
      const _0x679bd5 = _0x148b02;
      _0x2c29ff[_0x679bd5(0x14d)] !== socket["id"] &&
        ((loader[_0x679bd5(0x132)] = _0x679bd5(0x120)),
        (chatField[_0x679bd5(0x172)] = ![]),
        (sendBtn[_0x679bd5(0x132)] = _0x679bd5(0x134)),
        (sendBtn[_0x679bd5(0x132)]["pointerEvents"] = _0x679bd5(0x14a)),
        (remoteId = _0x2c29ff[_0x679bd5(0x14d)]),
        (call = _0x4b805f[_0x679bd5(0x195)](remoteId, window["stream"])),
        call["on"](_0x679bd5(0x140), (_0x3f9af3) => {
          const _0xf9c599 = _0x679bd5;
          (remoteVideo["srcObject"] = _0x3f9af3),
            remoteVideo[_0xf9c599(0x142)](_0xf9c599(0x124), ""),
            remoteVideo[_0xf9c599(0x142)](_0xf9c599(0x184), ""),
            remoteVideo[_0xf9c599(0x14c)](_0xf9c599(0x15a), () => {
              const _0x42c423 = _0xf9c599;
              remoteVideo[_0x42c423(0x159)]();
            });
        }),
        call["on"](_0x679bd5(0x16a), () => {
          const _0x2d419e = _0x679bd5;
          remoteVideo[_0x2d419e(0x181)] = null;
        }),
        _0x4b805f["on"](_0x679bd5(0x195), (_0xaa1480) => {
          const _0x86f20c = _0x679bd5;
          _0xaa1480[_0x86f20c(0x167)](window[_0x86f20c(0x140)]),
            _0xaa1480["on"](_0x86f20c(0x140), (_0x23afe8) => {
              const _0x1030e0 = _0x86f20c;
              (remoteVideo[_0x1030e0(0x181)] = _0x23afe8),
                remoteVideo["setAttribute"](_0x1030e0(0x124), ""),
                remoteVideo["setAttribute"]("autoplay", ""),
                remoteVideo[_0x1030e0(0x14c)]("loadedmetadata", () => {
                  const _0x4bd1ef = _0x1030e0;
                  remoteVideo[_0x4bd1ef(0x159)]();
                });
            });
        }),
        (reportBtn["style"] = "opacity:\x201;"),
        (reportBtn[_0x679bd5(0x132)][_0x679bd5(0x138)] = _0x679bd5(0x14a)),
        reportBtn["addEventListener"](_0x679bd5(0x171), () => {
          const _0x2c3923 = _0x679bd5;
          loadModal(_0x2c3923(0x11d));
        }),
        sendReportBtn[_0x679bd5(0x14c)](_0x679bd5(0x171), () => {
          const _0x1b4835 = _0x679bd5;
          (flags[_0x2c29ff[_0x1b4835(0x17f)]] = Date[_0x1b4835(0x136)]()),
            localStorage[_0x1b4835(0x17e)](
              _0x1b4835(0x13c),
              JSON[_0x1b4835(0x165)](flags)
            );
          const _0x3e3304 = {
            userId: _0x2c29ff[_0x1b4835(0x14d)],
            flagger: teleId,
          };
          socket[_0x1b4835(0x15f)]("flag", _0x3e3304),
            loadModal(""),
            _0x314c14(),
            _0x3deb2d();
        }));
    });
    function _0x532d51() {
      const _0x1327e5 = _0x148b02;
      (sendBtn[_0x1327e5(0x132)] = _0x1327e5(0x15e)),
        (sendBtn["style"]["pointerEvents"] = _0x1327e5(0x145)),
        (remoteId = null),
        call !== null &&
          call !== undefined &&
          (call[_0x1327e5(0x16a)](), call == null),
        remoteVideo["srcObject"] !== null &&
          remoteVideo !== undefined &&
          (remoteVideo["srcObject"] = null);
    }
    function _0x314c14() {
      const _0xdf0e63 = _0x148b02;
      (reportBtn[_0xdf0e63(0x132)] = _0xdf0e63(0x15e)),
        (reportBtn[_0xdf0e63(0x132)][_0xdf0e63(0x138)] = _0xdf0e63(0x145));
      const _0x3dd56e = { remoteId: remoteId, userId: socket["id"] };
      if (remoteId !== null)
        socket[_0xdf0e63(0x15f)](_0xdf0e63(0x11a), _0x3dd56e);
    }
    window["addEventListener"](_0x148b02(0x15d), () => {
      const _0xb19781 = _0x148b02;
      _0x314c14(), _0x532d51(), socket[_0xb19781(0x11f)]();
    });
  });
  function loadModal(_0x2b1e3e) {
    const _0x51c006 = _0x11e89d,
      _0x233797 =
        document[_0x51c006(0x14b)][_0x51c006(0x16b)][_0x51c006(0x149)](
          "/"
        )[0x0];
    if (_0x233797[_0x51c006(0x192)]("#")) {
      const _0x3c595d = _0x233797[_0x51c006(0x149)]("#");
      window[_0x51c006(0x14b)][_0x51c006(0x152)](
        _0x3c595d[0x0] + "#" + _0x2b1e3e
      );
    } else window[_0x51c006(0x14b)]["assign"](_0x233797 + "#" + _0x2b1e3e);
  }
  function showMsg(_0x3382b9) {
    const _0x9aab48 = _0x11e89d;
    (popMsg["innerText"] = _0x3382b9), loadModal(_0x9aab48(0x194));
  }
  function formatWalletAddress(
    _0x155409,
    _0x333259 = 0x6,
    _0x5026f1 = 0x4,
    _0x11225e = _0x11e89d(0x14e)
  ) {
    const _0x5ab6e0 = _0x11e89d;
    if (_0x155409[_0x5ab6e0(0x161)] <= _0x333259 + _0x5026f1) return _0x155409;
    return (
      "" +
      _0x155409[_0x5ab6e0(0x137)](0x0, _0x333259) +
      _0x11225e +
      _0x155409["slice"](-_0x5026f1)
    );
  }
  function toComma(_0x533b43) {
    const _0xe1ff2a = _0x11e89d;
    return _0x533b43[_0xe1ff2a(0x127)]()[_0xe1ff2a(0x128)](
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }
}
