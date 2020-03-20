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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/inputHandlerTest/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/lib/inputHandler.js":
/*!*********************************!*\
  !*** ./src/lib/inputHandler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar InputHandler =\n/*#__PURE__*/\nfunction () {\n  function InputHandler(elem, events) {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputHandler);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"keyDown\", function (event) {\n      _this.input.keys[event.code] = true;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"keyUp\", function (event) {\n      _this.input.keys[event.code] = false;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"mouseDown\", function (event) {\n      _this.input.mouse[event.button] = true;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"mouseUp\", function (event) {\n      _this.input.mouse[event.button] = false;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"mouseMove\", function (event) {\n      _this.input.x = event.clientX + _this.offsetX;\n      _this.input.y = event.clientY - _this.offsetY;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"startHandler\", function () {\n      _this.dynamicEvents = {};\n      Object.keys(_this.events).forEach(function (eventName) {\n        var dynamicEvent = function (event) {\n          this.events[eventName].forEach(function (fn) {\n            fn.call(this, event);\n          }.bind(this));\n        }.bind(this);\n\n        this.dynamicEvents[eventName] = dynamicEvent;\n        this.elem.addEventListener(eventName, dynamicEvent);\n      }.bind(_this));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"stopHandler\", function () {\n      Object.keys(_this.events).forEach(function (eventName) {\n        _this.elem.removeEventListener(eventName, _this.dynamicEvents[eventName]);\n      });\n      _this.dynamicEvents = {};\n    });\n\n    this.elem = elem;\n    this.elemBounds = elem.getBoundingClientRect();\n    this.offsetX = this.elemBounds.left;\n    this.offsetY = this.elemBounds.top;\n    this.input = {\n      keys: [],\n      mouse: [],\n      x: 0,\n      y: 0\n    };\n    this.events = {\n      keydown: [this.keyDown],\n      keyup: [this.keyUp],\n      mousedown: [this.mouseDown],\n      mouseup: [this.mouseUp],\n      mousemove: [this.mouseMove]\n    };\n    if (events) Object.keys(events).forEach(function (eventName) {\n      var _this2 = this;\n\n      if (this.events[eventName]) {\n        this.events[eventName] = this.events[eventName].concat(events[eventName].length ? events[eventName].map(function (fn) {\n          return fn.bind(_this2);\n        }) : [events[eventName]]);\n      } else {\n        this.events[eventName] = events[eventName].length ? events[eventName].map(function (fn) {\n          return fn.bind(_this2);\n        }) : [events[eventName]];\n      }\n    }.bind(this));\n    this.dynamicEvents = {};\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputHandler, [{\n    key: \"setEvents\",\n    value: function setEvents(events) {\n      Object.assign(this.events, events);\n    }\n  }, {\n    key: \"keys\",\n    value: function keys() {\n      return this.input.keys;\n    }\n  }, {\n    key: \"mouse\",\n    value: function mouse() {\n      return this.input.mouse;\n    }\n  }, {\n    key: \"mouseX\",\n    value: function mouseX() {\n      return this.input.x;\n    }\n  }, {\n    key: \"mouseY\",\n    value: function mouseY() {\n      return this.input.y;\n    }\n  }]);\n\n  return InputHandler;\n}();\n\n\n\n//# sourceURL=webpack:///./src/lib/inputHandler.js?");

/***/ }),

/***/ "./tests/inputHandlerTest/main.js":
/*!****************************************!*\
  !*** ./tests/inputHandlerTest/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _src_lib_inputHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/lib/inputHandler */ \"./src/lib/inputHandler.js\");\n\n\nfunction addNotification(text) {\n  var notifications = document.querySelector(\".notifications\");\n\n  if (notifications.childNodes.length > 3) {\n    notifications.innerHTML = \"\";\n  }\n\n  var child = document.createElement(\"div\");\n  child.innerHTML = text;\n  child.classList = \"notification is-info\";\n  Object.assign(child.style, {\n    margin: 0\n  });\n  notifications.appendChild(child);\n  setTimeout(function () {\n    if (child) child.remove();\n  }, 1000);\n} //Input with custom callbacks\n\n\nvar events = {\n  keydown: [function () {\n    addNotification(\"Key Down!\");\n  }],\n  keyup: function keyup() {\n    addNotification(\"Key up!\");\n  },\n  mousedown: [function () {\n    addNotification(\"Mouse button down!\");\n  }],\n  mouseup: function mouseup() {\n    addNotification(\"Mouse button up!\");\n  },\n  mousemove: function mousemove() {\n    addNotification(\"Mouse moving!\");\n  }\n};\nvar exampleInput = new _src_lib_inputHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(\"body\"), events);\n\nglobal.startHandler = function () {\n  exampleInput.startHandler();\n};\n\nglobal.stopHandler = function () {\n  exampleInput.stopHandler();\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./tests/inputHandlerTest/main.js?");

/***/ })

/******/ });