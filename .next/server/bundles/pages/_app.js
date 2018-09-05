module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/primer-colors/colors.json":
/***/ (function(module, exports) {

module.exports = {"black":"#1b1f23","white":"#fff","gray":["#fafbfc","#f6f8fa","#e1e4e8","#d1d5da","#959da5","#6a737d","#586069","#444d56","#2f363d","#24292e"],"blue":["#f1f8ff","#dbedff","#c8e1ff","#79b8ff","#2188ff","#0366d6","#005cc5","#044289","#032f62","#05264c"],"green":["#f0fff4","#dcffe4","#bef5cb","#85e89d","#34d058","#28a745","#22863a","#176f2c","#165c26","#144620"],"yellow":["#fffdef","#fffbdd","#fff5b1","#ffea7f","#ffdf5d","#ffd33d","#f9c513","#dbab09","#b08800","#735c0f"],"orange":["#fff8f2","#ffebda","#ffd1ac","#ffab70","#fb8532","#f66a0a","#e36209","#d15704","#c24e00","#a04100"],"red":["#ffeef0","#ffdce0","#fdaeb7","#f97583","#ea4a5a","#d73a49","#cb2431","#b31d28","#9e1c23","#86181d"],"purple":["#f5f0ff","#e6dcfd","#d1bcf9","#b392f0","#8a63d2","#6f42c1","#5a32a3","#4c2889","#3a1d6e","#29134e"]}

/***/ }),

/***/ "./node_modules/primer-typography/typography.json":
/***/ (function(module, exports) {

module.exports = {"fontSizes":[12,14,16,20,24,32,40,48],"lineHeights":{"condensedUltra":1,"condensed":1.25,"default":1.5}}

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mdx_docs__ = __webpack_require__("mdx-docs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mdx_docs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mdx_docs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src__ = __webpack_require__("./src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doc_components__ = __webpack_require__("./pages/doc-components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doc_components_SideNav__ = __webpack_require__("./pages/doc-components/SideNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doc_components_Header__ = __webpack_require__("./pages/doc-components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__doc_components_theme__ = __webpack_require__("./pages/doc-components/theme.js");

var _jsxFileName = "/Users/emplums/primer-react/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Box = __WEBPACK_IMPORTED_MODULE_5__src__["Box"],
    FlexContainer = __WEBPACK_IMPORTED_MODULE_5__src__["FlexContainer"];
var iconsObject = Object.keys(__WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__["iconsByName"]).reduce(function (map, key) {
  map[__WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__["iconsByName"][key].name] = __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__["iconsByName"][key];
  return map;
}, {});

var components = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_5__src__, __WEBPACK_IMPORTED_MODULE_6__doc_components__, {
  Octicon: __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react___default.a
}, iconsObject);

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          page = _props.page;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_mdx_docs__["Layout"], {
        components: components,
        routes: [],
        theme: __WEBPACK_IMPORTED_MODULE_9__doc_components_theme__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__doc_components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FlexContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__doc_components_SideNav__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Box, {
        maxWidth: 1012,
        my: 6,
        mx: 'auto',
        px: 6,
        className: "markdown-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, page;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                page = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                page = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  page: page
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

MyApp.displayName = "MyApp";


/***/ }),

/***/ "./pages/components/docs/Avatar.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Avatar.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Avatar'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Avatar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "<Avatar src=\"https://avatars.githubusercontent.com/primer?v=3&s=128\" size={128} username=\"primer\" />\n")));
});

/***/ }),

/***/ "./pages/components/docs/BorderBox.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/BorderBox.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'BorderBox'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "BorderBox"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<BorderBox>This is a BorderBox</BorderBox>\n<BorderBox p={2}>This is a BorderBox with padding.</BorderBox>\n<BorderBox boxShadow=\"small\" m={4} p={2}>This is a BorderBox with shadow.</BorderBox>\n<BorderBox boxShadow=\"medium\" m={4} p={2}>This is a BorderBox with a medium shadow.</BorderBox>\n<BorderBox boxShadow=\"large\" m={4} p={2}>This is a BorderBox with a large shadow.</BorderBox>\n<BorderBox boxShadow=\"extra-large\" m={4} p={2}>This is a BorderBox with an extra-large shadow.</BorderBox>\n<BorderBox borderColor=\"green.5\" p={2}>This is a BorderBox with a green border.</BorderBox>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__("./src/index.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Box.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable import/no-named-as-default-member */



var Mono = function Mono(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["Text"], _extends({
    fontFamily: "mono"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

Mono.displayName = "Mono";

var colors = _toConsumableArray(Object.entries(__WEBPACK_IMPORTED_MODULE_1__src__["theme"].colors)).reduce(function (keys, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  if (key !== 'bg' && key !== 'border') {
    if (Array.isArray(value)) {
      return keys.concat(Object.keys(value).map(function (i) {
        return "".concat(key, ".").concat(i);
      }));
    } else {
      keys.push(key);
    }
  }

  return keys;
}, []);

var textColors = ['white', 'gray.5', 'black'];
function BoxExample() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["Box"], {
    pb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "color")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    colSpan: textColors.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Mono, {
    pb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "bg=", "{color}")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Mono, {
    pb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "borderColor")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, colors.map(function (color) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
      key: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Mono, {
      mr: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, color)), textColors.map(function (fg) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        key: fg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["Box"], {
        p: 3,
        mb: 2,
        bg: color,
        color: fg,
        border: color === 'white' ? 1 : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Mono, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, fg)));
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["Box"], {
      p: 3,
      mb: 2,
      ml: 3,
      borderColor: color,
      border: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Mono, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, color))));
  }))));
}
BoxExample.displayName = "BoxExample";
var meta = {
  displayName: 'Box'
};

/***/ }),

/***/ "./pages/components/docs/BranchName.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/BranchName.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'BranchName'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "BranchName"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<BranchName>a_new_feature_branch</BranchName>\n\n<ExampleHeading mt={3}>BranchName with Octicon</ExampleHeading>\n<BranchName>\n  <Octicon icon={GitBranch} />\n  a_new_feature_branch\n</BranchName>\n\n<ExampleHeading mt={3}>Linked BranchName</ExampleHeading>\n<BranchName is=\"a\" href=\"/\">\n  a_new_feature_branch\n</BranchName>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Buttons.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Buttons.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Buttons'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Buttons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<FlexContainer flexDirection=\"column\" alignItems=\"start\" >\n  <Button> Button </Button>\n\n  <Button size=\"sm\"> Button small </Button>\n\n  <Button size=\"large\"> Button large </Button>\n\n  <ButtonDanger> ButtonDanger </ButtonDanger>\n\n  <ButtonPrimary> ButtonPrimary </ButtonPrimary>\n\n  <ButtonOutline> ButtonOutline </ButtonOutline>\n\n  <Button block> Button block </Button>\n\n  <Button linkStyle> Button linkStyle </Button>\n  <ButtonLink href=\"https://www.goatslive.com/\">This is an {'<a>'} styled as a button</ButtonLink>\n\n  <ExampleHeading>Octicon Buttons</ExampleHeading>\n\n  <OcticonButton icon={Pencil} label=\"Edit\" onClick={() => alert('edit')} mr={3} />\n\n  <Text color=\"red.5\"><OcticonButton icon={X} label=\"Close\" onClick={() => alert('close')} mr={3} /></Text>\n\n  <OcticonButton icon={Hubot} size=\"large\" label=\"ROBOT\" onClick={() => alert('beep boop')} />\n</FlexContainer>\n")));
});

/***/ }),

/***/ "./pages/components/docs/CircleBadge.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/CircleBadge.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'CircleBadge'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "CircleBadge"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Heading fontSize={3}>Small, medium & large</Heading>\n<CircleBadge bg=\"blue.5\" size=\"small\"><img src=\"https://avatars0.githubusercontent.com/t/1929972?s=280&v=4\"/></CircleBadge>\n<CircleBadge bg=\"blue.5\" size=\"medium\"><img src=\"https://avatars0.githubusercontent.com/t/1929972?s=280&v=4\"/></CircleBadge>\n<CircleBadge bg=\"blue.5\" size=\"large\"><img src=\"https://avatars0.githubusercontent.com/t/1929972?s=280&v=4\"/></CircleBadge>\n\n<Heading fontSize={3}>With custom width & height</Heading>\n<CircleBadge bg=\"blue.5\" size={40}><img src=\"https://avatars0.githubusercontent.com/t/1929972?s=280&v=4\"/></CircleBadge>\n\n<Heading fontSize={3}>{`With <img> as a child & bg prop`}</Heading>\n<CircleBadge bg=\"blue.5\" size=\"small\"><img src=\"https://avatars0.githubusercontent.com/t/1929972?s=280&v=4\"/></CircleBadge>\n\n<Heading fontSize={3}>With Octicon as child</Heading>\n<CircleBadge size=\"medium\">\n  <Octicon icon={Zap}/>\n</CircleBadge>\n")));
});

/***/ }),

/***/ "./pages/components/docs/CircleOcticon.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/CircleOcticon.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'CircleOcticon'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "CircleOcticon"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<FlexContainer>\n  <CircleOcticon icon={Check} size={32} bg=\"green.5\" color=\"white\" mr={2} />\n  <CircleOcticon icon={Zap} size={48} bg=\"blue.5\" color=\"white\" mr={2} />\n  <CircleOcticon icon={X} size={64} bg=\"red.5\" color=\"white\" mr={2} />\n</FlexContainer>\n")));
});

/***/ }),

/***/ "./pages/components/docs/CounterLabel.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/CounterLabel.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'CounterLabel'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "CounterLabel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<CounterLabel>12</CounterLabel>\n<CounterLabel scheme={'gray'}>13</CounterLabel>\n<CounterLabel scheme={'gray-light'}>13</CounterLabel>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Details.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Details.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Details'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<ExampleHeading>With static children</ExampleHeading>\n\n<Details>\n  <summary className=\"btn\">Click me</summary>\n  <p>This should show and hide</p>\n</Details>\n\n\n<ExampleHeading>With children as a function</ExampleHeading>\n\n<Details>\n  {({open, toggle}) => (\n    <React.Fragment>\n      <summary className=\"btn\" onClick={toggle}>\n        {open ? 'Hide' : 'Show'}\n      </summary>\n      <p>This should show and hide</p>\n    </React.Fragment>\n  )}\n</Details>\n\n<ExampleHeading>With render prop</ExampleHeading>\n<Details render={() => 'hi'} />\n")));
});

/***/ }),

