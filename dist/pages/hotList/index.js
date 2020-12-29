require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/hotList/index"],{

/***/ "./src/pages/hotList/index.css?modules":
/*!*********************************************!*\
  !*** ./src/pages/hotList/index.css?modules ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"outside":"outside___53O--","wrapper":"wrapper___3Irce","ListUrl":"ListUrl___2B_vQ","word":"word___1jihQ","logo":"logo___2L0D7","title":"title___30RUS","titleLogo":"titleLogo___1rc5l","titleWord":"titleWord___gTMxv","titleDes":"titleDes___3Fb_z","share":"share___1USKR","under":"under___3Irp8","upNav":"upNav___2gxXd","underUrl":"underUrl___35E9c","underWord":"underWord___3nFfb","underSmallWord":"underSmallWord___Y1Hys","songsList":"songsList___24WRz","song":"song___2woMd","songIndex":"songIndex___m7JzZ","songContext":"songContext___lCmtM","songName":"songName___1HDue","tagIcon":"tagIcon___1HzjP","songSinger":"songSinger___2OArH","songPlay":"songPlay____DZG-"};

/***/ }),

/***/ "./src/pages/hotList/index.entry.js":
/*!******************************************!*\
  !*** ./src/pages/hotList/index.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/hotList/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/hotList/index'));

/***/ }),

/***/ "./src/pages/hotList/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/hotList/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _component_nav_bar_navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/nav-bar/navBar */ "./src/component/nav-bar/navBar.tsx");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/icons */ "./src/common/icons.ts");
/* harmony import */ var _common_request_requestUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/request/requestUrl */ "./src/common/request/requestUrl.tsx");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/hotList/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_6__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ __webpack_exports__["default"] = (function (params) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      listDetail = _React$useState2[0],
      setListDetail = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    avatarUrl: ""
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      creators = _React$useState4[0],
      setCreators = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    coverImgUrl: "",
    name: "",
    description: ""
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      topList = _React$useState6[0],
      setTopList = _React$useState6[1];

  var id = params.location.query.id;

  var getAllDetail = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var _yield$getTopListSong, playlist, tracks, creator;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_5__["getTopListSong"])(id);

            case 2:
              _yield$getTopListSong = _context.sent;
              playlist = _yield$getTopListSong.playlist;
              tracks = playlist.tracks;
              creator = playlist.creator;
              setListDetail(tracks);
              setCreators(creator);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAllDetail(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var topUrl = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _yield$getTopList, list, listDetail;

      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_common_request_requestUrl__WEBPACK_IMPORTED_MODULE_5__["getTopList"])();

            case 2:
              _yield$getTopList = _context2.sent;
              list = _yield$getTopList.list;
              listDetail = list.find(function (item) {
                return item.id == id;
              });
              console.log("listDetail", listDetail);
              setTopList(listDetail);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function topUrl() {
      return _ref2.apply(this, arguments);
    };
  }();

  var toSongs = function toSongs(id, name) {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: "/pages/songs/index?id=" + id + "&name=" + name
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    getAllDetail(id);
    topUrl();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["outside"],
    style: {
      backgroundImage: "url(".concat(topList.coverImgUrl, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_nav_bar_navBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "\u6B4C\u5355",
    isIcon: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["wrapper"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["ListUrl"],
    src: topList.coverImgUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["word"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["title"]
  }, topList.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["logo"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["titleLogo"],
    src: creators.avatarUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["titleWord"]
  }, "\u7F51\u6613\u4E91\u97F3\u4E50")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["titleDes"]
  }, topList.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["share"]
  }, "\u5206\u4EAB\u7ED9\u5FAE\u4FE1\u597D\u53CB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["under"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["upNav"],
    onTap: function onTap() {
      return listDetail.length > 0 ? toSongs(listDetail[0].id, listDetail[0].name) : null;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["underUrl"],
    src: _common_icons__WEBPACK_IMPORTED_MODULE_4__["play"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["underWord"]
  }, "\u64AD\u653E\u5168\u90E8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["underSmallWord"]
  }, "\uFF08\u5171\u4E00\u767E\u9996\uFF09")), listDetail.length > 0 ? listDetail.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["songsList"],
      onTap: function onTap() {
        return toSongs(item.id, item.name);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["song"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["songIndex"]
    }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["songContext"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["songName"]
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["tagIcon"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_4__["sq"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["songSinger"]
    }, item.ar.map(function (item, index) {
      return index > 0 ? "/".concat(item.name) : "".concat(item.name);
    }), "-", item.al.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6__["songPlay"],
      src: _common_icons__WEBPACK_IMPORTED_MODULE_4__["play"]
    })));
  }) : null));
});

/***/ })

},[["./src/pages/hotList/index.entry.js","runtime","remax-vendors","remax-styles"]]]);