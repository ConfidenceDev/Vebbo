function _0x3b78(_0x42f0a9, _0x3f6433) {
  const _0x5c8413 = _0x5c84();
  return (
    (_0x3b78 = function (_0x3b7841, _0x111b11) {
      _0x3b7841 = _0x3b7841 - 0x198;
      let _0x6975fb = _0x5c8413[_0x3b7841];
      return _0x6975fb;
    }),
    _0x3b78(_0x42f0a9, _0x3f6433)
  );
}
const _0x10b975 = _0x3b78;
(function (_0x4c90b4, _0x4709ec) {
  const _0x2b14a9 = _0x3b78,
    _0x5ca5ba = _0x4c90b4();
  while (!![]) {
    try {
      const _0x1ad34f =
        (-parseInt(_0x2b14a9(0x1d3)) / 0x1) *
          (parseInt(_0x2b14a9(0x208)) / 0x2) +
        (parseInt(_0x2b14a9(0x1c3)) / 0x3) *
          (-parseInt(_0x2b14a9(0x1cf)) / 0x4) +
        (-parseInt(_0x2b14a9(0x1b9)) / 0x5) *
          (-parseInt(_0x2b14a9(0x1e0)) / 0x6) +
        -parseInt(_0x2b14a9(0x1bc)) / 0x7 +
        parseInt(_0x2b14a9(0x214)) / 0x8 +
        parseInt(_0x2b14a9(0x19c)) / 0x9 +
        parseInt(_0x2b14a9(0x203)) / 0xa;
      if (_0x1ad34f === _0x4709ec) break;
      else _0x5ca5ba["push"](_0x5ca5ba["shift"]());
    } catch (_0x5c4134) {
      _0x5ca5ba["push"](_0x5ca5ba["shift"]());
    }
  }
})(_0x5c84, 0xc24f7);
if (window[_0x10b975(0x1d7)] <= 0x400) {
  const url = _0x10b975(0x1c0),
    tg = window[_0x10b975(0x205)][_0x10b975(0x1ef)];
  tg[_0x10b975(0x1f5)]();
  const tonConnectUI = new TON_CONNECT_UI[_0x10b975(0x1a0)]({
      manifestUrl: url + "/tcm.json",
    }),
    socket = io(url),
    isLocal = ![],
    okBtn = document[_0x10b975(0x1fe)](_0x10b975(0x21b)),
    reportBtn = document[_0x10b975(0x1fe)]("report-btn"),
    sendReportBtn = document[_0x10b975(0x1fe)]("send-report"),
    loader = document[_0x10b975(0x1fe)](_0x10b975(0x210)),
    onlineContainer = document[_0x10b975(0x1fe)](_0x10b975(0x19f)),
    onlineCount = document[_0x10b975(0x1fe)]("online-count"),
    remoteVideo = document[_0x10b975(0x1fe)]("remote-video"),
    localVideo = document[_0x10b975(0x1fe)](_0x10b975(0x1fb)),
    noteContent = document[_0x10b975(0x1fe)](_0x10b975(0x1ee)),
    noteBtn = document[_0x10b975(0x1fe)]("note-btn"),
    noteField = document[_0x10b975(0x1fe)]("note-field"),
    noteCount = document[_0x10b975(0x1fe)](_0x10b975(0x1c9)),
    walletLabel = document["getElementById"](_0x10b975(0x1cc)),
    walletBtn = document["getElementById"](_0x10b975(0x1e6)),
    disconnectBtn = document["getElementById"]("disconnect"),
    chatList = document[_0x10b975(0x1fe)](_0x10b975(0x1ce)),
    chatField = document["getElementById"](_0x10b975(0x201)),
    sendBtn = document[_0x10b975(0x1fe)]("send-btn"),
    startStopBtn = document[_0x10b975(0x1fe)](_0x10b975(0x1ae)),
    nextBtn = document[_0x10b975(0x1fe)]("next"),
    store = _0x10b975(0x1e5);
  let walletConnected = ![];
  (chatField[_0x10b975(0x1d1)] = !![]),
    (nextBtn[_0x10b975(0x1f1)] = _0x10b975(0x217)),
    (nextBtn[_0x10b975(0x1f1)][_0x10b975(0x21a)] = _0x10b975(0x1e8));
  let remoteId = null,
    call = null,
    teleId = null,
    flags = {};
  !localStorage[_0x10b975(0x1cb)]("start") && loadModal(_0x10b975(0x1d5));
  okBtn[_0x10b975(0x1c2)](_0x10b975(0x200), () => {
    const _0xc8f416 = _0x10b975;
    localStorage[_0xc8f416(0x209)]("start", !![]), loadModal("");
  });
  const constraints = { audio: !![], video: !![] },
    stream =
      navigator["getUserMedia"] ||
      navigator[_0x10b975(0x1b1)] ||
      navigator[_0x10b975(0x1dc)] ||
      navigator[_0x10b975(0x20b)];
  stream(constraints, onsuccess, onerror);
  function onsuccess(_0x3de495) {
    const _0x2ddb40 = _0x10b975;
    (window["stream"] = _0x3de495),
      (localVideo["srcObject"] = _0x3de495),
      localVideo[_0x2ddb40(0x1c2)](_0x2ddb40(0x1df), () => {
        localVideo["play"]();
      });
  }
  function onerror(_0x309da9) {
    const _0x21b279 = _0x10b975;
    console[_0x21b279(0x1dd)](
      "navigator.getUserMedia\x20error:\x20",
      _0x309da9
    );
  }
  socket["on"](_0x10b975(0x1eb), () => {
    const _0x49e6c4 = _0x10b975;
    socket["on"](_0x49e6c4(0x1f6), (_0x151ef6) => {
      const _0x16282d = _0x49e6c4;
      console["log"](_0x151ef6);
      const _0x309a7f = new Peer(socket["id"], {
        host: isLocal ? _0x16282d(0x1d8) : _0x16282d(0x1da),
        port: isLocal ? 0xbb8 : 0x1bb,
        path: _0x16282d(0x19a),
        secure: !isLocal,
        config: { iceServers: _0x151ef6 },
      });
      _0x309a7f["on"](_0x16282d(0x1ff), () => {}),
        socket["on"](_0x16282d(0x1c6), (_0x58f802) => {
          teleId = _0x58f802;
        }),
        socket["on"](_0x16282d(0x1ca), (_0x31c8c1) => {
          const _0x38abba = _0x16282d;
          noteContent[_0x38abba(0x1e9)] = _0x31c8c1;
        }),
        socket["on"](_0x16282d(0x219), (_0x581add) => {
          const _0x2fcd4e = _0x16282d;
          onlineCount[_0x2fcd4e(0x1e9)] = toComma(_0x581add);
        }),
        socket["on"]("flagged", (_0x521f66) => {
          const _0x3b0921 = _0x16282d;
          (flags[_0x521f66[_0x3b0921(0x1a6)]] = Date[_0x3b0921(0x204)]()),
            localStorage["setItem"](
              _0x3b0921(0x19e),
              JSON[_0x3b0921(0x1a9)](flags)
            );
        });
      async function _0xed8236() {
        const _0x816c13 = _0x16282d;
        try {
          const _0x7b5c59 = localStorage["getItem"](store);
          (flags = JSON[_0x816c13(0x1a2)](
            localStorage[_0x816c13(0x1cb)](_0x816c13(0x19e))
          )),
            _0x7b5c59
              ? ((walletLabel[_0x816c13(0x1e9)] =
                  _0x816c13(0x1a4) + formatWalletAddress(_0x7b5c59)),
                (walletConnected = !![]),
                (walletBtn["innerText"] = _0x816c13(0x20a)),
                (disconnectBtn["style"] = "display:\x20flex;"))
              : _0x16f2f8();
        } catch (_0x57c0ce) {
          console[_0x816c13(0x20f)]("Wallet\x20Load\x20Error:", _0x57c0ce),
            _0x16f2f8();
        }
      }
      function _0x16f2f8() {
        const _0x54e5f1 = _0x16282d;
        (walletLabel[_0x54e5f1(0x1e9)] = _0x54e5f1(0x19d)),
          localStorage[_0x54e5f1(0x1af)](store),
          (walletBtn[_0x54e5f1(0x1e9)] = _0x54e5f1(0x1d4)),
          (walletConnected = ![]),
          (disconnectBtn["style"] = _0x54e5f1(0x1b0));
      }
      disconnectBtn[_0x16282d(0x1c2)](_0x16282d(0x200), async () => {
        const _0x266963 = _0x16282d;
        await tonConnectUI[_0x266963(0x1a5)](), _0x16f2f8();
      }),
        noteField["addEventListener"](_0x16282d(0x1bf), (_0x474264) => {
          const _0x5488ce = _0x16282d,
            _0xbe087a = _0x474264[_0x5488ce(0x1c1)],
            _0x5b93e4 = _0xbe087a[_0x5488ce(0x1db)][_0x5488ce(0x1bd)];
          noteCount[_0x5488ce(0x1e9)] = _0x5b93e4 + _0x5488ce(0x1b2);
        }),
        walletBtn[_0x16282d(0x1c2)](_0x16282d(0x200), async (_0x517601) => {
          const _0x2e5206 = _0x16282d;
          _0x517601[_0x2e5206(0x213)](), (walletBtn[_0x2e5206(0x1d1)] = !![]);
          try {
            if (!walletConnected) {
              if (localStorage[_0x2e5206(0x1cb)](store))
                await tonConnectUI[_0x2e5206(0x1a5)]();
              const _0x5daef5 = await tonConnectUI[_0x2e5206(0x1ad)]();
              if (!_0x5daef5 || !_0x5daef5[_0x2e5206(0x1b6)]) {
                walletBtn[_0x2e5206(0x1d1)] = ![];
                throw new Error(_0x2e5206(0x1f7));
              }
              const _0x1a2a0c = _0x5daef5[_0x2e5206(0x1b6)][_0x2e5206(0x1a8)],
                _0x1a0162 = await fetch(url + _0x2e5206(0x1bb), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON[_0x2e5206(0x1a9)]({ address: _0x1a2a0c }),
                }),
                _0x2948cb = await _0x1a0162[_0x2e5206(0x20d)]();
              (walletLabel[_0x2e5206(0x1e9)] =
                _0x2e5206(0x1a4) +
                formatWalletAddress(_0x2948cb[_0x2e5206(0x1e5)])),
                (walletConnected = !![]),
                localStorage["setItem"](store, _0x2948cb[_0x2e5206(0x1e5)]),
                (walletBtn[_0x2e5206(0x1e9)] = _0x2e5206(0x20a)),
                (walletBtn[_0x2e5206(0x1d1)] = ![]),
                (disconnectBtn[_0x2e5206(0x1f1)] = _0x2e5206(0x206));
            } else {
              const _0x4cb8af = noteField["value"];
              if (!_0x4cb8af || _0x4cb8af[_0x2e5206(0x1db)] == "") {
                tg["showAlert"](_0x2e5206(0x1ea));
                return;
              }
              const _0x3758e5 = await fetch(url + _0x2e5206(0x1c5)),
                _0xc422d = await _0x3758e5[_0x2e5206(0x20d)]();
              if (_0xc422d) {
                await tonConnectUI[_0x2e5206(0x202)](
                  _0xc422d[_0x2e5206(0x1cd)]
                );
                const _0x443ed2 = await fetch(url + _0x2e5206(0x211), {
                  method: _0x2e5206(0x1c7),
                  headers: { "Content-Type": _0x2e5206(0x1f4) },
                  body: JSON[_0x2e5206(0x1a9)]({ noteText: _0x4cb8af }),
                });
                await _0x443ed2[_0x2e5206(0x20d)](),
                  (noteField[_0x2e5206(0x1db)] = null),
                  (noteCount[_0x2e5206(0x1e9)] = _0x2e5206(0x1ed)),
                  socket["emit"](_0x2e5206(0x1ca)),
                  loadModal(""),
                  tg[_0x2e5206(0x215)](_0x2e5206(0x1fc));
              }
              walletBtn[_0x2e5206(0x1d1)] = ![];
            }
          } catch (_0x4bacbf) {
            (walletBtn[_0x2e5206(0x1d1)] = ![]),
              console[_0x2e5206(0x20f)](_0x2e5206(0x1e2), _0x4bacbf),
              tg[_0x2e5206(0x215)](_0x4bacbf),
              _0x16f2f8();
          }
        }),
        noteBtn[_0x16282d(0x1c2)](_0x16282d(0x200), (_0xdbb539) => {
          const _0x5801a5 = _0x16282d;
          _0xdbb539[_0x5801a5(0x213)](),
            _0xed8236(),
            loadModal(_0x5801a5(0x20e));
        }),
        socket["on"](_0x16282d(0x218), (_0x1424d1) => {
          const _0x1dd2ef = _0x16282d;
          let _0x5efb23 = document[_0x1dd2ef(0x1c4)]("li");
          _0x3dee78(_0x1424d1, _0x5efb23),
            (chatList["scrollTop"] = chatList[_0x1dd2ef(0x1ec)]);
        });
      function _0x3dee78(_0x4bfac9, _0x37b8b0) {
        const _0x2799b7 = _0x16282d;
        _0x4bfac9[_0x2799b7(0x1ba)] !== null &&
          (_0x4bfac9[_0x2799b7(0x1f3)] !== socket["id"]
            ? (_0x37b8b0[_0x2799b7(0x1e3)] =
                _0x2799b7(0x1fa) + _0x4bfac9[_0x2799b7(0x1ba)] + "</p>")
            : (_0x37b8b0[_0x2799b7(0x1e3)] =
                _0x2799b7(0x212) +
                _0x4bfac9[_0x2799b7(0x1ba)] +
                _0x2799b7(0x21c)),
          chatList[_0x2799b7(0x1d0)](_0x37b8b0));
      }
      sendBtn[_0x16282d(0x1c2)](_0x16282d(0x200), (_0x431946) => {
        const _0x3300df = _0x16282d;
        _0x431946[_0x3300df(0x213)]();
        if (
          chatField[_0x3300df(0x1db)] !== null &&
          chatField[_0x3300df(0x1db)] !== ""
        ) {
          const _0x11b026 = {
            remoteId: remoteId,
            userId: socket["id"],
            msg: chatField[_0x3300df(0x1db)],
          };
          socket[_0x3300df(0x1d2)](_0x3300df(0x218), _0x11b026),
            (chatField[_0x3300df(0x1db)] = null);
        }
      }),
        chatField[_0x16282d(0x1c2)](_0x16282d(0x1c8), (_0x27b32b) => {
          const _0x55e7a0 = _0x16282d;
          (_0x27b32b[_0x55e7a0(0x19b)] === _0x55e7a0(0x1f2) ||
            _0x27b32b[_0x55e7a0(0x1f9)] === 0xd) &&
            (_0x27b32b[_0x55e7a0(0x213)](), sendBtn[_0x55e7a0(0x200)]());
        }),
        startStopBtn[_0x16282d(0x1c2)](_0x16282d(0x200), (_0x35f984) => {
          const _0xc4dc7b = _0x16282d;
          _0x35f984[_0xc4dc7b(0x213)](),
            startStopBtn[_0xc4dc7b(0x1e9)] === _0xc4dc7b(0x1e7)
              ? (_0x16e40b(),
                (nextBtn[_0xc4dc7b(0x1f1)] = _0xc4dc7b(0x1b7)),
                (nextBtn[_0xc4dc7b(0x1f1)][_0xc4dc7b(0x21a)] =
                  _0xc4dc7b(0x1de)),
                (startStopBtn[_0xc4dc7b(0x1e9)] = "Stop"))
              : (_0x56de5f(),
                _0xa9d6c3(),
                _0xdaf3b(),
                (chatList["innerHTML"] = ""),
                (nextBtn[_0xc4dc7b(0x1f1)] = "opacity:\x20.4;"),
                (nextBtn["style"][_0xc4dc7b(0x21a)] = _0xc4dc7b(0x1e8)),
                (loader[_0xc4dc7b(0x1f1)] = _0xc4dc7b(0x1b0)),
                (onlineContainer[_0xc4dc7b(0x1f1)] = _0xc4dc7b(0x206)),
                (chatField[_0xc4dc7b(0x1d1)] = !![]),
                (startStopBtn[_0xc4dc7b(0x1e9)] = _0xc4dc7b(0x1e7)),
                (startStopBtn[_0xc4dc7b(0x1f1)] = _0xc4dc7b(0x1b7))),
            (reportBtn[_0xc4dc7b(0x1f1)] = _0xc4dc7b(0x217)),
            (reportBtn[_0xc4dc7b(0x1f1)][_0xc4dc7b(0x21a)] = _0xc4dc7b(0x1e8));
        }),
        nextBtn[_0x16282d(0x1c2)](_0x16282d(0x200), (_0x3bf2af) => {
          const _0x902a90 = _0x16282d;
          _0x3bf2af[_0x902a90(0x213)](), _0x56de5f(), _0x12bd90();
        }),
        socket["on"]("leave", () => {
          _0x12bd90();
        });
      function _0x12bd90() {
        const _0x387ae6 = _0x16282d;
        (chatList[_0x387ae6(0x1e3)] = ""),
          (chatField[_0x387ae6(0x1d1)] = !![]),
          _0xdaf3b(),
          _0x16e40b();
      }
      function _0x16e40b() {
        const _0x4e7f3c = _0x16282d;
        (onlineContainer[_0x4e7f3c(0x1f1)] = _0x4e7f3c(0x1b0)),
          (loader[_0x4e7f3c(0x1f1)] = _0x4e7f3c(0x206));
        const _0x180571 = {
          teleId: teleId,
          userId: socket["id"],
          flags: flags,
        };
        socket[_0x4e7f3c(0x1d2)](_0x4e7f3c(0x1d6), _0x180571);
      }
      function _0xa9d6c3() {
        const _0x1ce25f = _0x16282d,
          _0x3601b9 = { userId: socket["id"] };
        socket[_0x1ce25f(0x1d2)](_0x1ce25f(0x1ab), _0x3601b9);
      }
      socket["on"](_0x16282d(0x1fd), (_0x205ed2) => {
        const _0x3db0a6 = _0x16282d;
        _0x205ed2[_0x3db0a6(0x1f3)] !== socket["id"] &&
          ((loader[_0x3db0a6(0x1f1)] = _0x3db0a6(0x1b0)),
          (chatField[_0x3db0a6(0x1d1)] = ![]),
          (sendBtn[_0x3db0a6(0x1f1)] = _0x3db0a6(0x1b7)),
          (sendBtn[_0x3db0a6(0x1f1)]["pointerEvents"] = "auto"),
          (remoteId = _0x205ed2[_0x3db0a6(0x1f3)]),
          (call = _0x309a7f[_0x3db0a6(0x21d)](
            remoteId,
            window[_0x3db0a6(0x1a3)]
          )),
          call["on"](_0x3db0a6(0x1a3), (_0x4a7941) => {
            const _0x17937c = _0x3db0a6;
            (remoteVideo[_0x17937c(0x207)] = _0x4a7941),
              remoteVideo["setAttribute"]("playsinline", ""),
              remoteVideo["setAttribute"](_0x17937c(0x1f0), ""),
              remoteVideo[_0x17937c(0x1c2)]("loadedmetadata", () => {
                const _0x552477 = _0x17937c;
                remoteVideo[_0x552477(0x1be)]();
              });
          }),
          call["on"]("close", () => {
            const _0x713be5 = _0x3db0a6;
            remoteVideo[_0x713be5(0x207)] = null;
          }),
          _0x309a7f["on"](_0x3db0a6(0x21d), (_0x4092ee) => {
            const _0x4fb99b = _0x3db0a6;
            _0x4092ee[_0x4fb99b(0x199)](window[_0x4fb99b(0x1a3)]),
              _0x4092ee["on"](_0x4fb99b(0x1a3), (_0xf85b5a) => {
                const _0x4dc2c9 = _0x4fb99b;
                (remoteVideo["srcObject"] = _0xf85b5a),
                  remoteVideo[_0x4dc2c9(0x1e1)](_0x4dc2c9(0x1ac), ""),
                  remoteVideo[_0x4dc2c9(0x1e1)](_0x4dc2c9(0x1f0), ""),
                  remoteVideo[_0x4dc2c9(0x1c2)](_0x4dc2c9(0x1df), () => {
                    const _0x5d08f4 = _0x4dc2c9;
                    remoteVideo[_0x5d08f4(0x1be)]();
                  });
              });
          }),
          (reportBtn[_0x3db0a6(0x1f1)] = _0x3db0a6(0x1b7)),
          (reportBtn["style"][_0x3db0a6(0x21a)] = _0x3db0a6(0x1de)),
          reportBtn[_0x3db0a6(0x1c2)](_0x3db0a6(0x200), () => {
            const _0x212075 = _0x3db0a6;
            loadModal(_0x212075(0x1b3));
          }),
          sendReportBtn[_0x3db0a6(0x1c2)]("click", () => {
            const _0x323ff4 = _0x3db0a6;
            (flags[_0x205ed2[_0x323ff4(0x1b4)]] = Date[_0x323ff4(0x204)]()),
              localStorage["setItem"](
                _0x323ff4(0x19e),
                JSON["stringify"](flags)
              );
            const _0x382b9e = {
              userId: _0x205ed2[_0x323ff4(0x1f3)],
              flagger: teleId,
            };
            socket[_0x323ff4(0x1d2)](_0x323ff4(0x1d9), _0x382b9e),
              loadModal(""),
              _0x56de5f(),
              _0x12bd90();
          }));
      });
      function _0xdaf3b() {
        const _0x10592e = _0x16282d;
        (sendBtn[_0x10592e(0x1f1)] = _0x10592e(0x217)),
          (sendBtn[_0x10592e(0x1f1)]["pointerEvents"] = _0x10592e(0x1e8)),
          (remoteId = null),
          call !== null &&
            call !== undefined &&
            (call[_0x10592e(0x216)](), call == null),
          remoteVideo["srcObject"] !== null &&
            remoteVideo !== undefined &&
            (remoteVideo[_0x10592e(0x207)] = null);
      }
      function _0x56de5f() {
        const _0x18d53f = _0x16282d;
        (reportBtn[_0x18d53f(0x1f1)] = _0x18d53f(0x217)),
          (reportBtn[_0x18d53f(0x1f1)][_0x18d53f(0x21a)] = _0x18d53f(0x1e8));
        const _0xcbc575 = { remoteId: remoteId, userId: socket["id"] };
        if (remoteId !== null) socket[_0x18d53f(0x1d2)]("leave", _0xcbc575);
      }
      window["Telegram"][_0x16282d(0x1ef)][_0x16282d(0x1b5)](
        _0x16282d(0x216),
        () => {
          _0x56de5f(), _0xdaf3b(), socket["disconnect"]();
        }
      ),
        window[_0x16282d(0x1c2)](_0x16282d(0x1f8), () => {
          const _0x159141 = _0x16282d;
          _0x56de5f(), _0xdaf3b(), socket[_0x159141(0x1a5)]();
        });
    });
  });
  function loadModal(_0x99fbea) {
    const _0x490982 = _0x10b975,
      _0x51f638 =
        document[_0x490982(0x198)]["href"][_0x490982(0x1a1)]("/")[0x0];
    if (_0x51f638[_0x490982(0x1a7)]("#")) {
      const _0x33a8ce = _0x51f638[_0x490982(0x1a1)]("#");
      window["location"][_0x490982(0x1e4)](_0x33a8ce[0x0] + "#" + _0x99fbea);
    } else
      window[_0x490982(0x198)][_0x490982(0x1e4)](_0x51f638 + "#" + _0x99fbea);
  }
  function showMsg(_0x364d83) {
    const _0x5f3835 = _0x10b975;
    (popMsg[_0x5f3835(0x1e9)] = _0x364d83), loadModal(_0x5f3835(0x1aa));
  }
  function formatWalletAddress(
    _0x5f2e85,
    _0x217c40 = 0x6,
    _0x1f89a7 = 0x4,
    _0x58cb9c = _0x10b975(0x1b8)
  ) {
    const _0x481285 = _0x10b975;
    if (_0x5f2e85["length"] <= _0x217c40 + _0x1f89a7) return _0x5f2e85;
    return (
      "" +
      _0x5f2e85[_0x481285(0x20c)](0x0, _0x217c40) +
      _0x58cb9c +
      _0x5f2e85[_0x481285(0x20c)](-_0x1f89a7)
    );
  }
  function toComma(_0x1d1ec3) {
    return _0x1d1ec3["toString"]()["replace"](/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
function _0x5c84() {
  const _0x53b6d8 = [
    "value",
    "mozGetUserMedia",
    "log",
    "auto",
    "loadedmetadata",
    "3096dRsdpx",
    "setAttribute",
    "Wallet\x20Connection\x20Error:",
    "innerHTML",
    "assign",
    "wallet",
    "wallet-btn",
    "Start",
    "none",
    "innerText",
    "Write\x20a\x20note",
    "connect",
    "scrollHeight",
    "0/1024",
    "note-content",
    "WebApp",
    "autoplay",
    "style",
    "Enter",
    "userId",
    "application/json",
    "expand",
    "tns",
    "Wallet\x20connection\x20failed.",
    "beforeunload",
    "keyCode",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22msg\x22><span\x20class=\x22other\x22>User:\x20</span>",
    "local-video",
    "Note\x20published\x20✅",
    "found",
    "getElementById",
    "open",
    "click",
    "chat-field",
    "sendTransaction",
    "18703520yMSynd",
    "now",
    "Telegram",
    "display:\x20flex;",
    "srcObject",
    "3370oOEqdC",
    "setItem",
    "Publish\x20|\x200.1\x20Ton",
    "msGetUserMedia",
    "slice",
    "json",
    "popup_note",
    "error",
    "loader",
    "/note",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22msg\x22><span\x20class=\x22you\x22>You:\x20</span>",
    "preventDefault",
    "12365976UtugVQ",
    "showAlert",
    "close",
    "opacity:\x20.4;",
    "chat",
    "online",
    "pointerEvents",
    "ok-btn",
    "</p>",
    "call",
    "location",
    "answer",
    "/peerjs",
    "key",
    "4157640AkqECN",
    "Wallet:\x20Not\x20connected",
    "flags",
    "online-container",
    "TonConnectUI",
    "split",
    "parse",
    "stream",
    "Wallet:\x20",
    "disconnect",
    "flagger",
    "includes",
    "address",
    "stringify",
    "popup_msg",
    "remove",
    "playsinline",
    "connectWallet",
    "start-stop",
    "removeItem",
    "display:\x20none;",
    "webkitGetUserMedia",
    "/1024",
    "popup_report",
    "teleId",
    "onEvent",
    "account",
    "opacity:\x201;",
    "xxxxxxxxx",
    "275XgtEJm",
    "msg",
    "/toWallet",
    "10407852hjSwAP",
    "length",
    "play",
    "input",
    "https://vebbo.onrender.com",
    "currentTarget",
    "addEventListener",
    "3CWygVw",
    "createElement",
    "/notepay",
    "start",
    "POST",
    "keyup",
    "note-count",
    "note",
    "getItem",
    "walletLabel",
    "obj",
    "chat-list",
    "5814092egGeWu",
    "appendChild",
    "disabled",
    "emit",
    "101SYpPXl",
    "Connect\x20Wallet",
    "popup_start",
    "peer",
    "innerWidth",
    "localhost",
    "flag",
    "vebbo.onrender.com",
  ];
  _0x5c84 = function () {
    return _0x53b6d8;
  };
  return _0x5c84();
}