/***/ "./pages/components/docs/DonutChart.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/DonutChart.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'DonutChart'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "DonutChart"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Box mb={2}>\n  <ExampleHeading>\n    With <Text fontFamily=\"mono\">data</Text> prop\n  </ExampleHeading>\n\n  <DonutChart mr={1} data={{error: 2, pending: 3, success: 5}} />\n  <DonutChart mr={1} data={{error: 1, pending: 4, success: 2}} />\n  <DonutChart mr={1} data={{pending: 2, success: 6}} />\n  <DonutChart mr={1} data={{pending: 0, success: 1}} />\n  <DonutChart mr={1} data={{pending: 1, queued: 1}} />\n  <DonutChart mr={1} data={{unknown: 1}} />\n</Box>\n<Box mb={2}>\n  <ExampleHeading>\n    With <Text fontFamily=\"mono\">DonutSlice</Text> children\n  </ExampleHeading>\n\n  <DonutChart mr={1}>\n    <DonutSlice value={1} state=\"pending\" />\n    <DonutSlice value={1} state=\"success\" />\n    <DonutSlice value={1} state=\"error\" />\n  </DonutChart>\n\n  <DonutChart mr={1}>\n    <DonutSlice value={1} state=\"error\" />\n    <DonutSlice value={4} state=\"pending\" />\n    <DonutSlice value={2} state=\"success\" />\n  </DonutChart>\n\n  <DonutChart mr={1}>\n    <DonutSlice value={2} state=\"pending\" />\n    <DonutSlice value={6} state=\"success\" />\n  </DonutChart>\n\n  <DonutChart mr={1}>\n    <DonutSlice value={0} state=\"pending\" />\n    <DonutSlice value={1} state=\"success\" />\n  </DonutChart>\n\n  <DonutChart mr={1}>\n    <DonutSlice value={1} state=\"pending\" />\n    <DonutSlice value={1} state=\"queued\" />\n  </DonutChart>\n\n  <DonutChart>\n    <DonutSlice value={1} state=\"queued\" />\n  </DonutChart>\n</Box>\n\n<Box mb={2}>\n  <ExampleHeading>\n    With <Text fontFamily=\"mono\">DonutSlice</Text> children\n  </ExampleHeading>\n\n  <DonutChart>\n    <DonutSlice value={1} fill={theme.colors.purple[0]} />\n    <DonutSlice value={1} fill={theme.colors.purple[1]} />\n    <DonutSlice value={1} fill={theme.colors.purple[2]} />\n    <DonutSlice value={1} fill={theme.colors.purple[3]} />\n    <DonutSlice value={1} fill={theme.colors.purple[4]} />\n  </DonutChart>\n</Box>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Dropdown.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Dropdown.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Dropdown'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Dropdown"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Box mb={4}>\n  <ExampleHeading>Dropdown Primary</ExampleHeading>\n  <Dropdown scheme=\"primary\" minWidth=\"5em\">\n    <Box is=\"ul\" m={0} p={0} className=\"list-style-none\">\n      <li>Item 1</li>\n      <li>Item 2</li>\n      <li>Item 3</li>\n    </Box>\n  </Dropdown>\n</Box>\n\n<Box mb={4}>\n  <ExampleHeading>Dropdown</ExampleHeading>\n  <Dropdown minWidth=\"5em\">\n    <Box is=\"ul\" m={0} p={0} className=\"list-style-none\">\n      <li>Item 1</li>\n      <li>Item 2</li>\n      <li>Item 3</li>\n    </Box>\n  </Dropdown>\n</Box>\n\n<Box mb={4}>\n  <ExampleHeading>Dropdown with title</ExampleHeading>\n  <Dropdown title=\"Options\" minWidth=\"5em\">\n    <Box is=\"ul\" m={0} p={0} className=\"list-style-none\">\n      <li>Item 1</li>\n      <li>Item 2</li>\n      <li>Item 3</li>\n    </Box>\n  </Dropdown>\n</Box>\n")));
});

/***/ }),

/***/ "./pages/components/docs/FilterList.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/FilterList.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'FilterList'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "FilterList"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<FilterList>\n  <FilterListItem selected count='32' href='#foo'>First Filter</FilterListItem>\n  <FilterListItem count='2' href='#bar'>Second Filter</FilterListItem>\n  <FilterListItem href='#baz'>Third Filter</FilterListItem>\n</FilterList>\n\n<ExampleHeading>Small</ExampleHeading>\n<FilterList small>\n  <FilterListItem selected count='32' href='#foo'>First Filter</FilterListItem>\n  <FilterListItem href='#bar'>Second Filter</FilterListItem>\n  <FilterListItem href='#baz'>Third Filter</FilterListItem>\n</FilterList>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Flash.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Flash.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Flash'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Flash"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Flash m={4}> Flash </Flash>\n<Flash m={4} scheme=\"yellow\"> Flash yellow </Flash>\n<Flash m={4} scheme=\"red\"> Flash red </Flash>\n<Flash m={4} scheme=\"green\"> Flash green </Flash>\n<Flash m={4} full> Flash full </Flash>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Flex.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Flex.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Flex'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "FlexContainer and FlexItem"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<ExampleHeading mt={3}>FlexContainer + FlexItems</ExampleHeading>\n<BorderBox width={300} height={300} borderRadius={0}>\n  <FlexContainer flexWrap=\"nowrap\">\n    <FlexItem>\n      <Box p={3} bg=\"blue.5\">\n        Item 1\n      </Box>\n    </FlexItem>\n    <FlexItem>\n      <Box p={3} bg=\"green.5\">\n        Item 2\n      </Box>\n    </FlexItem>\n    <FlexItem>\n      <Box p={3} bg=\"yellow.5\">\n        Item 3\n      </Box>\n    </FlexItem>\n  </FlexContainer>\n</BorderBox>\n\n\n<ExampleHeading mt={2}>FlexContainer + FlexItems direction set to 'column'</ExampleHeading>\n<BorderBox width={400} height={200} borderRadius={0}>\n  <FlexContainer flexWrap=\"nowrap\" flexDirection='column'>\n    <FlexItem>\n      <Box p={3} bg=\"blue.5\">\n        Item 1\n      </Box>\n    </FlexItem>\n    <FlexItem>\n      <Box p={3} bg=\"green.5\">\n        Item 2\n      </Box>\n    </FlexItem>\n    <FlexItem>\n      <Box p={3} bg=\"yellow.5\">\n        Item 3\n      </Box>\n    </FlexItem>\n  </FlexContainer>\n</BorderBox>\n\n<ExampleHeading mt={2}>FlexContainer + FlexItems using tag prop set to \"p\"</ExampleHeading>\n<BorderBox width={400} height={200} borderRadius={0}>\n  <FlexContainer flexWrap=\"nowrap\">\n    <FlexItem is=\"p\">\n      <Box p={3} bg=\"blue.5\">\n        Item 1\n      </Box>\n    </FlexItem>\n    <FlexItem is=\"p\">\n      <Box p={3} bg=\"green.5\">\n        Item 2\n      </Box>\n    </FlexItem>\n    <FlexItem is=\"p\">\n      <Box p={3} bg=\"yellow.5\">\n        Item 3\n      </Box>\n    </FlexItem>\n  </FlexContainer>\n</BorderBox>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Heading.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Heading.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Heading'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Heading"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Heading fontSize={1} mb={2}>With fontSize={1}</Heading>\n<Heading fontSize={2} mb={2}>With fontSize={2}</Heading>\n<Heading fontSize={3} mb={2}>With fontSize={3}</Heading>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Label.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Label.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Label'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Label"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<FlexContainer flexDirection=\"column\" alignItems=\"start\">\n  <Label m={1}>Default label</Label>\n  <Label m={1} scheme=\"gray-darker\">Darker gray label</Label>\n  <Label m={1} scheme=\"orange\">Orange label</Label>\n  <Label m={1} scheme=\"green\">Green label</Label>\n  <Label m={1} outline>Default outline label</Label>\n  <Label m={1} outline scheme=\"green\">Green outline label</Label>\n</FlexContainer>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Link.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Link.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Link'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Link"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Link mb={1} href=\"https://github.com\">Link</Link>\n<Link mb={1} muted href=\"https://github.com\">Link muted</Link>\n<Link mb={1} scheme=\"gray\" href=\"https://github.com\">Link gray</Link>\n<Link mb={1} scheme=\"gray-dark\" href=\"https://github.com\">Link gray-dark</Link>\n")));
});

/***/ }),

/***/ "./pages/components/docs/MergeStatus.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/MergeStatus.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'MergeStatus'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "MergeStatus"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<FlexContainer flexDirection=\"column\" alignItems=\"start\">\n  <MergeStatus mb={2} state=\"pending\" />\n  <MergeStatus mb={2} state=\"invalid\" />\n  <MergeStatus mb={2} state=\"merged\" />\n  <MergeStatus mb={2} state=\"ready\" />\n</FlexContainer>\n")));
});

/***/ }),

/***/ "./pages/components/docs/PointerBox.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/PointerBox.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'PointerBox'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "PointerBox"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<PointerBox m={4} p={2} minHeight={100} bg=\"green.1\" borderColor=\"green.5\">\n  PointerBox\n</PointerBox>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Position.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Position.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Position'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Position Components"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Box p={2} mb={200}>\n  <ExampleHeading mb={2}>Relative + Absolute</ExampleHeading>\n  <Relative size={128} mx={128} my={6}>\n    <Box border={1} borderColor=\"gray.2\" size=\"100%\">\n      <Absolute left=\"100%\" top={0} bg=\"red.1\" p={1}>rt</Absolute>\n      <Absolute right=\"100%\" top={0} bg=\"green.1\" p={1}>lt</Absolute>\n      <Absolute left=\"100%\" bottom={0} bg=\"blue.1\" p={1}>rb</Absolute>\n      <Absolute right=\"100%\" bottom={0} bg=\"purple.1\" p={1}>lb</Absolute>\n      <Absolute left={0} top=\"100%\" bg=\"orange.1\" p={1}>bl</Absolute>\n      <Absolute right={0} top=\"100%\" bg=\"yellow.3\" p={1}>br</Absolute>\n      <Absolute left={0} bottom=\"100%\" bg=\"red.1\" p={1}>tl</Absolute>\n      <Absolute right={0} bottom=\"100%\" bg=\"blue.1\" p={1}>tr</Absolute>\n    </Box>\n  </Relative>\n\n  <ExampleHeading my={2}>Sticky</ExampleHeading>\n\n  <Box border={1} borderColor=\"green.5\" height={1000}>\n    <Sticky top={0} bg=\"green.2\" p={4}>\n      I'm sticky!\n    </Sticky>\n  </Box>\n\n  <ExampleHeading my={2}>Fixed</ExampleHeading>\n  <p>(see the bottom right of the screen)</p>\n\n  <Fixed bottom={0} right={0} bg=\"red.2\" p={2}>\n    I'm fixed to the bottom right.\n  </Fixed>\n</Box>\n")));
});

