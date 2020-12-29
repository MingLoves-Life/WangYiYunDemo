require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/songs/index"],{

/***/ "./src/pages/songs/index.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/songs/index.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"backGround":"backGround___JWVt2","bg":"bg___1xPc7","song":"song___3upJy","logo":"logo___3rl3M","block":"block___2lUgw","play":"play___12D2l","vinyl":"vinyl___P-QRU","pic":"pic___2kE1P","picRotate":"picRotate___6RcyC","playIcon":"playIcon___3oKDL","lyricOut":"lyricOut___1ibs8","lyric":"lyric____Xhkv","lyricMove":"lyricMove___32Fxx","lyricList":"lyricList___3z-Jj","lyricListCho":"lyricListCho___lfvsw","viewLyric":"viewLyric___3wiAi","share":"share___3TdwA","like":"like___1bO0x","key":"key___2aAPe","keyPlay":"keyPlay___3KTZT","words":"words___lezhK","likeSong":"likeSong___20lc1","likeSongUrl":"likeSongUrl___1AjwV","likeSongContext":"likeSongContext___qsLZ3","likeSongName":"likeSongName___uDSfI","likeSongSinger":"likeSongSinger___2ogJK","likeSongPlay":"likeSongPlay___5jgR_","comment":"comment___28eja","message":"message___1HFhz","messageUrl":"messageUrl___2XrJJ","messageContext":"messageContext___3TGGb","messageName":"messageName___2xVn6","messageTime":"messageTime___1v_w8","messageGood":"messageGood___YLPtF","likedCount":"likedCount___2ohEv","likedIcon":"likedIcon___2kWdY","detail":"detail___IX-Ig","bottom":"bottom___3k6lZ"};

/***/ }),

/***/ "./src/pages/songs/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/songs/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/songs/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/songs/index'));

/***/ }),

