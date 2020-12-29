require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/search/index"],{

/***/ "./src/pages/search/hotSong/hotSong.tsx":
/*!**********************************************!*\
  !*** ./src/pages/search/hotSong/hotSong.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/search/hotSong/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (params) {
  var songList = params.songList,
      _onTap = params.onTap,
      onClick = params.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["searchPage"],
    onTap: function onTap() {
      return _onTap();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], null, songList.length !== 0 ? "热搜榜" : null), songList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["item"],
      onTap: function onTap() {
        return onClick(item.searchWord);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["index"]
    }, " ", index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["word"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], null, item.searchWord, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["icon"],
      src: item.iconUrl
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["content"]
    }, item.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2__["score"]
    }, item.score));
  }));
});

/***/ }),

/***/ "./src/pages/search/hotSong/index.css?modules":
/*!****************************************************!*\
  !*** ./src/pages/search/hotSong/index.css?modules ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"searchPage":"searchPage___2jKrD","item":"item___2mFFq","index":"index___3YaqY","word":"word___3s2EB","icon":"icon___1JGpp","content":"content___2K69-","score":"score___3DtBy"};

/***/ }),

/***/ "./src/pages/search/index.entry.js":
/*!*****************************************!*\
  !*** ./src/pages/search/index.entry.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/search/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/search/index'));

/***/ }),

/***/ "./src/pages/search/index.tsx":
/*!************************************!*\
  !*** ./src/pages/search/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _component_input_searchSong__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/input/searchSong */ "./src/component/input/searchSong.tsx");
/* harmony import */ var _component_nav_bar_navBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/nav-bar/navBar */ "./src/component/nav-bar/navBar.tsx");
/* harmony import */ var _common_request_requestUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/request/requestUrl */ "./src/common/request/requestUrl.tsx");
/* harmony import */ var _hotSong_hotSong__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotSong/hotSong */ "./src/pages/search/hotSong/hotSong.tsx");
/* harmony import */ var _searchSong_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchSong/index */ "./src/pages/search/searchSong/index.tsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isHot = _React$useState2[0],
      setIsHot = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isSearch = _React$useState4[0],
      setIsSearch = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      songList = _React$useState6[0],
      setSongList = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      searchSongList = _React$useState8[0],
      setSearchSongList = _React$useState8[1];

  var getList = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$getSearchHot, data;

    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_5__["getSearchHot"])();

          case 2:
            _yield$getSearchHot = _context.sent;
            data = _yield$getSearchHot.data;
            setSongList(data.slice(0, 20));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var toSearchSong = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
      var _yield$getSearchSong, result;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsHot(false);
              setIsSearch(true);
              _context2.next = 4;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_5__["getSearchSong"])(value);

            case 4:
              _yield$getSearchSong = _context2.sent;
              result = _yield$getSearchSong.result;
              setSearchSongList(result.songs);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function toSearchSong(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_nav_bar_navBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "\u641C\u7D22",
    isIcon: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_input_searchSong__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onInput: function onInput() {
      return getList();
    },
    onConfirm: function onConfirm(value) {
      return toSearchSong(value);
    }
  })), isHot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_hotSong_hotSong__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onTap: getList,
    songList: songList,
    onClick: toSearchSong
  }) : null, isSearch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_searchSong_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    searchSongList: searchSongList
  }) : null);
});

/***/ }),

/***/ "./src/pages/search/searchSong/index.css?modules":
/*!*******************************************************!*\
  !*** ./src/pages/search/searchSong/index.css?modules ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"searchSongList":"searchSongList___r2iJx","item":"item___1Tv6Q","songName":"songName___3j-1-","singer":"singer___3syVX","tagIcon":"tagIcon___2octB","icon":"icon___3Y2CL","play":"play___1Itm3"};

/***/ }),

/***/ "./src/pages/search/searchSong/index.tsx":
/*!***********************************************!*\
  !*** ./src/pages/search/searchSong/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/icons */ "./src/common/icons.ts");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/search/searchSong/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (params) {
  var searchSongList = params.searchSongList;

  var goToSongs = function goToSongs(params) {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/songs/index?id=" + params.id + "&name=" + params.name
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["searchSongList"]
  }, searchSongList.map(function (item) {
    var _item$privilege;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["item"],
      onTap: function onTap() {
        return goToSongs({
          id: item.id,
          name: item.name
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["songName"]
    }, item.name), item.fee === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["tagIcon"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_2__["vip"]
    }) : null, ((_item$privilege = item.privilege) === null || _item$privilege === void 0 ? void 0 : _item$privilege.flag) < 69 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["tagIcon"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_2__["cr"]
    }) : null, item.privilege.maxbr === 999000 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["tagIcon"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_2__["sq"]
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["singer"]
    }, item.ar[0].name, "-", item.al.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["icon"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3__["play"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_2__["playIconWhite"]
    })));
  }));
});

/***/ })

},[["./src/pages/search/index.entry.js","runtime","remax-vendors","remax-styles"]]]);