/***/ }),

/***/ "./pages/components/docs/StateLabel.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/StateLabel.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'StateLabel'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "StateLabel"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Box mb={2}>\n  <StateLabel state=\"open\">Open</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel state=\"closed\">Closed</StateLabel>\n</Box>\n<Box mb={4}>\n  <StateLabel state=\"merged\">Merged</StateLabel>\n</Box>\n\n<ExampleHeading>By state (Octicons built in)</ExampleHeading>\n<Box mb={2}>\n  <StateLabel>Unknown</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel state=\"open\">Open</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel state=\"closed\">Closed</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel state=\"merged\">Merged</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel state=\"reopened\">Reopened</StateLabel>\n</Box>\n\n<ExampleHeading>By color</ExampleHeading>\n<Box mb={2}>\n  <StateLabel scheme=\"invalid\">Invalid</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel scheme=\"green\">Green</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel scheme=\"red\">Red</StateLabel>\n</Box>\n<Box mb={2}>\n  <StateLabel scheme=\"purple\">Purple</StateLabel>\n</Box>\n\n<ExampleHeading>Small, by state</ExampleHeading>\n<Box mb={2}>\n  <StateLabel mr={2} small>Unknown</StateLabel>\n  <StateLabel mr={2} small state=\"open\">\n    Open\n  </StateLabel>\n  <StateLabel mr={2} small state=\"closed\">\n    Closed\n  </StateLabel>\n  <StateLabel mr={2} small state=\"merged\">\n    Merged\n  </StateLabel>\n  <StateLabel mr={2} small state=\"reopened\">\n    Reopened\n  </StateLabel>\n</Box>\n\n<ExampleHeading>Small, by color</ExampleHeading>\n<Box mb={2}>\n  <StateLabel mr={2} small scheme=\"invalid\">\n    Invalid\n  </StateLabel>\n  <StateLabel mr={2} small scheme=\"green\">\n    Green\n  </StateLabel>\n  <StateLabel mr={2} small scheme=\"red\">\n    Red\n  </StateLabel>\n  <StateLabel mr={2} small scheme=\"purple\">\n    Purple\n  </StateLabel>\n  <StateLabel mr={2} small scheme=\"green\" icon={<Octicon icon={GitBranch} />}>\n    Custom Octicon\n  </StateLabel>\n</Box>\n")));
});

/***/ }),

/***/ "./pages/components/docs/Text.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Text.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Text'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Text"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<Text is=\"div\">Text</Text>\n<Text is=\"div\" fontWeight=\"bold\">Text bold</Text>\n<Text is=\"div\" color=\"green.5\">Text green</Text>\n<Text is=\"div\" lineHeight=\"condensed\">Text lineHeight 'condensed'</Text>\n<Text is=\"div\" fontSize={4}>Text fontSize 4</Text>\n<Text is=\"div\" p={4}>Text padding 4</Text>\n")));
});

/***/ }),

/***/ "./pages/components/docs/TextInput.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/TextInput.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'TextInput'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "TextInput"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<TextInput name=\"zipcode\" />\n\n<ExampleHeading>Text Input Sizes</ExampleHeading>\n<TextInput name=\"zipcode\" size=\"small\" placeholder=\"Small input\" />\n<TextInput name=\"zipcode\" size=\"large\" placeholder=\"Large input\" />\n\n<ExampleHeading>Text Input - Block</ExampleHeading>\n<TextInput block placeholder=\"Full width block input\" />\n")));
});

/***/ }),

/***/ "./pages/components/docs/Tooltip.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/Tooltip.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'Tooltip'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Tooltip"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<ExampleHeading mt={3}>Basic Tooltip</ExampleHeading>\n<BorderBox p={3}>\n  <Tooltip text=\"Hello, Tooltip!\">Text with a tooltip</Tooltip>\n</BorderBox>\n\n<ExampleHeading mt={3}>Directions</ExampleHeading>\n{Tooltip.directions.map(dir => (\n  <BorderBox p={3} my={2} key=\"top\">\n    <Tooltip text=\"Hello, Tooltip!\" direction=\"${dir}\">\n      Tooltip direction=\"${dir}\"\n    </Tooltip>\n  </BorderBox>\n))}\n\n\n<ExampleHeading mt={3}>Word wrap</ExampleHeading>\n<BorderBox p={3} my={2}>\n  <Tooltip\n    text=\"Hello, Tooltip! This tooltip has a sentence that will wrap to a newline.\"\n    wrap\n    direction=\"ne\"\n    align=\"left\"\n  >\n    Word wrapping tooltip\n  </Tooltip>\n</BorderBox>\n\n<ExampleHeading mt={3}>Alignment</ExampleHeading>\n{Tooltip.alignments.map(align => (\n  <BorderBox p={3} my={2} key=\"${align}\">\n    <Tooltip text=\"Hello, Tooltip!\" direction=\"ne\" align=\"${align}\">\n      Tooltip align=\"${align}\"\n    </Tooltip>\n  </BorderBox>\n))}\n\n\n<ExampleHeading mt={3}>No Delay</ExampleHeading>\n<BorderBox p={3} my={2}>\n  <Tooltip noDelay text=\"Hello, Tooltip!\">\n    Text with a tooltip\n  </Tooltip>\n</BorderBox>`\n")));
});

/***/ }),

/***/ "./pages/components/docs/UnderlineNav.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("@mdx-js/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/emplums/primer-react/pages/components/docs/UnderlineNav.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var meta = {
  displayName: 'UnderlineNav'
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "UnderlineNav"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "language-.jsx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "<ExampleHeading>\n  Using <Text fontFamily=\"mono\">{'<UnderlineNavLink>'}</Text>\n</ExampleHeading>\n<UnderlineNav>\n  <UnderlineNavLink href=\"#foo\" selected>\n    Selected\n  </UnderlineNavLink>\n  <UnderlineNavLink href=\"#bar\">Bar</UnderlineNavLink>\n  <UnderlineNavLink href=\"#baz\">Baz</UnderlineNavLink>\n</UnderlineNav>\n")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "  To use UnderlineNav with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/ReactTraining/react-router"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "react-router"), " or\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.npmjs.com/package/react-router-dom"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "react-router-dom"), ", pass\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "is={NavLink}"), " and omit the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "selected"), " prop.\nThis ensures that the NavLink gets ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "activeClassName='selected'")));
});

/***/ }),