/***/ "./src/pages/songs/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/songs/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _component_nav_bar_navBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/nav-bar/navBar */ "./src/component/nav-bar/navBar.tsx");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/icons */ "./src/common/icons.ts");
/* harmony import */ var _common_request_requestUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/request/requestUrl */ "./src/common/request/requestUrl.tsx");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/songs/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_7__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var audioCtx = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_3__["createInnerAudioContext"])("mp3");
/* harmony default export */ __webpack_exports__["default"] = (function (params) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      detail = _React$useState2[0],
      setDetail = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lrc = _React$useState4[0],
      setLrc = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      simiSongs = _React$useState6[0],
      setSimiSongs = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      hotComments = _React$useState8[0],
      setHotComments = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      translate = _React$useState10[0],
      setTranslate = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      playIcon = _React$useState12[0],
      setPlayIcon = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      rotateDeg = _React$useState14[0],
      setRotateDeg = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      row = _React$useState16[0],
      setRow = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      scrollTop = _React$useState18[0],
      setScrollTop = _React$useState18[1];

  var lyricDom = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  var dealLrc = function dealLrc(lrc) {
    var regAll = /\[.*/g;
    var reg = /(?<=(\]))(.)+/g;
    var regTime = /(?<=\:).+(?=\])/g;
    var regMinTime = /(?<=\[0)./g;
    var lrcAll = lrc.match(regAll);
    var lrcObj = [];
    lrcAll.map(function (item, index) {
      var time = Number(item.match(regTime));
      var lyric = item.match(reg);
      var minTime = Number(item.match(regMinTime));
      lrcObj[index] = {
        time: minTime * 60 + time,
        lyric: lyric
      };
    });
    setLrc(lrcObj);
  };

  var toSongs = function toSongs(id, name) {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: "/pages/songs/index?id=" + id + "&name=" + name
    });
  };

  var audioDeal = function audioDeal(src) {
    audioCtx.src = src;
    audioCtx.play();
    var children = lyricDom.current.children;
    var len = children.length;
    audioCtx.onPlay(function () {
      setPlayIcon(false);
      setRotateDeg(true);
      var duration = audioCtx.duration;
    });
    audioCtx.onPause(function () {
      setPlayIcon(true);
      setRotateDeg(false);
    });
    audioCtx.onTimeUpdate(function () {
      var duration = audioCtx.duration;
      var currentTime = audioCtx.currentTime;
      setTranslate(duration);

      var deal = function deal() {
        for (var i = 0; i < len; i++) {
          if (children[i].props.id > currentTime) {
            return i - 1;
          }
        }
      };

      var rowNum = deal();

      if (rowNum > row) {
        var num = 120 - rowNum * 58;
        setScrollTop(num);
      }

      setRow(rowNum);
    });
  };

  var getSongSth = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$getSongDetail, songs, _yield$getSongLyric, lrc, result, simiSongs, _yield$getSongUrl, data;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_6__["getSongDetail"])(params.location.query.id);

            case 2:
              _yield$getSongDetail = _context.sent;
              songs = _yield$getSongDetail.songs;
              _context.next = 6;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_6__["getSongLyric"])(params.location.query.id);

            case 6:
              _yield$getSongLyric = _context.sent;
              lrc = _yield$getSongLyric.lrc;
              _context.next = 10;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_6__["getSongCommont"])(params.location.query.id);

            case 10:
              result = _context.sent;
              _context.next = 13;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_6__["getSimiSong"])(params.location.query.id);

            case 13:
              simiSongs = _context.sent;
              _context.next = 16;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_6__["getSongUrl"])(params.location.query.id);

            case 16:
              _yield$getSongUrl = _context.sent;
              data = _yield$getSongUrl.data;
              dealLrc(lrc.lyric);
              setDetail(songs[0]);
              setSimiSongs(simiSongs.songs);
              setHotComments(result.hotComments.length ? result.hotComments : result.comments);
              audioDeal(data[0].url);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getSongSth() {
      return _ref.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    getSongSth();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["backGround"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_nav_bar_navBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: params.location.query.name,
    isIcon: true
  }), Object.keys(detail).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Audio"], {
    id: "mp3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["bg"],
    src: detail.al.picUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["song"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["logo"]
  }, "\u7F51\u6613\u4E91\u97F3\u4E50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["block"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["play"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["vinyl"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["pic"],
    style: {
      backgroundImage: "url(".concat(detail.al.picUrl, ")"),
      animationPlayState: rotateDeg ? "running" : "paused"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: playIcon ? _common_icons__WEBPACK_IMPORTED_MODULE_5__["play"] : _common_icons__WEBPACK_IMPORTED_MODULE_5__["pause"],
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["playIcon"],
    onTap: function onTap() {
      return !playIcon ? audioCtx.pause() : audioCtx.play();
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["lyricOut"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["lyric"],
    ref: lyricDom,
    style: {
      top: row === 0 ? "120px" : "".concat(scrollTop, "px")
    },
    id: "lyric"
  }, lrc.length > 0 ? lrc.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: row === index ? _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["lyricListCho"] : _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["lyricList"],
      id: item.time,
      style: {
        visibility: !item.lyric ? "hidden" : null
      }
    }, item.lyric === null ? "空" : item.lyric);
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["share"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, "\u5206\u4EAB\u7ED9\u5FAE\u4FE1\u597D\u53CB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["like"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeToo"]
  }, "\u559C\u6B22\u8FD9\u9996\u6B4C\u7684\u4EBA\u4E5F\u542C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["key"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["keyPlay"],
    src: _common_icons__WEBPACK_IMPORTED_MODULE_5__["play"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["words"],
    onTap: function onTap() {
      return simiSongs.length ? toSongs(simiSongs[0].id, simiSongs[0].name) : null;
    }
  }, "\u4E00\u952E\u6536\u542C"))), simiSongs.length ? simiSongs.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeSong"],
      onTap: function onTap() {
        return toSongs(item.id, item.name);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeSongUrl"],
      src: item.album.blurPicUrl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeSongContext"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeSongName"]
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeSongSinger"]
    }, item.artists[0].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likeSongPlay"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_5__["play"]
    })));
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["comment"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, "\u7CBE\u5F69\u8BC4\u8BBA"), hotComments.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, hotComments.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["message"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["messageUrl"],
      src: item.user.avatarUrl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["messageContext"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["messageName"]
    }, item.user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["messageTime"]
    }, item.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["messageGood"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likedCount"]
    }, item.likedCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["likedIcon"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_5__["zan"]
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["detail"]
    }, item.content));
  })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_7__["bottom"]
  }, "\u4E0B\u8F7D\u4E91\u97F3\u4E50\u67E5\u770B\u66F4\u591A\u7CBE\u5F69\u8BC4\u8BBA")) : null));
});

/***/ })

},[["./src/pages/songs/index.entry.js","runtime","remax-vendors","remax-styles"]]]);