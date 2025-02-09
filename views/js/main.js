const _0x32280e = _0xc3fa;
function _0x62f1() {
  const _0x4dac83 = [
    "setItem",
    "ok-btn",
    "Note\x20published\x20✅",
    "3210606lxuctJ",
    "Start",
    "remove",
    "length",
    "note-btn",
    "includes",
    "/toWallet",
    "84636zpEGmu",
    "parse",
    "local-video",
    "appendChild",
    "close",
    "address",
    "/1024",
    "innerHTML",
    "disconnect",
    "createElement",
    "Write\x20a\x20note",
    "vebbo.onrender.com",
    "start",
    "localhost",
    "none",
    "report-btn",
    "wallet",
    "Wallet\x20connection\x20failed.",
    "location",
    "Wallet:\x20",
    "found",
    "getElementById",
    "key",
    "msg",
    "click",
    "/note",
    "sendTransaction",
    "slice",
    "display:\x20flex;",
    "POST",
    "toString",
    "stream",
    "innerText",
    "popup_note",
    "next",
    "mozGetUserMedia",
    "opacity:\x20.4;",
    "</p>",
    "opacity:\x201;",
    "399700NhuIIi",
    "account",
    "Stop",
    "80fHKHVK",
    "scrollTop",
    "userId",
    "peer",
    "online-container",
    "value",
    "webkitGetUserMedia",
    "TonConnectUI",
    "application/json",
    "style",
    "chat-field",
    "Telegram",
    "addEventListener",
    "stringify",
    "/peerjs",
    "pointerEvents",
    "Connect\x20Wallet",
    "15vNWESR",
    "start-stop",
    "obj",
    "href",
    "teleId",
    "remote-video",
    "error",
    "loadedmetadata",
    "online-count",
    "auto",
    "getItem",
    "expand",
    "scrollHeight",
    "popup_msg",
    "note",
    "play",
    "json",
    "flags",
    "0/1024",
    "display:\x20none;",
    "setAttribute",
    "now",
    "srcObject",
    "connectWallet",
    "autoplay",
    "call",
    "leave",
    "showAlert",
    "536730QbThUF",
    "40047SVdTeh",
    "navigator.getUserMedia\x20error:\x20",
    "note-count",
    "innerWidth",
    "https://vebbo.onrender.com",
    "loader",
    "wallet-btn",
    "online",
    "popup_report",
    "emit",
    "playsinline",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22msg\x22><span\x20class=\x22you\x22>You:\x20</span>",
    "currentTarget",
    "chat",
    "send-report",
    "flagged",
    "preventDefault",
    "5860odmlfm",
    "flag",
    "xxxxxxxxx",
    "309272WWBajz",
    "disabled",
    "Wallet:\x20Not\x20connected",
    "Enter",
    "answer",
    "msGetUserMedia",
    "send-btn",
    "chat-list",
    "assign",
    "log",
    "flagger",
    "popup_start",
    "connect",
    "input",
  ];
  _0x62f1 = function () {
    return _0x4dac83;
  };
  return _0x62f1();
}
function _0xc3fa(_0x46803c, _0x168ecb) {
  const _0x62f11 = _0x62f1();
  return (
    (_0xc3fa = function (_0xc3faef, _0x46ec27) {
      _0xc3faef = _0xc3faef - 0x15e;
      let _0x6c8e2a = _0x62f11[_0xc3faef];
      return _0x6c8e2a;
    }),
    _0xc3fa(_0x46803c, _0x168ecb)
  );
}
(function (_0x1e858c, _0x146071) {
  const _0x1d9cc2 = _0xc3fa,
    _0x178293 = _0x1e858c();
  while (!![]) {
    try {
      const _0x23441f =
        -parseInt(_0x1d9cc2(0x1cc)) / 0x1 +
        parseInt(_0x1d9cc2(0x163)) / 0x2 +
        (-parseInt(_0x1d9cc2(0x1bb)) / 0x3) *
          (-parseInt(_0x1d9cc2(0x18d)) / 0x4) +
        (-parseInt(_0x1d9cc2(0x19e)) / 0x5) *
          (-parseInt(_0x1d9cc2(0x1ba)) / 0x6) +
        -parseInt(_0x1d9cc2(0x18a)) / 0x7 +
        parseInt(_0x1d9cc2(0x1cf)) / 0x8 +
        -parseInt(_0x1d9cc2(0x1e0)) / 0x9;
      if (_0x23441f === _0x146071) break;
      else _0x178293["push"](_0x178293["shift"]());
    } catch (_0x1ce705) {
      _0x178293["push"](_0x178293["shift"]());
    }
  }
})(_0x62f1, 0x30014);
if (window[_0x32280e(0x1be)] <= 0x400) {
  const url = _0x32280e(0x1bf),
    tg = window[_0x32280e(0x198)]["WebApp"];
  tg[_0x32280e(0x1a9)]();
  const tonConnectUI = new TON_CONNECT_UI[_0x32280e(0x194)]({
      manifestUrl: url + "/tcm.json",
    }),
    socket = io(url),
    isLocal = ![],
    okBtn = document[_0x32280e(0x178)](_0x32280e(0x1de)),
    reportBtn = document[_0x32280e(0x178)](_0x32280e(0x172)),
    sendReportBtn = document[_0x32280e(0x178)](_0x32280e(0x1c9)),
    loader = document[_0x32280e(0x178)](_0x32280e(0x1c0)),
    onlineContainer = document[_0x32280e(0x178)](_0x32280e(0x191)),
    onlineCount = document[_0x32280e(0x178)](_0x32280e(0x1a6)),
    remoteVideo = document[_0x32280e(0x178)](_0x32280e(0x1a3)),
    localVideo = document[_0x32280e(0x178)](_0x32280e(0x165)),
    noteContent = document[_0x32280e(0x178)]("note-content"),
    noteBtn = document[_0x32280e(0x178)](_0x32280e(0x160)),
    noteField = document["getElementById"]("note-field"),
    noteCount = document[_0x32280e(0x178)](_0x32280e(0x1bd)),
    walletLabel = document[_0x32280e(0x178)]("walletLabel"),
    walletBtn = document["getElementById"](_0x32280e(0x1c1)),
    disconnectBtn = document[_0x32280e(0x178)]("disconnect"),
    chatList = document[_0x32280e(0x178)](_0x32280e(0x1d6)),
    chatField = document[_0x32280e(0x178)](_0x32280e(0x197)),
    sendBtn = document[_0x32280e(0x178)](_0x32280e(0x1d5)),
    startStopBtn = document[_0x32280e(0x178)](_0x32280e(0x19f)),
    nextBtn = document[_0x32280e(0x178)](_0x32280e(0x185)),
    store = _0x32280e(0x173);
  let walletConnected = ![];
  (chatField[_0x32280e(0x1d0)] = !![]),
    (startStopBtn[_0x32280e(0x196)] = "opacity:\x20.4;"),
    (startStopBtn[_0x32280e(0x196)][_0x32280e(0x19c)] = _0x32280e(0x171)),
    (nextBtn[_0x32280e(0x196)] = _0x32280e(0x187)),
    (nextBtn[_0x32280e(0x196)][_0x32280e(0x19c)] = _0x32280e(0x171));
  let remoteId = null,
    call = null,
    teleId = null,
    flags = {};
  !localStorage[_0x32280e(0x1a8)]("start") && loadModal(_0x32280e(0x1da));
  okBtn["addEventListener"](_0x32280e(0x17b), () => {
    const _0x259342 = _0x32280e;
    localStorage[_0x259342(0x1dd)](_0x259342(0x16f), !![]), loadModal("");
  });
  const constraints = { audio: !![], video: !![] },
    stream =
      navigator["getUserMedia"] ||
      navigator[_0x32280e(0x193)] ||
      navigator[_0x32280e(0x186)] ||
      navigator[_0x32280e(0x1d4)];
  stream(constraints, onsuccess, onerror);
  function onsuccess(_0x188d0c) {
    const _0x299848 = _0x32280e;
    (window[_0x299848(0x182)] = _0x188d0c),
      (localVideo[_0x299848(0x1b4)] = _0x188d0c),
      localVideo["addEventListener"](_0x299848(0x1a5), () => {
        const _0xba5839 = _0x299848;
        localVideo[_0xba5839(0x1ad)]();
      });
  }
  function onerror(_0x2d223a) {
    const _0x287bb0 = _0x32280e;
    console[_0x287bb0(0x1d8)](_0x287bb0(0x1bc), _0x2d223a);
  }
  socket["on"](_0x32280e(0x1db), () => {
    const _0x5981b5 = _0x32280e,
      _0x5d5ec5 = new Peer(socket["id"], {
        host: isLocal ? _0x5981b5(0x170) : _0x5981b5(0x16e),
        port: isLocal ? 0xbb8 : 0x1bb,
        path: _0x5981b5(0x19b),
        secure: !isLocal,
      });
    _0x5d5ec5["on"]("open", () => {
      const _0x127618 = _0x5981b5;
      (startStopBtn["style"] = _0x127618(0x189)),
        (startStopBtn[_0x127618(0x196)][_0x127618(0x19c)] = _0x127618(0x1a7));
    }),
      socket["on"](_0x5981b5(0x16f), (_0x928156) => {
        teleId = _0x928156;
      }),
      socket["on"](_0x5981b5(0x1ac), (_0x331db5) => {
        const _0x2d6b45 = _0x5981b5;
        noteContent[_0x2d6b45(0x183)] = _0x331db5;
      }),
      socket["on"](_0x5981b5(0x1c2), (_0x277034) => {
        const _0x559901 = _0x5981b5;
        onlineCount[_0x559901(0x183)] = toComma(_0x277034);
      }),
      socket["on"](_0x5981b5(0x1ca), (_0x3b13a4) => {
        const _0x1a8b6b = _0x5981b5;
        (flags[_0x3b13a4[_0x1a8b6b(0x1d9)]] = Date[_0x1a8b6b(0x1b3)]()),
          localStorage[_0x1a8b6b(0x1dd)](
            _0x1a8b6b(0x1af),
            JSON[_0x1a8b6b(0x19a)](flags)
          );
      });
    async function _0x56a5d6() {
      const _0x11aead = _0x5981b5;
      try {
        const _0xa2e3bb = localStorage[_0x11aead(0x1a8)](store);
        (flags = JSON[_0x11aead(0x164)](
          localStorage["getItem"](_0x11aead(0x1af))
        )),
          _0xa2e3bb
            ? ((walletLabel[_0x11aead(0x183)] =
                _0x11aead(0x176) + formatWalletAddress(_0xa2e3bb)),
              (walletConnected = !![]),
              (walletBtn[_0x11aead(0x183)] = "Publish\x20|\x200.1\x20Ton"),
              (disconnectBtn[_0x11aead(0x196)] = "display:\x20flex;"))
            : _0x5cd2da();
      } catch (_0xa0b2bb) {
        console[_0x11aead(0x1a4)]("Wallet\x20Load\x20Error:", _0xa0b2bb),
          _0x5cd2da();
      }
    }
    function _0x5cd2da() {
      const _0xb5f5f = _0x5981b5;
      (walletLabel[_0xb5f5f(0x183)] = _0xb5f5f(0x1d1)),
        localStorage["removeItem"](store),
        (walletBtn["innerText"] = _0xb5f5f(0x19d)),
        (walletConnected = ![]),
        (disconnectBtn[_0xb5f5f(0x196)] = "display:\x20none;");
    }
    disconnectBtn[_0x5981b5(0x199)](_0x5981b5(0x17b), async () => {
      const _0x5c90da = _0x5981b5;
      await tonConnectUI[_0x5c90da(0x16b)](), _0x5cd2da();
    }),
      noteField[_0x5981b5(0x199)](_0x5981b5(0x1dc), (_0x4e61b3) => {
        const _0x194b88 = _0x5981b5,
          _0x40e7f7 = _0x4e61b3[_0x194b88(0x1c7)],
          _0x107449 = _0x40e7f7[_0x194b88(0x192)]["length"];
        noteCount[_0x194b88(0x183)] = _0x107449 + _0x194b88(0x169);
      }),
      walletBtn["addEventListener"](_0x5981b5(0x17b), async (_0xaad8fb) => {
        const _0x26162f = _0x5981b5;
        _0xaad8fb[_0x26162f(0x1cb)](), (walletBtn[_0x26162f(0x1d0)] = !![]);
        try {
          if (!walletConnected) {
            if (localStorage["getItem"](store))
              await tonConnectUI[_0x26162f(0x16b)]();
            const _0x107245 = await tonConnectUI[_0x26162f(0x1b5)]();
            if (!_0x107245 || !_0x107245[_0x26162f(0x18b)]) {
              walletBtn[_0x26162f(0x1d0)] = ![];
              throw new Error(_0x26162f(0x174));
            }
            const _0x68905b = _0x107245["account"][_0x26162f(0x168)],
              _0x5f474e = await fetch(url + _0x26162f(0x162), {
                method: "POST",
                headers: { "Content-Type": _0x26162f(0x195) },
                body: JSON[_0x26162f(0x19a)]({ address: _0x68905b }),
              }),
              _0xa8b44 = await _0x5f474e[_0x26162f(0x1ae)]();
            (walletLabel[_0x26162f(0x183)] =
              "Wallet:\x20" + formatWalletAddress(_0xa8b44[_0x26162f(0x173)])),
              (walletConnected = !![]),
              localStorage[_0x26162f(0x1dd)](store, _0xa8b44[_0x26162f(0x173)]),
              (walletBtn[_0x26162f(0x183)] = "Publish\x20|\x200.1\x20Ton"),
              (walletBtn[_0x26162f(0x1d0)] = ![]),
              (disconnectBtn["style"] = _0x26162f(0x17f));
          } else {
            const _0x3a949e = noteField[_0x26162f(0x192)];
            if (!_0x3a949e || _0x3a949e[_0x26162f(0x192)] == "") {
              tg[_0x26162f(0x1b9)](_0x26162f(0x16d));
              return;
            }
            const _0x286467 = await fetch(url + "/notepay"),
              _0xf5ed57 = await _0x286467[_0x26162f(0x1ae)]();
            if (_0xf5ed57) {
              await tonConnectUI[_0x26162f(0x17d)](_0xf5ed57[_0x26162f(0x1a0)]);
              const _0x3afa93 = await fetch(url + _0x26162f(0x17c), {
                method: _0x26162f(0x180),
                headers: { "Content-Type": _0x26162f(0x195) },
                body: JSON[_0x26162f(0x19a)]({ noteText: _0x3a949e }),
              });
              await _0x3afa93[_0x26162f(0x1ae)](),
                (noteField["value"] = null),
                (noteCount[_0x26162f(0x183)] = _0x26162f(0x1b0)),
                socket[_0x26162f(0x1c4)](_0x26162f(0x1ac)),
                loadModal(""),
                tg[_0x26162f(0x1b9)](_0x26162f(0x1df));
            }
            walletBtn["disabled"] = ![];
          }
        } catch (_0x55643f) {
          (walletBtn["disabled"] = ![]),
            console[_0x26162f(0x1a4)](
              "Wallet\x20Connection\x20Error:",
              _0x55643f
            ),
            tg["showAlert"](_0x55643f),
            _0x5cd2da();
        }
      }),
      noteBtn[_0x5981b5(0x199)](_0x5981b5(0x17b), (_0x345c2a) => {
        const _0x55076b = _0x5981b5;
        _0x345c2a[_0x55076b(0x1cb)](), _0x56a5d6(), loadModal(_0x55076b(0x184));
      }),
      socket["on"](_0x5981b5(0x1c8), (_0x12ae2c) => {
        const _0x2823ed = _0x5981b5;
        let _0x15a9c4 = document[_0x2823ed(0x16c)]("li");
        _0x22500a(_0x12ae2c, _0x15a9c4),
          (chatList[_0x2823ed(0x18e)] = chatList[_0x2823ed(0x1aa)]);
      });
    function _0x22500a(_0x3c7f8a, _0x43c5cc) {
      const _0x11de42 = _0x5981b5;
      _0x3c7f8a["msg"] !== null &&
        (_0x3c7f8a[_0x11de42(0x18f)] !== socket["id"]
          ? (_0x43c5cc["innerHTML"] =
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22msg\x22><span\x20class=\x22other\x22>User:\x20</span>" +
              _0x3c7f8a["msg"] +
              _0x11de42(0x188))
          : (_0x43c5cc[_0x11de42(0x16a)] =
              _0x11de42(0x1c6) +
              _0x3c7f8a[_0x11de42(0x17a)] +
              _0x11de42(0x188)),
        chatList[_0x11de42(0x166)](_0x43c5cc));
    }
    sendBtn[_0x5981b5(0x199)](_0x5981b5(0x17b), (_0x2bae7d) => {
      const _0x463e97 = _0x5981b5;
      _0x2bae7d[_0x463e97(0x1cb)]();
      if (chatField["value"] !== null && chatField[_0x463e97(0x192)] !== "") {
        const _0x1fa577 = {
          remoteId: remoteId,
          userId: socket["id"],
          msg: chatField[_0x463e97(0x192)],
        };
        socket[_0x463e97(0x1c4)](_0x463e97(0x1c8), _0x1fa577),
          (chatField["value"] = null);
      }
    }),
      chatField[_0x5981b5(0x199)]("keyup", (_0xe5e7e1) => {
        const _0x25600c = _0x5981b5;
        (_0xe5e7e1[_0x25600c(0x179)] === _0x25600c(0x1d2) ||
          _0xe5e7e1["keyCode"] === 0xd) &&
          (_0xe5e7e1[_0x25600c(0x1cb)](), sendBtn[_0x25600c(0x17b)]());
      }),
      startStopBtn["addEventListener"](_0x5981b5(0x17b), (_0x27c087) => {
        const _0xb7679d = _0x5981b5;
        _0x27c087[_0xb7679d(0x1cb)](),
          startStopBtn[_0xb7679d(0x183)] === _0xb7679d(0x1e1)
            ? (_0x24800e(),
              (nextBtn[_0xb7679d(0x196)] = "opacity:\x201;"),
              (nextBtn[_0xb7679d(0x196)][_0xb7679d(0x19c)] = "auto"),
              (startStopBtn["innerText"] = _0xb7679d(0x18c)))
            : (_0x709da2(),
              _0x215306(),
              _0x457650(),
              (chatList[_0xb7679d(0x16a)] = ""),
              (nextBtn[_0xb7679d(0x196)] = _0xb7679d(0x187)),
              (nextBtn[_0xb7679d(0x196)][_0xb7679d(0x19c)] = _0xb7679d(0x171)),
              (loader[_0xb7679d(0x196)] = "display:\x20none;"),
              (onlineContainer[_0xb7679d(0x196)] = _0xb7679d(0x17f)),
              (chatField[_0xb7679d(0x1d0)] = !![]),
              (startStopBtn[_0xb7679d(0x183)] = _0xb7679d(0x1e1)),
              (startStopBtn[_0xb7679d(0x196)] = _0xb7679d(0x189))),
          (reportBtn["style"] = "opacity:\x20.4;"),
          (reportBtn[_0xb7679d(0x196)][_0xb7679d(0x19c)] = _0xb7679d(0x171));
      }),
      nextBtn[_0x5981b5(0x199)](_0x5981b5(0x17b), (_0x1d7381) => {
        _0x1d7381["preventDefault"](), _0x709da2(), _0x59dbfe();
      }),
      socket["on"](_0x5981b5(0x1b8), () => {
        _0x59dbfe();
      });
    function _0x59dbfe() {
      const _0x4bf32a = _0x5981b5;
      (chatList[_0x4bf32a(0x16a)] = ""),
        (chatField[_0x4bf32a(0x1d0)] = !![]),
        _0x457650(),
        _0x24800e();
    }
    function _0x24800e() {
      const _0x46a049 = _0x5981b5;
      (onlineContainer[_0x46a049(0x196)] = "display:\x20none;"),
        (loader[_0x46a049(0x196)] = _0x46a049(0x17f));
      const _0x583f3e = { teleId: teleId, userId: socket["id"], flags: flags };
      socket[_0x46a049(0x1c4)](_0x46a049(0x190), _0x583f3e);
    }
    function _0x215306() {
      const _0x328f69 = _0x5981b5,
        _0x53950 = { userId: socket["id"] };
      socket[_0x328f69(0x1c4)](_0x328f69(0x15e), _0x53950);
    }
    socket["on"](_0x5981b5(0x177), (_0x299643) => {
      const _0x539226 = _0x5981b5;
      _0x299643[_0x539226(0x18f)] !== socket["id"] &&
        ((loader[_0x539226(0x196)] = _0x539226(0x1b1)),
        (chatField[_0x539226(0x1d0)] = ![]),
        (sendBtn["style"] = _0x539226(0x189)),
        (sendBtn[_0x539226(0x196)][_0x539226(0x19c)] = _0x539226(0x1a7)),
        (remoteId = _0x299643[_0x539226(0x18f)]),
        (call = _0x5d5ec5[_0x539226(0x1b7)](
          remoteId,
          window[_0x539226(0x182)]
        )),
        call["on"](_0x539226(0x182), (_0x16842e) => {
          const _0x46564f = _0x539226;
          (remoteVideo[_0x46564f(0x1b4)] = _0x16842e),
            remoteVideo[_0x46564f(0x1b2)](_0x46564f(0x1c5), ""),
            remoteVideo[_0x46564f(0x1b2)](_0x46564f(0x1b6), ""),
            remoteVideo["addEventListener"](_0x46564f(0x1a5), () => {
              const _0x17ff4a = _0x46564f;
              remoteVideo[_0x17ff4a(0x1ad)]();
            });
        }),
        call["on"](_0x539226(0x167), () => {
          const _0x5a782e = _0x539226;
          remoteVideo[_0x5a782e(0x1b4)] = null;
        }),
        _0x5d5ec5["on"](_0x539226(0x1b7), (_0x5bd227) => {
          const _0x4c5d20 = _0x539226;
          _0x5bd227[_0x4c5d20(0x1d3)](window["stream"]),
            _0x5bd227["on"](_0x4c5d20(0x182), (_0x58762d) => {
              const _0x1ea131 = _0x4c5d20;
              (remoteVideo["srcObject"] = _0x58762d),
                remoteVideo[_0x1ea131(0x1b2)]("playsinline", ""),
                remoteVideo["setAttribute"](_0x1ea131(0x1b6), ""),
                remoteVideo[_0x1ea131(0x199)](_0x1ea131(0x1a5), () => {
                  const _0x4a3e17 = _0x1ea131;
                  remoteVideo[_0x4a3e17(0x1ad)]();
                });
            });
        }),
        (reportBtn[_0x539226(0x196)] = _0x539226(0x189)),
        (reportBtn[_0x539226(0x196)][_0x539226(0x19c)] = "auto"),
        reportBtn[_0x539226(0x199)](_0x539226(0x17b), () => {
          const _0x5a0d51 = _0x539226;
          loadModal(_0x5a0d51(0x1c3));
        }),
        sendReportBtn[_0x539226(0x199)]("click", () => {
          const _0x4af221 = _0x539226;
          (flags[_0x299643[_0x4af221(0x1a2)]] = Date[_0x4af221(0x1b3)]()),
            localStorage[_0x4af221(0x1dd)](
              "flags",
              JSON[_0x4af221(0x19a)](flags)
            );
          const _0x28a3d7 = {
            userId: _0x299643[_0x4af221(0x18f)],
            flagger: teleId,
          };
          socket[_0x4af221(0x1c4)](_0x4af221(0x1cd), _0x28a3d7),
            loadModal(""),
            _0x709da2(),
            _0x59dbfe();
        }));
    });
    function _0x457650() {
      const _0x169816 = _0x5981b5;
      (sendBtn[_0x169816(0x196)] = _0x169816(0x187)),
        (sendBtn[_0x169816(0x196)]["pointerEvents"] = _0x169816(0x171)),
        (remoteId = null),
        call !== null &&
          call !== undefined &&
          (call[_0x169816(0x167)](), call == null),
        remoteVideo["srcObject"] !== null &&
          remoteVideo !== undefined &&
          (remoteVideo[_0x169816(0x1b4)] = null);
    }
    function _0x709da2() {
      const _0x8ce357 = _0x5981b5;
      (reportBtn[_0x8ce357(0x196)] = _0x8ce357(0x187)),
        (reportBtn[_0x8ce357(0x196)][_0x8ce357(0x19c)] = _0x8ce357(0x171));
      const _0x107078 = { remoteId: remoteId, userId: socket["id"] };
      if (remoteId !== null)
        socket[_0x8ce357(0x1c4)](_0x8ce357(0x1b8), _0x107078);
    }
    window[_0x5981b5(0x199)]("beforeunload", () => {
      _0x709da2(), _0x457650(), socket["disconnect"]();
    });
  });
  function loadModal(_0x3b97c7) {
    const _0x47ac78 = _0x32280e,
      _0x216f2e =
        document[_0x47ac78(0x175)][_0x47ac78(0x1a1)]["split"]("/")[0x0];
    if (_0x216f2e[_0x47ac78(0x161)]("#")) {
      const _0x5195ec = _0x216f2e["split"]("#");
      window[_0x47ac78(0x175)][_0x47ac78(0x1d7)](
        _0x5195ec[0x0] + "#" + _0x3b97c7
      );
    } else window["location"][_0x47ac78(0x1d7)](_0x216f2e + "#" + _0x3b97c7);
  }
  function showMsg(_0x249cf4) {
    const _0x363b2f = _0x32280e;
    (popMsg[_0x363b2f(0x183)] = _0x249cf4), loadModal(_0x363b2f(0x1ab));
  }
  function formatWalletAddress(
    _0x9f7ef7,
    _0x1765be = 0x6,
    _0x458db9 = 0x4,
    _0x4eccc4 = _0x32280e(0x1ce)
  ) {
    const _0x27a1f5 = _0x32280e;
    if (_0x9f7ef7[_0x27a1f5(0x15f)] <= _0x1765be + _0x458db9) return _0x9f7ef7;
    return (
      "" +
      _0x9f7ef7[_0x27a1f5(0x17e)](0x0, _0x1765be) +
      _0x4eccc4 +
      _0x9f7ef7[_0x27a1f5(0x17e)](-_0x458db9)
    );
  }
  function toComma(_0x434547) {
    const _0x57981d = _0x32280e;
    return _0x434547[_0x57981d(0x181)]()["replace"](
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }
}