/***/ "./pages/components/docs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Avatar_md__ = __webpack_require__("./pages/components/docs/Avatar.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_0__Avatar_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BorderBox_md__ = __webpack_require__("./pages/components/docs/BorderBox.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BorderBox", function() { return __WEBPACK_IMPORTED_MODULE_1__BorderBox_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Box_js__ = __webpack_require__("./pages/components/docs/Box.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return __WEBPACK_IMPORTED_MODULE_2__Box_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BranchName_md__ = __webpack_require__("./pages/components/docs/BranchName.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BranchName", function() { return __WEBPACK_IMPORTED_MODULE_3__BranchName_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Buttons_md__ = __webpack_require__("./pages/components/docs/Buttons.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return __WEBPACK_IMPORTED_MODULE_4__Buttons_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CircleBadge_md__ = __webpack_require__("./pages/components/docs/CircleBadge.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CircleBadge", function() { return __WEBPACK_IMPORTED_MODULE_5__CircleBadge_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CircleOcticon_md__ = __webpack_require__("./pages/components/docs/CircleOcticon.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CircleOcticon", function() { return __WEBPACK_IMPORTED_MODULE_6__CircleOcticon_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CounterLabel_md__ = __webpack_require__("./pages/components/docs/CounterLabel.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CounterLabel", function() { return __WEBPACK_IMPORTED_MODULE_7__CounterLabel_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Details_md__ = __webpack_require__("./pages/components/docs/Details.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return __WEBPACK_IMPORTED_MODULE_8__Details_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DonutChart_md__ = __webpack_require__("./pages/components/docs/DonutChart.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return __WEBPACK_IMPORTED_MODULE_9__DonutChart_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Dropdown_md__ = __webpack_require__("./pages/components/docs/Dropdown.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_10__Dropdown_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FilterList_md__ = __webpack_require__("./pages/components/docs/FilterList.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FilterList", function() { return __WEBPACK_IMPORTED_MODULE_11__FilterList_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Flash_md__ = __webpack_require__("./pages/components/docs/Flash.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Flash", function() { return __WEBPACK_IMPORTED_MODULE_12__Flash_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Flex_md__ = __webpack_require__("./pages/components/docs/Flex.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return __WEBPACK_IMPORTED_MODULE_13__Flex_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Heading_md__ = __webpack_require__("./pages/components/docs/Heading.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return __WEBPACK_IMPORTED_MODULE_14__Heading_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Label_md__ = __webpack_require__("./pages/components/docs/Label.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_15__Label_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Link_md__ = __webpack_require__("./pages/components/docs/Link.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_16__Link_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MergeStatus_md__ = __webpack_require__("./pages/components/docs/MergeStatus.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeStatus", function() { return __WEBPACK_IMPORTED_MODULE_17__MergeStatus_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__PointerBox_md__ = __webpack_require__("./pages/components/docs/PointerBox.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PointerBox", function() { return __WEBPACK_IMPORTED_MODULE_18__PointerBox_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Position_md__ = __webpack_require__("./pages/components/docs/Position.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_19__Position_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__StateLabel_md__ = __webpack_require__("./pages/components/docs/StateLabel.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StateLabel", function() { return __WEBPACK_IMPORTED_MODULE_20__StateLabel_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Text_md__ = __webpack_require__("./pages/components/docs/Text.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_21__Text_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__TextInput_md__ = __webpack_require__("./pages/components/docs/TextInput.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_22__TextInput_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Tooltip_md__ = __webpack_require__("./pages/components/docs/Tooltip.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_23__Tooltip_md__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__UnderlineNav_md__ = __webpack_require__("./pages/components/docs/UnderlineNav.md");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlineNav", function() { return __WEBPACK_IMPORTED_MODULE_24__UnderlineNav_md__["a"]; });


























/***/ }),

/***/ "./pages/doc-components/ExampleHeading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__("./src/index.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/ExampleHeading.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ExampleHeading = function ExampleHeading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["Heading"], _extends({
    is: "h3",
    fontSize: 3,
    mb: 2
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

ExampleHeading.displayName = "ExampleHeading";
/* harmony default export */ __webpack_exports__["a"] = (ExampleHeading);

/***/ }),

/***/ "./pages/doc-components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__("./src/index.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/Header.js";





var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Sticky"], {
    zIndex: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["FlexContainer"], {
    p: 1,
    alignItems: "center",
    justifyContent: "space-between",
    bg: "black",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/components",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Link"], {
    className: "text-white",
    nounderline: true,
    href: "/components",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["FlexContainer"], {
    ml: 4,
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__githubprimer_octicons_react___default.a, {
    size: "medium",
    icon: __WEBPACK_IMPORTED_MODULE_1__githubprimer_octicons_react__["MarkGithub"],
    className: "mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Primer Components")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/components",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Button"], {
    linkStyle: true,
    color: "white",
    py: 3,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Docs")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/components/dev-mode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Button"], {
    linkStyle: true,
    color: "white",
    py: 3,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Dev mode")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/components/sandbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Button"], {
    linkStyle: true,
    color: "white",
    py: 3,
    mr: 0,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Sandbox")))));
};

Header.displayName = "Header";
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/doc-components/MergeActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("./src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MergeButton__ = __webpack_require__("./pages/doc-components/MergeButton.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/MergeActions.js";





var MergeActions = function MergeActions(_ref) {
  var numCommits = _ref.numCommits,
      onClick = _ref.onClick,
      desktopUrl = _ref.desktopUrl,
      state = _ref.state;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Box"], {
    py: 3,
    px: 4,
    bg: "gray.0",
    style: {
      borderBottomLeftRadius: '3px',
      borderBottomRightRadius: '3px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MergeButton__["a" /* default */], {
    primary: state === 'ready',
    numCommits: numCommits,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
    ml: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "You can also "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Link"], {
    nounderline: true,
    href: desktopUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "open this in Github Desktop"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, " or view "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["ButtonLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "command line instructions."));
};

MergeActions.displayName = "MergeActions";
MergeActions.propTypes = {
  desktopUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  numCommits: __WEBPACK_IMPORTED_MODULE_3__MergeButton__["a" /* default */].propTypes.numCommits,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (MergeActions);

/***/ }),

/***/ "./pages/doc-components/MergeBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("./src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MergeDetail__ = __webpack_require__("./pages/doc-components/MergeDetail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MergeActions__ = __webpack_require__("./pages/doc-components/MergeActions.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/MergeBox.js";





var stateColorMap = {
  ready: 'green.5',
  invalid: 'invalid',
  merged: 'purple.5',
  pending: 'yellow.5'
};

function getDesktopURL(repoUrl, branchName) {
  return "x-github-client://openRepo/".concat(repoUrl, "?branch=").concat(branchName);
}

var MergeBox = function MergeBox(_ref) {
  var state = _ref.state,
      repoUrl = _ref.repoUrl,
      branchName = _ref.branchName,
      numCommits = _ref.numCommits,
      onMerge = _ref.onMerge;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-flex flex-items-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["MergeStatus"], {
    state: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["PointerBox"], {
    ml: 3,
    borderColor: stateColorMap[state],
    caret: "left-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MergeDetail__["a" /* default */], {
    state: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__MergeActions__["a" /* default */], {
    state: state,
    numCommits: numCommits,
    desktopUrl: getDesktopURL(repoUrl, branchName),
    onClick: onMerge,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })));
};

MergeBox.displayName = "MergeBox";
MergeBox.propTypes = {
  branchName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  numCommits: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onMerge: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  repoUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['ready', 'invalid', 'merged', 'pending']).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (MergeBox);

/***/ }),

/***/ "./pages/doc-components/MergeButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("./src/index.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/MergeButton.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var MergeButton = function MergeButton(_ref) {
  var numCommits = _ref.numCommits,
      onClick = _ref.onClick,
      primary = _ref.primary;
  var arrowStyles = {
    content: '',
    border: '4px solid',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    width: '0',
    height: '0'
  };
  var borderStyles = {
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0'
  };
  var buttonSchemeProps = {};

  if (primary) {
    buttonSchemeProps.scheme = 'primary';
  }

  var commits = numCommits === 1 ? '1 commit' : "".concat(numCommits, " commits");
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "BtnGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Button"], _extends({}, buttonSchemeProps, {
    grouped: true,
    onClick: onClick,
    style: {
      borderRight: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), "Merge Pull Request"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Details"], {
    className: "details-reset d-flex float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, function (_ref2) {
    var toggle = _ref2.toggle;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Button"], _extends({
      is: "summary"
    }, buttonSchemeProps, {
      onClick: toggle,
      style: borderStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "d-inline-block v-align-middle",
      style: arrowStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Box"], {
      position: "absolute",
      width: 300,
      mt: 1,
      style: {
        zIndex: 99999
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["PointerBox"], {
      caret: "top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
      className: "list-style-none p-0 m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      className: "border-bottom py-2 pl-4 pr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
      is: "p",
      m: 0,
      fontSize: 1,
      fontWeight: "bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, "Create a merge commit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
      is: "p",
      m: 0,
      fontSize: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }, "All commits from this branch will be added to the base branch via a merge commit.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      className: "border-bottom py-2 pl-4 pr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
      is: "p",
      m: 0,
      fontSize: 1,
      fontWeight: "bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, "Squash and merge"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
      is: "p",
      m: 0,
      fontSize: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, "The ", commits, " from this branch will be combined into one commit in the base branch.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      className: "py-2 pl-4 pr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
      is: "p",
      m: 0,
      fontSize: 1,
      fontWeight: "bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }, "Rebase and merge"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
      is: "p",
      fontSize: 0,
      m: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, "The ", commits, " from this branch will be rebased and added to the base branch"))))));
  }));
};

MergeButton.displayName = "MergeButton";
MergeButton.defaultProps = {
  numCommits: 0
};
MergeButton.propTypes = {
  numCommits: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  primary: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (MergeButton);

/***/ }),

/***/ "./pages/doc-components/MergeDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__("./src/index.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/MergeDetail.js";




var stateColorMap = {
  ready: 'green.5',
  invalid: 'invalid',
  merged: 'purple.5',
  pending: 'yellow.5'
};

var MergeDetail = function MergeDetail(_ref) {
  var state = _ref.state;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "p-2 d-flex border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Box"], {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["CircleOcticon"], {
    icon: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["Check"],
    size: 32,
    bg: stateColorMap[state],
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Box"], {
    p: 2,
    display: "inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Text"], {
    is: "p",
    p: 0,
    m: 0,
    fontSize: 2,
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "This branch has no conflicts with the base branch"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["Text"], {
    is: "p",
    pt: 1,
    m: 0,
    fontSize: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Merging can be performed automatically")));
};

MergeDetail.displayName = "MergeDetail";
MergeDetail.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Object.keys(stateColorMap)).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (MergeDetail);

/***/ }),

/***/ "./pages/doc-components/SideNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("./src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_docs__ = __webpack_require__("./pages/components/docs/index.js");
var _jsxFileName = "/Users/emplums/primer-react/pages/doc-components/SideNav.js";





var SideNav = function SideNav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Relative"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Box"], {
    width: 248,
    bg: "gray.0",
    display: "inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["FlexContainer"], {
    flexDirection: "column",
    alignItems: "start",
    p: 5,
    borderBottom: 1,
    borderColor: "gray.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/components/docs/getting-started",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Link"], {
    scheme: "gray-dark",
    href: "/components/docs/getting-started",
    m: 0,
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Getting Started")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/components/docs/system-props",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Link"], {
    scheme: "gray-dark",
    href: "/components/docs/system-props",
    m: 0,
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "System Props")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/components/docs/primer-theme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Link"], {
    scheme: "gray-dark",
    href: "/components/docs/primer-theme",
    m: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Primer Theme"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Box"], {
    pt: 5,
    pl: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Text"], {
    fontWeight: "bold",
    is: "p",
    color: "black",
    m: 0,
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/components/docs/Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Link"], {
    nounderline: true,
    scheme: "gray-dark",
    href: "/components/docs/Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Components"))), Object.values(__WEBPACK_IMPORTED_MODULE_3__components_docs__).map(function (_ref) {
    var name = _ref.displayName;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Box"], {
      mb: 4,
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      href: "/components/docs/".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src__["Link"], {
      href: "/components/docs/".concat(name),
      ml: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, name)));
  }))));
};

SideNav.displayName = "SideNav";
/* harmony default export */ __webpack_exports__["a"] = (SideNav);

/***/ }),

/***/ "./pages/doc-components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MergeActions__ = __webpack_require__("./pages/doc-components/MergeActions.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeActions", function() { return __WEBPACK_IMPORTED_MODULE_0__MergeActions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MergeBox__ = __webpack_require__("./pages/doc-components/MergeBox.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeBox", function() { return __WEBPACK_IMPORTED_MODULE_1__MergeBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MergeButton__ = __webpack_require__("./pages/doc-components/MergeButton.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeButton", function() { return __WEBPACK_IMPORTED_MODULE_2__MergeButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MergeDetail__ = __webpack_require__("./pages/doc-components/MergeDetail.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeDetail", function() { return __WEBPACK_IMPORTED_MODULE_3__MergeDetail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ExampleHeading__ = __webpack_require__("./pages/doc-components/ExampleHeading.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHeading", function() { return __WEBPACK_IMPORTED_MODULE_4__ExampleHeading__["a"]; });






/***/ }),

/***/ "./pages/doc-components/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src__ = __webpack_require__("./src/index.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  font: __WEBPACK_IMPORTED_MODULE_0__src__["theme"].fonts.normal,

  /* figure out how to use our theme values here */
  LiveEditor: {
    whiteSpace: 'pre-wrap',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0__src__["theme"].colors.gray[1],
    color: __WEBPACK_IMPORTED_MODULE_0__src__["theme"].colors.black,
    fontFamily: __WEBPACK_IMPORTED_MODULE_0__src__["theme"].fonts.mono,
    padding: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].space[2], "px"),
    fontSize: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].fontSizes[1], "px"),
    borderBottomLeftRadius: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].radii[1], "px"),
    borderBottomRightRadius: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].radii[1], "px")
  },
  LivePreview: {
    textAlign: 'center',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0__src__["theme"].colors.gray[1],
    padding: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].space[4], "px"),
    borderTopLeftRadius: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].radii[1], "px"),
    borderTopRightRadius: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].radii[1], "px")
  },
  NavLink: {
    padding: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].space[4], " 0px"),
    fontSize: "".concat(__WEBPACK_IMPORTED_MODULE_0__src__["theme"].fontSizes[2], "px")
  },
  LayoutContainer: {
    padding: '0px',
    maxWidth: '100%'
  }
});

/***/ }),

/***/ "./src/Avatar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Avatar.js";





