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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/bouncingBall/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/lib/actor.js":
/*!**************************!*\
  !*** ./src/lib/actor.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Actor; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Actor = function Actor(bounds, name) {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Actor);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"create\", function () {});\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"render\", function (deltaTime) {});\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"update\", function (deltaTime) {});\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"destroy\", function () {\n    //Clear boundingbox\n    _this.ctx.clearRect(_this.bounds.x, _this.bounds.y, _this.bounds.width, _this.bounds.height); //Remove actor from stage\n\n\n    _this.stage.removeActor(_this);\n  });\n\n  //Add actor to stage and stage context\n  this.stage;\n  this.ctx;\n  this.name = name; //Dimensions of actor (has default bounds)\n\n  this.bounds = bounds || {\n    x: 0,\n    y: 0,\n    width: 0,\n    height: 0\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/lib/actor.js?");

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

/***/ "./src/lib/stage.js":
/*!**************************!*\
  !*** ./src/lib/stage.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stage; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Stage = function Stage(elem) {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Stage);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getCollisions\", function (actor) {\n    var collisions = [];\n    var obj = _this;\n    var keys = Object.keys(_this.children); //call all children render cycles\n\n    keys.forEach(function (layer) {\n      obj.children[layer].forEach(function (child) {\n        if (obj.checkCollision(child, actor) && child !== actor) {\n          collisions.push(child);\n        }\n      });\n    });\n    return collisions;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"checkCollision\", function (actorA, actorB) {\n    return actorA.bounds.x < actorB.bounds.x + actorB.bounds.width && actorA.bounds.x + actorA.bounds.width > actorB.bounds.x && actorA.bounds.y < actorB.bounds.y + actorB.bounds.height && actorA.bounds.y + actorA.bounds.height > actorB.bounds.y;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addActor\", function (actor, zIndex) {\n    if (!zIndex) zIndex = 0;\n    actor.stage = _this;\n    actor.ctx = _this.ctx;\n    actor.zIndex = zIndex;\n    actor.create();\n    if (!_this.children[zIndex]) _this.children[zIndex] = [];\n\n    _this.children[zIndex].push(actor);\n\n    _this.exportList.push({\n      name: actor.name,\n      x: actor.bounds[\"x\"],\n      y: actor.bounds[\"y\"]\n    }); // console.log(\"EXPORT LIST - \" + JSON.stringify(this.exportList))\n\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"removeActor\", function (actor) {\n    var index = _this.children[actor.zIndex].findIndex(function (a) {\n      return a === actor;\n    });\n\n    _this.children[actor.zIndex].splice(index, 1);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"callUpdateCycles\", function () {\n    var timeNow = Date.now();\n\n    if (timeNow - _this.updateTimeStart > 1000 / _this.updateFPS) {\n      _this.updateDeltaTime = timeNow - _this.updateTimeStart;\n\n      _this.updateCycles(_this.updateDeltaTime);\n\n      _this.updateTimeStart = Date.now();\n    }\n\n    window.requestAnimationFrame(_this.callUpdateCycles);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"callRenderCycles\", function () {\n    var timeNow = Date.now();\n\n    if (timeNow - _this.renderTimeStart > 1000 / _this.renderFPS) {\n      _this.renderDeltaTime = timeNow - _this.renderTimeStart;\n\n      _this.renderCycles(_this.renderDeltaTime);\n\n      _this.renderTimeStart = Date.now();\n    }\n\n    window.requestAnimationFrame(_this.callRenderCycles);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"create\", function () {});\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"start\", function () {\n    _this.create();\n\n    window.requestAnimationFrame(_this.callUpdateCycles);\n    window.requestAnimationFrame(_this.callRenderCycles);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"stop\", function () {\n    _this.destroy();\n\n    window.cancelAnimationFrame(_this.callUpdateCycles);\n    window.cancelAnimationFrame(_this.callRenderCycles);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"render\", function () {});\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderCycles\", function (deltaTime) {\n    _this.render();\n\n    _this.ctx.clearRect(0, 0, _this.width, _this.height);\n\n    var keys = Object.keys(_this.children);\n    keys.sort(function (a, b) {\n      return a - b;\n    }); //call all children render cycles\n\n    keys.forEach(function (layer) {\n      this.children[layer].forEach(function (child) {\n        child.render(deltaTime);\n      }, this, deltaTime);\n    }, _this, deltaTime);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"update\", function () {});\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"updateCycles\", function (deltaTime) {\n    _this.update();\n\n    var keys = Object.keys(_this.children);\n    keys.sort(function (a, b) {\n      return a - b;\n    }); //call all children render cycles\n\n    keys.forEach(function (layer) {\n      this.children[layer].forEach(function (child) {\n        //console.log(deltaTime);\n        child.update(deltaTime);\n      }, this, deltaTime);\n    }, _this, deltaTime);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"destroy\", function () {});\n\n  //set cycle ticks and times\n  this.ticks = 0;\n  this.updateFPS = 200;\n  this.updateTimeStart = Date.now();\n  this.updateDeltaTime = 0;\n  this.renderFPS = 200;\n  this.renderTimeStart = Date.now();\n  this.renderDeltaTime = 0; //setup canvas\n\n  this.elem = elem;\n\n  if (!elem) {\n    this.elem = document.createElement(\"canvas\");\n    document.querySelector(\"body\").appendChild(this.elem);\n  }\n\n  this.ctx = this.elem.getContext(\"2d\"); //setup children\n\n  this.children = [];\n  this.exportList = [];\n};\n\n\n\n//# sourceURL=webpack:///./src/lib/stage.js?");

/***/ }),