function Avatar(_ref) {
  var alt = _ref.alt,
      isChild = _ref.isChild,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size,
      src = _ref.src,
      className = _ref.className;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('avatar', {
    'avatar-small': size <= 24,
    'avatar-child': isChild
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: classes,
    alt: alt,
    src: src,
    width: size,
    height: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  });
}

Avatar.displayName = "Avatar";
Avatar.propTypes = {
  alt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  isChild: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  src: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Avatar, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/BorderBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_props__ = __webpack_require__("./src/system-props.js");

var BorderBox = Object(__WEBPACK_IMPORTED_MODULE_0__system_props__["h" /* withSystemProps */])({
  is: 'div',
  bg: 'white',
  border: 1,
  borderColor: 'gray.2',
  borderRadius: 1
}, __WEBPACK_IMPORTED_MODULE_0__system_props__["d" /* LAYOUT */]);
/* harmony default export */ __webpack_exports__["a"] = (BorderBox);

/***/ }),

/***/ "./src/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_props__ = __webpack_require__("./src/system-props.js");

var Box = Object(__WEBPACK_IMPORTED_MODULE_0__system_props__["h" /* withSystemProps */])('div', __WEBPACK_IMPORTED_MODULE_0__system_props__["d" /* LAYOUT */]);
/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "./src/BranchName.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/BranchName.js";





function BranchName(_ref) {
  var children = _ref.children,
      href = _ref.href,
      Tag = _ref.is,
      className = _ref.className;

  // We don't want someone to use href on a non tag
  if (Tag !== 'a') {
    href = null;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, {
    href: href,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('branch-name', className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, children);
}

BranchName.displayName = "BranchName";
BranchName.defaultProps = {
  is: 'a'
};
BranchName.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  is: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(BranchName, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Button.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






function Button(_ref) {
  var Tag = _ref.is,
      children = _ref.children,
      size = _ref.size,
      block = _ref.block,
      linkStyle = _ref.linkStyle,
      grouped = _ref.grouped,
      scheme = _ref.scheme,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["is", "children", "size", "block", "linkStyle", "grouped", "scheme", "onClick", "disabled", "className"]);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, {
    btn: !linkStyle,
    'btn-link': linkStyle,
    'btn-sm': size === 'sm',
    'btn-large': size === 'large',
    'btn-block': block,
    'BtnGroup-item': grouped
  }, scheme ? "btn-".concat(scheme) : null);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({}, rest, {
    type: "button",
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), children);
}

Button.displayName = "Button";
Button.defaultProps = {
  is: 'button'
};
Button.propTypes = {
  block: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  grouped: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  is: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['button', 'a', 'summary', 'input']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]),
  linkStyle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  scheme: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['sm', 'large'])
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Button, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/ButtonDanger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/Button.js");
var _jsxFileName = "/Users/emplums/primer-react/src/ButtonDanger.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ButtonDanger = function ButtonDanger(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Button__["a" /* default */], _extends({}, props, {
    scheme: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

ButtonDanger.displayName = "ButtonDanger";
/* harmony default export */ __webpack_exports__["a"] = (ButtonDanger);

/***/ }),

/***/ "./src/ButtonLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/Button.js");
var _jsxFileName = "/Users/emplums/primer-react/src/ButtonLink.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ButtonLink = function ButtonLink(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Button__["a" /* default */], _extends({}, props, {
    linkStyle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

ButtonLink.displayName = "ButtonLink";
/* harmony default export */ __webpack_exports__["a"] = (ButtonLink);

/***/ }),

/***/ "./src/ButtonOutline.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/Button.js");
var _jsxFileName = "/Users/emplums/primer-react/src/ButtonOutline.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ButtonOutline = function ButtonOutline(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Button__["a" /* default */], _extends({}, props, {
    scheme: "outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

ButtonOutline.displayName = "ButtonOutline";
/* harmony default export */ __webpack_exports__["a"] = (ButtonOutline);

/***/ }),

/***/ "./src/ButtonPrimary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/Button.js");
var _jsxFileName = "/Users/emplums/primer-react/src/ButtonPrimary.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ButtonPrimary = function ButtonPrimary(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Button__["a" /* default */], _extends({}, props, {
    scheme: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

ButtonPrimary.displayName = "ButtonPrimary";
/* harmony default export */ __webpack_exports__["a"] = (ButtonPrimary);

/***/ }),

/***/ "./src/Caret.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BorderBox__ = __webpack_require__("./src/BorderBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_system__ = __webpack_require__("styled-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Caret.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var oppositeEdge = {
  top: 'Bottom',
  right: 'Left',
  bottom: 'Top',
  left: 'Right'
};
var perpendicularEdge = {
  top: 'Left',
  right: 'Top',
  bottom: 'Left',
  left: 'Top'
};

function getEdgeAlign(location) {
  var _location$split = location.split('-'),
      _location$split2 = _slicedToArray(_location$split, 2),
      edge = _location$split2[0],
      align = _location$split2[1];

  return [edge, align];
}

function getPosition(edge, align, spacing) {
  var _ref;

  var opposite = oppositeEdge[edge].toLowerCase();
  var perp = perpendicularEdge[edge].toLowerCase();
  return _ref = {}, _defineProperty(_ref, opposite, '100%'), _defineProperty(_ref, align || perp, align ? spacing : '50%'), _ref;
}

var getBg = Object(__WEBPACK_IMPORTED_MODULE_3_styled_system__["style"])({
  prop: 'bg',
  key: 'colors'
});
var getBorderColor = Object(__WEBPACK_IMPORTED_MODULE_3_styled_system__["style"])({
  prop: 'borderColor',
  key: 'colors'
});
var getBorderWidth = Object(__WEBPACK_IMPORTED_MODULE_3_styled_system__["style"])({
  prop: 'borderWidth',
  key: 'borderWidths',
  scale: [0, 1]
});
var getSize = Object(__WEBPACK_IMPORTED_MODULE_3_styled_system__["style"])({
  prop: 'size',
  key: 'space'
});

function Caret(props) {
  var _getBg = getBg(props),
      bg = _getBg.bg;

  var _getBorderColor = getBorderColor(props),
      borderColor = _getBorderColor.borderColor;

  var _getBorderWidth = getBorderWidth(props),
      borderWidth = _getBorderWidth.borderWidth;

  var _getSize = getSize(props),
      size = _getSize.size;

  var location = props.location;

  var _getEdgeAlign = getEdgeAlign(location),
      _getEdgeAlign2 = _slicedToArray(_getEdgeAlign, 2),
      edge = _getEdgeAlign2[0],
      align = _getEdgeAlign2[1];

  var perp = perpendicularEdge[edge];

  var style = _objectSpread({
    pointerEvents: 'none',
    position: 'absolute'
  }, getPosition(edge, align, size), _defineProperty({}, "margin".concat(perp), align ? null : -size)); // note: these arrays represent points in the form [x, y]


  var a = [-size, 0];
  var b = [0, size];
  var c = [size, 0]; // spaces are optional in path `d` attribute, and points are
  // represented in the form `x,y` -- which is what the arrays above
  // become when stringified!

  var triangle = "M".concat(a, "L").concat(b, "L").concat(c, "L").concat(a, "Z");
  var line = "M".concat(a, "L").concat(b, "L").concat(c);
  var transform = {
    top: "translate(".concat([size, size * 2], ") rotate(180)"),
    right: "translate(".concat([0, size], ") rotate(-90)"),
    bottom: "translate(".concat([size, 0], ")"),
    left: "translate(".concat([size * 2, size], ") rotate(90)")
  }[edge];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    width: size * 2,
    height: size * 2,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    transform: transform,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: triangle,
    fill: bg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: line,
    fill: "none",
    stroke: borderColor,
    strokeWidth: borderWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  })));
}

Caret.displayName = "Caret";
Caret.locations = ['top', 'top-left', 'top-right', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom'];
Caret.defaultProps = {
  bg: __WEBPACK_IMPORTED_MODULE_2__BorderBox__["a" /* default */].defaultProps.bg,
  borderColor: __WEBPACK_IMPORTED_MODULE_2__BorderBox__["a" /* default */].defaultProps.borderColor,
  borderWidth: 1,
  location: 'bottom',
  size: 2
};
Caret.propTypes = {
  /* eslint-disable react/sort-prop-types  */
  // eslint can't determine whether these props are used
  // because they're accessed inside of styled-system.

  /* eslint-disable react/no-unused-prop-types */
  bg: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  borderColor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  borderWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Caret.locations)
  /* eslint-enable */

};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__system_props__["g" /* withDefaultTheme */])(Caret));

/***/ }),

/***/ "./src/CircleBadge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/CircleBadge.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var ICON_CLASS = 'CircleBadge-icon';

var sizeMapper = function sizeMapper(size) {
  if (typeof size === 'number') return size;
  var map = {
    small: 56,
    medium: 96,
    large: 128
  };
  return map[size];
};

var sizeStyles = function sizeStyles(_ref) {
  var size = _ref.size;
  return {
    width: sizeMapper(size),
    height: sizeMapper(size)
  };
};

var CircleBadge = function CircleBadge(_ref2) {
  var _ref2$is = _ref2.is,
      Tag = _ref2$is === void 0 ? 'div' : _ref2$is,
      children = _ref2.children,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, ["is", "children", "className"]);

  var mappedChildren = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
    var _child$props$classNam = child.props.className,
        className = _child$props$classNam === void 0 ? '' : _child$props$classNam;

    if (!className.includes(ICON_CLASS)) {
      className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(ICON_CLASS, className);
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
      className: className
    });
  });
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'CircleBadge');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
    className: classes
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), mappedChildren);
};

CircleBadge.displayName = "CircleBadge";
CircleBadge.propTypes = {
  alt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  bg: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  is: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['small', 'medium', 'large']), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  src: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(CircleBadge, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]).concat([sizeStyles])));

/***/ }),

/***/ "./src/CircleOcticon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FlexContainer__ = __webpack_require__("./src/FlexContainer.js");
var _jsxFileName = "/Users/emplums/primer-react/src/CircleOcticon.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






function CircleOcticon(props) {
  var size = props.size;

  var icon = props.icon,
      rest = _objectWithoutProperties(props, ["icon"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FlexContainer__["a" /* default */], _extends({}, rest, {
    size: size,
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default.a, {
    icon: icon,
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
}

CircleOcticon.displayName = "CircleOcticon";
CircleOcticon.defaultProps = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__FlexContainer__["a" /* default */].defaultProps, {
  size: 32,
  borderRadius: '50%'
});
CircleOcticon.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__FlexContainer__["a" /* default */].propTypes, {
  icon: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default.a.propTypes.icon,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
});
/* harmony default export */ __webpack_exports__["a"] = (CircleOcticon);

/***/ }),

/***/ "./src/CounterLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/CounterLabel.js";





function CounterLabel(_ref) {
  var scheme = _ref.scheme,
      children = _ref.children,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'Counter', scheme && "Counter--".concat(scheme)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, children);
}

CounterLabel.displayName = "CounterLabel";
CounterLabel.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  scheme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['gray', 'gray-light'])
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(CounterLabel, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/Details.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Details.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Details =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details(props) {
    var _this;

    _classCallCheck(this, Details);

    _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this, props));
    _this.state = {
      open: Boolean(props.open)
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Details, [{
    key: "toggle",
    value: function toggle(event) {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          _props$render = _props.render,
          render = _props$render === void 0 ? getRenderer(children) : _props$render,
          rest = _objectWithoutProperties(_props, ["className", "children", "render"]);

      var open = this.state.open;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("details", _extends({}, rest, {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('details-reset', className),
        open: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), render({
        open: open,
        toggle: this.toggle
      }));
    }
  }]);

  return Details;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Details.displayName = "Details";

function getRenderer(children) {
  return typeof children === 'function' ? children : function () {
    return children;
  };
}

Details.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  open: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  render: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["i" /* withoutPropTypes */])(Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Details, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]), ['is']));

/***/ }),

/***/ "./src/DonutChart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("d3-shape");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3_shape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DonutSlice__ = __webpack_require__("./src/DonutSlice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/DonutChart.js";






function DonutChart(props) {
  var className = props.className,
      data = props.data,
      _props$children = props.children,
      children = _props$children === void 0 ? mapData(data) : _props$children,
      size = props.size;
  var radius = size / 2;
  var innerRadius = radius - 6;
  var pie = Object(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["pie"])().value(function (child) {
    return child.props.value;
  }); // coerce the children into an array

  var childList = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(children);
  var arcData = pie(childList);
  var arc = Object(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["arc"])().innerRadius(innerRadius).outerRadius(radius);
  var slices = childList.map(function (child, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
      d: arc(arcData[i])
    });
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    width: size,
    height: size,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    transform: "translate(".concat(radius, ",").concat(radius, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, slices));
}

DonutChart.displayName = "DonutChart";

function mapData(data) {
  return Object.keys(data).map(function (key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DonutSlice__["a" /* default */], {
      key: key,
      state: key,
      value: data[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    });
  });
}

DonutChart.defaultProps = {
  size: 30
};
DonutChart.propTypes = {
  // require elements, not mixed content: <DonutSlice>, <title>, etc.
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element)]),
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.objectOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__system_props__["h" /* withSystemProps */])(DonutChart, ['space']));

/***/ }),

/***/ "./src/DonutSlice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_system__ = __webpack_require__("styled-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/DonutSlice.js";




var defaultColor = '#666';
var getStateColors = Object(__WEBPACK_IMPORTED_MODULE_2_styled_system__["themeGet"])('colors.state', {});

function DonutSlice(props) {
  var children = props.children,
      d = props.d,
      fill = props.fill,
      state = props.state,
      value = props.value;
  var stateColors = getStateColors(props);
  var color = fill || stateColors[state] || stateColors.unknown || defaultColor;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: d,
    fill: color,
    "data-value": value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, children);
}

DonutSlice.displayName = "DonutSlice";
DonutSlice.propTypes = {
  // <title> is really the only thing that should be acceptable here
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    type: 'title'
  }),
  d: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  fill: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /* eslint-disable react/no-unused-prop-types */
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    colors: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.objectOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string)
    })
  }),

  /* eslint-enable */
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["g" /* withDefaultTheme */])(DonutSlice));

/***/ }),

/***/ "./src/Dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Octicon__ = __webpack_require__("./src/Octicon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./src/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Box__ = __webpack_require__("./src/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Caret__ = __webpack_require__("./src/Caret.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Details__ = __webpack_require__("./src/Details.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FlexContainer__ = __webpack_require__("./src/FlexContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Dropdown.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }













function Dropdown(_ref) {
  var title = _ref.title,
      scheme = _ref.scheme,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["title", "scheme", "children", "className"]);

  var minWidth = rest.minWidth;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'BtnGroup')
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__FlexContainer__["a" /* default */], {
    is: __WEBPACK_IMPORTED_MODULE_8__Details__["a" /* default */],
    className: "BtnGroup-form",
    css: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, function (_ref2) {
    var toggle = _ref2.toggle;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* default */], {
      is: "summary",
      scheme: scheme,
      grouped: true,
      onClick: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, title, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Octicon__["a" /* default */], {
      icon: __WEBPACK_IMPORTED_MODULE_4__githubprimer_octicons_react__["TriangleDown"],
      size: 14,
      ml: title ? 2 : 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Box__["a" /* default */], {
      bg: "white",
      border: 1,
      borderColor: "gray.2",
      borderRadius: 1,
      boxShadow: "small",
      mt: 1,
      px: 3,
      py: 2,
      minWidth: minWidth,
      css: {
        position: 'absolute',
        zIndex: 99999
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Caret__["a" /* default */], {
      location: "top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    })));
  }));
}

Dropdown.displayName = "Dropdown";
Dropdown.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  scheme: __WEBPACK_IMPORTED_MODULE_5__Button__["a" /* default */].propTypes.scheme,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10__system_props__["h" /* withSystemProps */])(Dropdown, __WEBPACK_IMPORTED_MODULE_10__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/FilterList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEM_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTED_CLASS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/FilterList.js";




var ITEM_CLASS = 'filter-item';
var SELECTED_CLASS = 'selected';

function FilterList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      small = _ref.small;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'filter-list', small && 'small');
  var items = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, child);
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, items);
}

FilterList.displayName = "FilterList";
Object.assign(FilterList, {
  ITEM_CLASS: ITEM_CLASS,
  SELECTED_CLASS: SELECTED_CLASS
});
FilterList.defaultProps = {
  m: 0,
  p: 0
};
FilterList.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  small: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["c"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(FilterList, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/FilterListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FilterList__ = __webpack_require__("./src/FilterList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/FilterListItem.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }







function getCountComponent(count) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "count",
    title: "results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, count);
}

getCountComponent.displayName = "getCountComponent";

function FilterListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      count = _ref.count,
      selected = _ref.selected,
      Tag = _ref.is,
      rest = _objectWithoutProperties(_ref, ["children", "className", "count", "selected", "is"]);

  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__FilterList__["a" /* ITEM_CLASS */], selected && __WEBPACK_IMPORTED_MODULE_3__FilterList__["b" /* SELECTED_CLASS */], className);

  if (typeof rest.to === 'string') {
    rest.activeClassName = __WEBPACK_IMPORTED_MODULE_3__FilterList__["b" /* SELECTED_CLASS */];
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
    className: classes
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), count && getCountComponent(count), children);
}

FilterListItem.displayName = "FilterListItem";
FilterListItem.defaultProps = {
  is: 'a'
};
FilterListItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  count: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  is: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__system_props__["h" /* withSystemProps */])(FilterListItem, __WEBPACK_IMPORTED_MODULE_4__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/Flash.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Flash.js";




var schemeMap = {
  green: 'success',
  red: 'error',
  yellow: 'warn'
};

function Flash(_ref) {
  var children = _ref.children,
      className = _ref.className,
      full = _ref.full,
      scheme = _ref.scheme;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'flash', full && 'flash-full', scheme && "flash-".concat(schemeMap[scheme]));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, children);
}

Flash.displayName = "Flash";
Flash.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  scheme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Object.keys(schemeMap))
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Flash, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/FlexContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_props__ = __webpack_require__("./src/system-props.js");

var FlexContainer = Object(__WEBPACK_IMPORTED_MODULE_0__system_props__["h" /* withSystemProps */])({
  is: 'div',
  display: 'flex'
}, __WEBPACK_IMPORTED_MODULE_0__system_props__["b" /* FLEX_CONTAINER */]);
/* harmony default export */ __webpack_exports__["a"] = (FlexContainer);

/***/ }),

/***/ "./src/FlexItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_props__ = __webpack_require__("./src/system-props.js");

var FlexItem = Object(__WEBPACK_IMPORTED_MODULE_0__system_props__["h" /* withSystemProps */])('div', __WEBPACK_IMPORTED_MODULE_0__system_props__["c" /* FLEX_ITEM */]);
/* harmony default export */ __webpack_exports__["a"] = (FlexItem);

/***/ }),

/***/ "./src/Heading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_props__ = __webpack_require__("./src/system-props.js");

var Heading = Object(__WEBPACK_IMPORTED_MODULE_0__system_props__["h" /* withSystemProps */])({
  is: 'h1',
  fontSize: 5,
  m: 0
}, __WEBPACK_IMPORTED_MODULE_0__system_props__["f" /* TYPOGRAPHY */]);
/* harmony default export */ __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "./src/Label.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Label.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var colorScheme = function colorScheme(scheme, outline) {
  if (outline) {
    return {
      'Label--outline-green': scheme === 'green'
    };
  } else {
    return {
      'Label--gray': scheme == null || scheme === 'gray',
      'Label--gray-darker': scheme === 'gray-darker',
      'Label--orange': scheme === 'orange',
      'bg-green': scheme === 'green'
    };
  }
};

function Label(_ref) {
  var className = _ref.className,
      outline = _ref.outline,
      scheme = _ref.scheme,
      rest = _objectWithoutProperties(_ref, ["className", "outline", "scheme"]);

  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'Label', outline && 'Label--outline', colorScheme(scheme, outline));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
    className: classes
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
}

Label.displayName = "Label";
Label.propTypes = {
  outline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  scheme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['gray', 'gray-darker', 'green', 'orange'])
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Label, ['space']));

/***/ }),

/***/ "./src/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Link.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      muted = _ref.muted,
      scheme = _ref.scheme,
      nounderline = _ref.nounderline,
      rest = _objectWithoutProperties(_ref, ["children", "className", "muted", "scheme", "nounderline"]);

  var colorClass = scheme ? "link-".concat(scheme) : muted ? 'muted-link' : 'text-blue';
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, colorClass, nounderline && 'no-underline');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({
    className: classes
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), children);
}

Link.displayName = "Link";
Link.propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  muted: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  nounderline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  scheme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['gray', 'gray-dark'])
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Link, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/MergeStatus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StateLabel__ = __webpack_require__("./src/StateLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/MergeStatus.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var stateColorMap = {
  ready: 'green',
  invalid: 'invalid',
  merged: 'purple',
  pending: 'yellow'
};
var octicon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default.a, {
  icon: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["GitMerge"],
  size: "medium",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
});