/***/ "./tests/bouncingBall/main.js":
/*!************************************!*\
  !*** ./tests/bouncingBall/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_lib_stage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/lib/stage */ \"./src/lib/stage.js\");\n/* harmony import */ var _src_lib_actor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/lib/actor */ \"./src/lib/actor.js\");\n/* harmony import */ var _src_lib_inputHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/lib/inputHandler */ \"./src/lib/inputHandler.js\");\n\n\n\n\n\n\n\n\n\n\nvar Platform =\n/*#__PURE__*/\nfunction (_Actor) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Platform, _Actor);\n\n  function Platform(bounds) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Platform);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Platform).call(this, bounds));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"render\", function () {\n      _this.ctx.fillStyle = \"white\";\n\n      _this.ctx.fillRect(_this.bounds.x, _this.bounds.y, _this.bounds.width, _this.bounds.height);\n    });\n\n    return _this;\n  }\n\n  return Platform;\n}(_src_lib_actor__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nvar Ball =\n/*#__PURE__*/\nfunction (_Actor2) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Ball, _Actor2);\n\n  function Ball(bounds) {\n    var _this2;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Ball);\n\n    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Ball).call(this, bounds));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this2), \"render\", function (dt) {\n      //clearframe\n      _this2.ctx.fillStyle = \"black\";\n\n      _this2.ctx.fillRect(_this2.px, _this2.py, _this2.bounds.width, _this2.bounds.height);\n\n      _this2.px = Math.round(_this2.bounds.x);\n      _this2.py = Math.round(_this2.bounds.y); //drawframe\n\n      _this2.ctx.fillStyle = \"#39ff14 \";\n\n      _this2.ctx.fillRect(_this2.px, _this2.py, _this2.bounds.width, _this2.bounds.height);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this2), \"update\", function (dt) {\n      //check bounce\n      // if (this.bounds.y >= 590) {\n      var collisions = _this2.stage.getCollisions(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this2));\n\n      var p = collisions.find(function (c) {\n        return c instanceof Platform;\n      });\n\n      if (p) {\n        console.log(\"BOOM\");\n        if (_this2.vy > 0) _this2.bounds.y = p.bounds.y - _this2.bounds.height;else _this2.bounds.y = p.bounds.y + _this2.bounds.height;\n        _this2.vy *= -0.75;\n      } //update position\n\n\n      _this2.vy += _this2.ay;\n      _this2.bounds.y += _this2.vy;\n      _this2.vx += _this2.ax;\n      _this2.bounds.x += _this2.vx;\n    });\n\n    _this2.bounds.width = 10;\n    _this2.bounds.height = 10;\n    _this2.ay = 0.05;\n    _this2.ax = 0.001;\n    _this2.vx = 0;\n    _this2.vy = 0;\n    _this2.px = _this2.bounds.x;\n    _this2.py = _this2.bounds.y;\n    return _this2;\n  }\n\n  return Ball;\n}(_src_lib_actor__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nvar stage = new _src_lib_stage__WEBPACK_IMPORTED_MODULE_6__[\"default\"](document.querySelector(\"#main\"));\nvar inp = new _src_lib_inputHandler__WEBPACK_IMPORTED_MODULE_8__[\"default\"](document.querySelector(\"#main\"), {\n  mousedown: function mousedown() {\n    stage.addActor(new Ball({\n      x: this.input.x,\n      y: this.input.y\n    }), 1);\n  }\n});\nstage.addActor(new Platform({\n  x: 150,\n  y: 300,\n  width: 300,\n  height: 10\n}));\nstage.addActor(new Platform({\n  x: 50,\n  y: 400,\n  width: 300,\n  height: 10\n}));\nstage.addActor(new Platform({\n  x: 100,\n  y: 500,\n  width: 300,\n  height: 10\n}));\n/*\r\nfor(let i = 0; i < 400; i += 15) {\r\n    for(let j = 0; j < 50; j +=5) {\r\n        stage.addActor(new Ball({ x: i, y: i + j}), j);\r\n    }\r\n}*/\n\nstage.start();\ninp.startHandler();\n\n//# sourceURL=webpack:///./tests/bouncingBall/main.js?");

/***/ })

/******/ });