function MergeStatus(_ref) {
  var state = _ref.state,
      rest = _objectWithoutProperties(_ref, ["state"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StateLabel__["a" /* default */], _extends({}, rest, {
    scheme: stateColorMap[state],
    icon: octicon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }));
}

MergeStatus.displayName = "MergeStatus";
MergeStatus.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['ready', 'invalid', 'merged', 'pending']).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__system_props__["h" /* withSystemProps */])(MergeStatus, __WEBPACK_IMPORTED_MODULE_4__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/Octicon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_props__ = __webpack_require__("./src/system-props.js");


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__system_props__["h" /* withSystemProps */])(__WEBPACK_IMPORTED_MODULE_0__githubprimer_octicons_react___default.a, __WEBPACK_IMPORTED_MODULE_1__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/OcticonButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/OcticonButton.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function OcticonButton(_ref) {
  var disabled = _ref.disabled,
      className = _ref.className,
      icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      size = _ref.size;
  var buttonProps = {
    'aria-label': label,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('btn-link text-inherit', className),
    disabled: disabled,
    onClick: onClick
  };
  var octiconProps = {
    icon: icon,
    size: size
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", _extends({}, buttonProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__githubprimer_octicons_react___default.a, _extends({}, octiconProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })));
}

OcticonButton.displayName = "OcticonButton";
OcticonButton.defaultProps = {
  label: ''
};
OcticonButton.propTypes = {
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  icon: __WEBPACK_IMPORTED_MODULE_3__githubprimer_octicons_react___default.a.propTypes.icon,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  size: __WEBPACK_IMPORTED_MODULE_3__githubprimer_octicons_react___default.a.propTypes.size
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__system_props__["h" /* withSystemProps */])(OcticonButton, __WEBPACK_IMPORTED_MODULE_4__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/PointerBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BorderBox__ = __webpack_require__("./src/BorderBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Caret__ = __webpack_require__("./src/Caret.js");
var _jsxFileName = "/Users/emplums/primer-react/src/PointerBox.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





function PointerBox(props) {
  // don't destructure these, just grab them
  var bg = props.bg,
      border = props.border,
      borderColor = props.borderColor;

  var caret = props.caret,
      children = props.children,
      boxProps = _objectWithoutProperties(props, ["caret", "children"]);

  var caretProps = {
    bg: bg,
    borderColor: borderColor,
    borderWidth: border,
    location: caret
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__BorderBox__["a" /* default */], _extends({}, boxProps, {
    css: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Caret__["a" /* default */], _extends({}, caretProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })));
}

PointerBox.displayName = "PointerBox";
PointerBox.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__BorderBox__["a" /* default */].propTypes, {
  caret: __WEBPACK_IMPORTED_MODULE_2__Caret__["a" /* default */].propTypes.location // we can set this because it "extends" Box implicitly

});
PointerBox.systemComponent = true;
/* harmony default export */ __webpack_exports__["a"] = (PointerBox);

/***/ }),

/***/ "./src/Position.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Absolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Fixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Sticky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Position.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Position = Object(__WEBPACK_IMPORTED_MODULE_1__system_props__["h" /* withSystemProps */])('div', __WEBPACK_IMPORTED_MODULE_1__system_props__["d" /* LAYOUT */].concat(__WEBPACK_IMPORTED_MODULE_1__system_props__["e" /* POSITION */]));

function withPosition(position) {
  var WithPosition = function WithPosition(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Position, _extends({}, props, {
      position: position,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }));
  };

  WithPosition.propTypes = Position.propTypes;
  WithPosition.displayName = "Position.".concat(position);
  return WithPosition;
}

var Absolute = withPosition('absolute');
var Fixed = withPosition('fixed');
var Relative = withPosition('relative');
var Sticky = withPosition('sticky');
Sticky.defaultProps = {
  top: 0,
  zIndex: 1
};

/***/ }),

/***/ "./src/StateLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__ = __webpack_require__("@githubprimer/octicons-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme__ = __webpack_require__("./src/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/StateLabel.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var stateColorMap = {
  open: 'green',
  opened: 'green',
  reopened: 'green',
  closed: 'red',
  merged: 'purple'
};
var stateOcticonMap = {
  open: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["IssueOpened"],
  opened: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["IssueOpened"],
  reopened: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["IssueReopened"],
  closed: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["IssueClosed"],
  merged: __WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react__["GitMerge"]
};

function getOcticon(state) {
  if (!state) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__githubprimer_octicons_react___default.a, {
    icon: stateOcticonMap[state],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  });
}

getOcticon.displayName = "getOcticon";

function getIconComponent(icon, children) {
  if (icon && children) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, icon);
  } else if (icon) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "d-flex m-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, icon);
  }

  return null;
}

function StateLabel(_ref) {
  var state = _ref.state,
      className = _ref.className,
      scheme = _ref.scheme,
      icon = _ref.icon,
      small = _ref.small,
      children = _ref.children;

  if (icon !== false) {
    icon = icon || getOcticon(state);
  }

  var color = scheme || stateColorMap[state];
  var styleProps = {};

  if (color === 'yellow') {
    styleProps.style = {
      backgroundColor: __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* colors */].yellow[7]
    };
  }

  var iconComponent = getIconComponent(icon, children);
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'State', {
    'State--small': small
  }, color && color !== 'yellow' ? "State--".concat(color) : null);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
    className: classes
  }, styleProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), iconComponent, children);
}

StateLabel.displayName = "StateLabel";
StateLabel.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
  scheme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  small: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  state: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Object.keys(stateOcticonMap))
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__system_props__["h" /* withSystemProps */])(StateLabel, __WEBPACK_IMPORTED_MODULE_5__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/Text.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_props__ = __webpack_require__("./src/system-props.js");

var Text = Object(__WEBPACK_IMPORTED_MODULE_0__system_props__["h" /* withSystemProps */])('span', __WEBPACK_IMPORTED_MODULE_0__system_props__["f" /* TYPOGRAPHY */]);
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ "./src/TextInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/TextInput.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function TextInput(_ref) {
  var autocomplete = _ref.autocomplete,
      block = _ref.block,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      required = _ref.required,
      size = _ref.size,
      value = _ref.value;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'form-control', {
    'input-block': block,
    'input-sm': size === 'small',
    'input-lg': size === 'large'
  });
  var inputProps = {
    className: classes,
    'aria-label': placeholder,
    autoComplete: autocomplete,
    onChange: onChange,
    disabled: disabled,
    id: id,
    name: name,
    placeholder: placeholder,
    required: required,
    value: value,
    type: 'text'
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", _extends({}, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
}

TextInput.displayName = "TextInput";
TextInput.propTypes = {
  autocomplete: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  placeholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  required: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['small', 'large']),
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(TextInput, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/Tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/Tooltip.js";





function Tooltip(_ref) {
  var direction = _ref.direction,
      children = _ref.children,
      className = _ref.className,
      text = _ref.text,
      noDelay = _ref.noDelay,
      align = _ref.align,
      wrap = _ref.wrap;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'tooltipped', "tooltipped-".concat(direction), align && "tooltipped-align-".concat(align, "-2"), noDelay && 'tooltipped-no-delay', wrap && 'tooltipped-multiline');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "aria-label": text,
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, children);
}

Tooltip.displayName = "Tooltip";
Tooltip.alignments = ['left', 'right'];
Tooltip.directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
Tooltip.defaultProps = {
  direction: 'n'
};
Tooltip.propTypes = {
  align: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Tooltip.alignments),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Tooltip.directions),
  noDelay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  wrap: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(Tooltip, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/UnderlineNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEM_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTED_CLASS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/UnderlineNav.js";




var ITEM_CLASS = 'UnderlineNav-item no-underline';
var SELECTED_CLASS = 'selected';

function UnderlineNav(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      full = _ref.full,
      label = _ref.label;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'UnderlineNav', align && "UnderlineNav--".concat(align), full && 'UnderlineNav--full');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: classes,
    "aria-label": label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "UnderlineNav-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, children), actions && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "UnderlineNav-actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, actions));
}

UnderlineNav.displayName = "UnderlineNav";
// make it possible to destructure these from UnderlineNav:
// const {ITEM_CLASS} = UnderlineNav
Object.assign(UnderlineNav, {
  ITEM_CLASS: ITEM_CLASS,
  SELECTED_CLASS: SELECTED_CLASS
});
UnderlineNav.propTypes = {
  actions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  align: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['right']),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["c"] = (Object(__WEBPACK_IMPORTED_MODULE_3__system_props__["h" /* withSystemProps */])(UnderlineNav, __WEBPACK_IMPORTED_MODULE_3__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/UnderlineNavLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UnderlineNav__ = __webpack_require__("./src/UnderlineNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_props__ = __webpack_require__("./src/system-props.js");
var _jsxFileName = "/Users/emplums/primer-react/src/UnderlineNavLink.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }







function UnderlineNavLink(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      Tag = _ref.is,
      rest = _objectWithoutProperties(_ref, ["className", "selected", "is"]);

  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__UnderlineNav__["a" /* ITEM_CLASS */], selected && __WEBPACK_IMPORTED_MODULE_3__UnderlineNav__["b" /* SELECTED_CLASS */], className);

  if (typeof rest.to === 'string') {
    rest.activeClassName = __WEBPACK_IMPORTED_MODULE_3__UnderlineNav__["b" /* SELECTED_CLASS */];
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({
    className: classes
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
}

UnderlineNavLink.displayName = "UnderlineNavLink";
UnderlineNavLink.defaultProps = {
  is: 'a'
};
UnderlineNavLink.propTypes = {
  is: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__system_props__["h" /* withSystemProps */])(UnderlineNavLink, __WEBPACK_IMPORTED_MODULE_4__system_props__["a" /* COMMON */]));

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme__ = __webpack_require__("./src/theme.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return __WEBPACK_IMPORTED_MODULE_0__theme__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BorderBox__ = __webpack_require__("./src/BorderBox.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BorderBox", function() { return __WEBPACK_IMPORTED_MODULE_1__BorderBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Box__ = __webpack_require__("./src/Box.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return __WEBPACK_IMPORTED_MODULE_2__Box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Position__ = __webpack_require__("./src/Position.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_3__Position__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Absolute", function() { return __WEBPACK_IMPORTED_MODULE_3__Position__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fixed", function() { return __WEBPACK_IMPORTED_MODULE_3__Position__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Relative", function() { return __WEBPACK_IMPORTED_MODULE_3__Position__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return __WEBPACK_IMPORTED_MODULE_3__Position__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Avatar__ = __webpack_require__("./src/Avatar.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_4__Avatar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./src/Button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_5__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ButtonDanger__ = __webpack_require__("./src/ButtonDanger.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDanger", function() { return __WEBPACK_IMPORTED_MODULE_6__ButtonDanger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ButtonPrimary__ = __webpack_require__("./src/ButtonPrimary.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPrimary", function() { return __WEBPACK_IMPORTED_MODULE_7__ButtonPrimary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ButtonOutline__ = __webpack_require__("./src/ButtonOutline.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonOutline", function() { return __WEBPACK_IMPORTED_MODULE_8__ButtonOutline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ButtonLink__ = __webpack_require__("./src/ButtonLink.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return __WEBPACK_IMPORTED_MODULE_9__ButtonLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__OcticonButton__ = __webpack_require__("./src/OcticonButton.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OcticonButton", function() { return __WEBPACK_IMPORTED_MODULE_10__OcticonButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Caret__ = __webpack_require__("./src/Caret.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Caret", function() { return __WEBPACK_IMPORTED_MODULE_11__Caret__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PointerBox__ = __webpack_require__("./src/PointerBox.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PointerBox", function() { return __WEBPACK_IMPORTED_MODULE_12__PointerBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CircleOcticon__ = __webpack_require__("./src/CircleOcticon.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CircleOcticon", function() { return __WEBPACK_IMPORTED_MODULE_13__CircleOcticon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CircleBadge__ = __webpack_require__("./src/CircleBadge.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CircleBadge", function() { return __WEBPACK_IMPORTED_MODULE_14__CircleBadge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Details__ = __webpack_require__("./src/Details.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return __WEBPACK_IMPORTED_MODULE_15__Details__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dropdown__ = __webpack_require__("./src/Dropdown.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_16__Dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DonutChart__ = __webpack_require__("./src/DonutChart.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return __WEBPACK_IMPORTED_MODULE_17__DonutChart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DonutSlice__ = __webpack_require__("./src/DonutSlice.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DonutSlice", function() { return __WEBPACK_IMPORTED_MODULE_18__DonutSlice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__FilterList__ = __webpack_require__("./src/FilterList.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FilterList", function() { return __WEBPACK_IMPORTED_MODULE_19__FilterList__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FilterListItem__ = __webpack_require__("./src/FilterListItem.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListItem", function() { return __WEBPACK_IMPORTED_MODULE_20__FilterListItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FlexContainer__ = __webpack_require__("./src/FlexContainer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return __WEBPACK_IMPORTED_MODULE_21__FlexContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__FlexItem__ = __webpack_require__("./src/FlexItem.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlexItem", function() { return __WEBPACK_IMPORTED_MODULE_22__FlexItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__TextInput__ = __webpack_require__("./src/TextInput.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_23__TextInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Heading__ = __webpack_require__("./src/Heading.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return __WEBPACK_IMPORTED_MODULE_24__Heading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Label__ = __webpack_require__("./src/Label.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_25__Label__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__BranchName__ = __webpack_require__("./src/BranchName.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BranchName", function() { return __WEBPACK_IMPORTED_MODULE_26__BranchName__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Link__ = __webpack_require__("./src/Link.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_27__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__MergeStatus__ = __webpack_require__("./src/MergeStatus.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeStatus", function() { return __WEBPACK_IMPORTED_MODULE_28__MergeStatus__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Text__ = __webpack_require__("./src/Text.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_29__Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Tooltip__ = __webpack_require__("./src/Tooltip.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_30__Tooltip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__CounterLabel__ = __webpack_require__("./src/CounterLabel.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CounterLabel", function() { return __WEBPACK_IMPORTED_MODULE_31__CounterLabel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Flash__ = __webpack_require__("./src/Flash.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Flash", function() { return __WEBPACK_IMPORTED_MODULE_32__Flash__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__StateLabel__ = __webpack_require__("./src/StateLabel.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StateLabel", function() { return __WEBPACK_IMPORTED_MODULE_33__StateLabel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__UnderlineNav__ = __webpack_require__("./src/UnderlineNav.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlineNav", function() { return __WEBPACK_IMPORTED_MODULE_34__UnderlineNav__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__UnderlineNavLink__ = __webpack_require__("./src/UnderlineNavLink.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlineNavLink", function() { return __WEBPACK_IMPORTED_MODULE_35__UnderlineNavLink__["a"]; });
 // Layout



 // Components


































/***/ }),

/***/ "./src/system-props.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TYPOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FLEX_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FLEX_ITEM; });
/* unused harmony export isSystemComponent */
/* harmony export (immutable) */ __webpack_exports__["h"] = withSystemProps;
/* harmony export (immutable) */ __webpack_exports__["g"] = withDefaultTheme;
/* harmony export (immutable) */ __webpack_exports__["i"] = withoutPropTypes;
/* unused harmony export listStyle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_system__ = __webpack_require__("styled-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_system_components_emotion__ = __webpack_require__("system-components/emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_system_components_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_system_components_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme__ = __webpack_require__("./src/theme.js");
/* unused harmony reexport default */
var _jsxFileName = "/Users/emplums/primer-react/src/system-props.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var COMMON = ['color', 'space'];
var TYPOGRAPHY = COMMON.concat( // typography props
'fontFamily', 'fontSize', 'fontWeight', 'lineHeight');
var LAYOUT = COMMON.concat( // layout props
'borders', 'borderColor', 'borderRadius', 'boxShadow', 'display', 'size', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'verticalAlign');
var POSITION = [// position props
'position', 'zIndex', 'top', 'right', 'bottom', 'left'];
var FLEX_CONTAINER = LAYOUT.concat( // flex container props (display: flex)
'alignContent', 'alignItems', 'flexWrap', 'flex', 'flexBasis', 'flexDirection', 'justifyContent', 'order');
var FLEX_ITEM = LAYOUT.concat( // flex container child props
'justifySelf', 'alignSelf');
/**
 * Defensively determine whether a component function or class is a "system
 * component" by checking its `systemComponent` flag or whether its
 * `defaultProps.blacklist` is an array.
 */

function isSystemComponent(Component) {
  return Component.systemComponent === true || Component.defaultProps && Array.isArray(Component.defaultProps.blacklist);
}
/**
 * Create a "system component" with the named props from styled-system.
 * The Component (first) argument can either be a React component (a function
 * or a class) or an object representing default props. To pass a custom
 * component with other default props, set the object's `is` key to the
 * component:
 *
 * ```js
 * const Wrapped = withSystemProps({is: Component, m: 2})
 * ```
 *
 * which is the equivalent of:
 *
 * ```js
 * const Wrapped = withSystemProps(Component)
 * Wrapped.defaultProps = {
 *   m: 2
 * }
 * ```
 */

function withSystemProps(Component) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : COMMON;

  if (isSystemComponent(Component)) {
    throw new Error("".concat(Component.name, " is already a system component; can't call withSystemProps() on it"));
  }

  var component = _typeof(Component) === 'object' ? Component : {
    is: Component
  };

  if (typeof component.is === 'function') {
    component.is = guardDoubleRender(component.is);
  }

  var Wrapped = __WEBPACK_IMPORTED_MODULE_2_system_components_emotion___default.a.apply(void 0, [component].concat(_toConsumableArray(props)));
  Wrapped.displayName = Component.displayName;
  Object.assign(Wrapped.propTypes, Component.propTypes); // Set what system props we use on this component

  Wrapped.systemProps = props; // Copy over non-system keys from components
  // eg. Tooltip.js => Tooltip.directions Tooltip.alignments

  var _arr = Object.keys(Component);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (!Wrapped.hasOwnProperty(key)) {
      Wrapped[key] = Component[key];
    }
  }

  return withDefaultTheme(Wrapped);
}
/**
 * Set the component's defaultProps.theme to our theme, and returns the
 * component.
 */

function withDefaultTheme(Component) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_3__theme__["b" /* default */];

  if (Component.defaultProps) {
    Component.defaultProps.theme = theme;
  } else {
    Component.defaultProps = {
      theme: theme
    };
  }

  return Component;
}
/**
 * Remove the named keys from a component's propTypes object (if present), and
 * return the component.
 */

function withoutPropTypes(Component, props) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _prop = _step.value;
      delete Component.propTypes[_prop];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Component;
}
var listStyle = Object(__WEBPACK_IMPORTED_MODULE_1_styled_system__["style"])({
  prop: 'listStyle',
  cssProperty: 'list-style',
  key: 'listStyles'
});

function guardDoubleRender(Component) {
  function render(props) {
    var is = props.is,
        rest = _objectWithoutProperties(props, ["is"]);

    if (is === Component || is === render) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }));
    } else {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }));
    }
  }

  return render;
}

/***/ }),

/***/ "./src/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primer_colors__ = __webpack_require__("./node_modules/primer-colors/colors.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primer_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_primer_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primer_typography__ = __webpack_require__("./node_modules/primer-typography/typography.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primer_typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primer_typography__);


var colors = {
  bodytext: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["gray"][9],
  black: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["black"],
  white: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["white"],
  gray: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["gray"],
  blue: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["blue"],
  green: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["green"],
  orange: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["orange"],
  purple: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["purple"],
  red: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["red"],
  yellow: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["yellow"],
  blackfade15: 'rgba(27, 31, 35, 0.15)',
  blackfade20: 'rgba(27, 31, 35, 0.20)',
  whitefade15: 'rgba(255, 255, 255, 0.15)',
  state: {
    error: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["red"][5],
    failure: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["red"][5],
    pending: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["yellow"][7],
    queued: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["yellow"][7],
    success: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["green"][5],
    unknown: __WEBPACK_IMPORTED_MODULE_0_primer_colors__["gray"][4]
  }
};
var theme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  fonts: {
    normal: fontStack(['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']),
    mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
  },
  colors: colors,
  borders: [0, '1px solid'],
  fontSizes: __WEBPACK_IMPORTED_MODULE_1_primer_typography__["fontSizes"],
  lineHeights: __WEBPACK_IMPORTED_MODULE_1_primer_typography__["lineHeights"],
  radii: [0, 3, 6],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)'
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48]
};
/* harmony default export */ __webpack_exports__["b"] = (theme);


function fontStack(fonts) {
  return fonts.map(function (font) {
    return font.includes(' ') ? "\"".concat(font, "\"") : font;
  }).join(', ');
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@githubprimer/octicons-react":
/***/ (function(module, exports) {

module.exports = require("@githubprimer/octicons-react");

/***/ }),

/***/ "@mdx-js/tag":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/tag");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "d3-shape":
/***/ (function(module, exports) {

module.exports = require("d3-shape");

/***/ }),

/***/ "mdx-docs":
/***/ (function(module, exports) {

module.exports = require("mdx-docs");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-system":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "system-components/emotion":
/***/ (function(module, exports) {

module.exports = require("system-components/emotion");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map