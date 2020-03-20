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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/tileditor/main.js");
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

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

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

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var superPropBase = __webpack_require__(/*! ./superPropBase */ \"./node_modules/@babel/runtime/helpers/superPropBase.js\");\n\nfunction _get(target, property, receiver) {\n  if (typeof Reflect !== \"undefined\" && Reflect.get) {\n    module.exports = _get = Reflect.get;\n  } else {\n    module.exports = _get = function _get(target, property, receiver) {\n      var base = superPropBase(target, property);\n      if (!base) return;\n      var desc = Object.getOwnPropertyDescriptor(base, property);\n\n      if (desc.get) {\n        return desc.get.call(receiver);\n      }\n\n      return desc.value;\n    };\n  }\n\n  return _get(target, property, receiver || target);\n}\n\nmodule.exports = _get;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/get.js?");

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

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n\nfunction _superPropBase(object, property) {\n  while (!Object.prototype.hasOwnProperty.call(object, property)) {\n    object = getPrototypeOf(object);\n    if (object === null) break;\n  }\n\n  return object;\n}\n\nmodule.exports = _superPropBase;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/superPropBase.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

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

/***/ "./src/lib/spriteActor.js":
/*!********************************!*\
  !*** ./src/lib/spriteActor.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpriteActor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _actor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actor */ \"./src/lib/actor.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction loadImage(_x) {\n  return _loadImage.apply(this, arguments);\n}\n\nfunction _loadImage() {\n  _loadImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(src) {\n    var img;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            img = new Image();\n            img.src = src;\n            return _context5.abrupt(\"return\", new Promise(function (res, rej) {\n              img.onload = function () {\n                res(img);\n              };\n            }));\n\n          case 3:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _loadImage.apply(this, arguments);\n}\n\nvar SpriteActor =\n/*#__PURE__*/\nfunction (_Actor) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(SpriteActor, _Actor);\n\n  function SpriteActor(bounds, _spriteObj) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SpriteActor);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SpriteActor).call(this, bounds, _spriteObj[\"name\"]));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"changeState\", function (state) {\n      _this.currentState = state;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"loadSpriteObj\", function (spriteObj) {\n      _this.properties = spriteObj.properties;\n      _this.states = spriteObj.states;\n\n      if (_this.states != {} && _this.properties != {}) {\n        ;\n\n        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n        /*#__PURE__*/\n        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  _context2.next = 2;\n                  return Promise.all(Object.keys(_this.states).map(\n                  /*#__PURE__*/\n                  function () {\n                    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n                    /*#__PURE__*/\n                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(s) {\n                      var img;\n                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                        while (1) {\n                          switch (_context.prev = _context.next) {\n                            case 0:\n                              _context.next = 2;\n                              return loadImage(_this.states[s].location);\n\n                            case 2:\n                              img = _context.sent;\n                              Object.assign(_this.states[s], {\n                                image: img\n                              });\n\n                            case 4:\n                            case \"end\":\n                              return _context.stop();\n                          }\n                        }\n                      }, _callee);\n                    }));\n\n                    return function (_x2) {\n                      return _ref2.apply(this, arguments);\n                    };\n                  }()));\n\n                case 2:\n                  console.log(_this.states);\n\n                case 3:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }))();\n      }\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"create\", function () {\n      if (_this.states != {} && _this.properties != {}) {\n        ;\n\n        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n        /*#__PURE__*/\n        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n            while (1) {\n              switch (_context4.prev = _context4.next) {\n                case 0:\n                  _context4.next = 2;\n                  return Promise.all(Object.keys(_this.states).map(\n                  /*#__PURE__*/\n                  function () {\n                    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(\n                    /*#__PURE__*/\n                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(s) {\n                      var img;\n                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                        while (1) {\n                          switch (_context3.prev = _context3.next) {\n                            case 0:\n                              _context3.next = 2;\n                              return loadImage(_this.states[s].location);\n\n                            case 2:\n                              img = _context3.sent;\n                              Object.assign(_this.states[s], {\n                                image: img\n                              });\n\n                            case 4:\n                            case \"end\":\n                              return _context3.stop();\n                          }\n                        }\n                      }, _callee3);\n                    }));\n\n                    return function (_x3) {\n                      return _ref4.apply(this, arguments);\n                    };\n                  }()));\n\n                case 2:\n                  console.log(_this.states);\n\n                case 3:\n                case \"end\":\n                  return _context4.stop();\n              }\n            }\n          }, _callee4);\n        }))();\n      }\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"render\", function (deltaTime) {\n      _this.ctx.clearRect(_this.px, _this.py, _this.bounds.width * _this.scale, _this.bounds.height * _this.scale);\n\n      var sstate = _this.states[_this.currentState];\n      _this.renderCount += deltaTime;\n\n      if (_this.renderCount > 1000 / sstate.rps) {\n        _this.renderCount = 0;\n\n        if (_this.frameCount >= sstate.frames.length) {\n          _this.frameCount = 0;\n\n          if (!sstate.loop) {\n            _this.changeState(\"idle\");\n          }\n        }\n\n        _this.frame = sstate.frames[_this.frameCount];\n        _this.bounds.width = _this.frame.width * _this.scale;\n        _this.bounds.height = _this.frame.height * _this.scale;\n\n        if (sstate.image) {\n          _this.current = sstate.image;\n        }\n\n        _this.frameCount++;\n      }\n\n      _this.px = Math.round(_this.bounds.x);\n      _this.py = Math.round(_this.bounds.y);\n      if (_this.frame && _this.current) _this.ctx.drawImage(_this.current, _this.frame.x, _this.frame.y, _this.frame.width, _this.frame.height, _this.px, _this.py, _this.frame.width * _this.scale, _this.frame.height * _this.scale);\n    });\n\n    _this.properties = _spriteObj.properties || {};\n    _this.states = _spriteObj.states || {\n      idle: {\n        location: null,\n        rps: 5,\n        loop: true,\n        frames: [{\n          x: 0,\n          y: 0,\n          width: 0,\n          height: 0\n        }]\n      }\n    };\n    _this.frames = _spriteObj.frames;\n    _this.currentState = Object.keys(_this.states)[0] || \"idle\";\n    _this.frameCount = 0;\n    _this.renderCount = 0;\n    _this.scale = 1;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SpriteActor, [{\n    key: \"destroy\",\n    value: function destroy() {\n      for (var i = 0; i < Object.keys(this.states).length; i++) {\n        console.log(this.states[Object.keys(this.states)[i]]);\n        this.states[Object.keys(this.states)[i]].image == null;\n      }\n\n      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SpriteActor.prototype), \"destroy\", this).call(this);\n    }\n  }]);\n\n  return SpriteActor;\n}(_actor__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/lib/spriteActor.js?");

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

/***/ "./tests/tileditor/assets/Code-Monkey.png":
/*!************************************************!*\
  !*** ./tests/tileditor/assets/Code-Monkey.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/Code-Monkey.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/Code-Monkey.png?");

/***/ }),

/***/ "./tests/tileditor/assets/Fence.png":
/*!******************************************!*\
  !*** ./tests/tileditor/assets/Fence.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/Fence.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/Fence.png?");

/***/ }),

/***/ "./tests/tileditor/assets/Pylon.png":
/*!******************************************!*\
  !*** ./tests/tileditor/assets/Pylon.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/Pylon.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/Pylon.png?");

/***/ }),

/***/ "./tests/tileditor/assets/ali.png":
/*!****************************************!*\
  !*** ./tests/tileditor/assets/ali.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ali.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/ali.png?");

/***/ }),

/***/ "./tests/tileditor/assets/car.png":
/*!****************************************!*\
  !*** ./tests/tileditor/assets/car.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/car.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/car.png?");

/***/ }),

/***/ "./tests/tileditor/assets/exchange_walking1.png":
/*!******************************************************!*\
  !*** ./tests/tileditor/assets/exchange_walking1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/exchange_walking1.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/exchange_walking1.png?");

/***/ }),

/***/ "./tests/tileditor/assets/grill_walking.png":
/*!**************************************************!*\
  !*** ./tests/tileditor/assets/grill_walking.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/grill_walking.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/grill_walking.png?");

/***/ }),

/***/ "./tests/tileditor/assets/harley.png":
/*!*******************************************!*\
  !*** ./tests/tileditor/assets/harley.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/harley.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/harley.png?");

/***/ }),

/***/ "./tests/tileditor/assets/lan.png":
/*!****************************************!*\
  !*** ./tests/tileditor/assets/lan.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/lan.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/lan.png?");

/***/ }),

/***/ "./tests/tileditor/assets/mason.png":
/*!******************************************!*\
  !*** ./tests/tileditor/assets/mason.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/mason.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/mason.png?");

/***/ }),

/***/ "./tests/tileditor/assets/protester.png":
/*!**********************************************!*\
  !*** ./tests/tileditor/assets/protester.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/protester.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/protester.png?");

/***/ }),

/***/ "./tests/tileditor/assets/rye_walking.png":
/*!************************************************!*\
  !*** ./tests/tileditor/assets/rye_walking.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/rye_walking.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/rye_walking.png?");

/***/ }),

/***/ "./tests/tileditor/assets/ta.png":
/*!***************************************!*\
  !*** ./tests/tileditor/assets/ta.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ta.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/ta.png?");

/***/ }),

/***/ "./tests/tileditor/assets/umbrella.png":
/*!*********************************************!*\
  !*** ./tests/tileditor/assets/umbrella.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/umbrella.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/umbrella.png?");

/***/ }),

/***/ "./tests/tileditor/assets/weeb_walking.png":
/*!*************************************************!*\
  !*** ./tests/tileditor/assets/weeb_walking.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/weeb_walking.png\";\n\n//# sourceURL=webpack:///./tests/tileditor/assets/weeb_walking.png?");

/***/ }),

/***/ "./tests/tileditor/main.js":
/*!*********************************!*\
  !*** ./tests/tileditor/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_lib_stage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/lib/stage */ \"./src/lib/stage.js\");\n/* harmony import */ var _src_lib_actor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/lib/actor */ \"./src/lib/actor.js\");\n/* harmony import */ var _src_lib_inputHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/lib/inputHandler */ \"./src/lib/inputHandler.js\");\n/* harmony import */ var _src_lib_spriteActor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/lib/spriteActor */ \"./src/lib/spriteActor.js\");\n/* harmony import */ var _spriteObjects_monkeySprite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./spriteObjects/monkeySprite */ \"./tests/tileditor/spriteObjects/monkeySprite.js\");\n/* harmony import */ var _spriteObjects_weebSprite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spriteObjects/weebSprite */ \"./tests/tileditor/spriteObjects/weebSprite.js\");\n/* harmony import */ var _spriteObjects_grillSprite__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spriteObjects/grillSprite */ \"./tests/tileditor/spriteObjects/grillSprite.js\");\n/* harmony import */ var _spriteObjects_ryeSprite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spriteObjects/ryeSprite */ \"./tests/tileditor/spriteObjects/ryeSprite.js\");\n/* harmony import */ var _spriteObjects_exchangeSprite__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./spriteObjects/exchangeSprite */ \"./tests/tileditor/spriteObjects/exchangeSprite.js\");\n/* harmony import */ var _spriteObjects_pylonSprite__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./spriteObjects/pylonSprite */ \"./tests/tileditor/spriteObjects/pylonSprite.js\");\n/* harmony import */ var _spriteObjects_carSprite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./spriteObjects/carSprite */ \"./tests/tileditor/spriteObjects/carSprite.js\");\n/* harmony import */ var _spriteObjects_protesterSprite__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./spriteObjects/protesterSprite */ \"./tests/tileditor/spriteObjects/protesterSprite.js\");\n/* harmony import */ var _spriteObjects_umbrellaSprite__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./spriteObjects/umbrellaSprite */ \"./tests/tileditor/spriteObjects/umbrellaSprite.js\");\n/* harmony import */ var _spriteObjects_fenceSprite__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./spriteObjects/fenceSprite */ \"./tests/tileditor/spriteObjects/fenceSprite.js\");\n/* harmony import */ var _spriteObjects_masonSprite__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./spriteObjects/masonSprite */ \"./tests/tileditor/spriteObjects/masonSprite.js\");\n/* harmony import */ var _spriteObjects_aliSprite__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./spriteObjects/aliSprite */ \"./tests/tileditor/spriteObjects/aliSprite.js\");\n/* harmony import */ var _spriteObjects_harleySprite__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./spriteObjects/harleySprite */ \"./tests/tileditor/spriteObjects/harleySprite.js\");\n/* harmony import */ var _spriteObjects_lanSprite__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./spriteObjects/lanSprite */ \"./tests/tileditor/spriteObjects/lanSprite.js\");\n/* harmony import */ var _spriteObjects_taSprite__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./spriteObjects/taSprite */ \"./tests/tileditor/spriteObjects/taSprite.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import Engine from \"engine\";\n\nvar Grid =\n/*#__PURE__*/\nfunction (_Actor) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Grid, _Actor);\n\n  function Grid(bx, by, tx, ty, color) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Grid);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Grid).call(this));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), \"render\", function () {\n      _this.ctx.beginPath();\n\n      _this.ctx.moveTo(_this.bx, _this.by);\n\n      _this.ctx.lineTo(_this.tx, _this.ty);\n\n      _this.ctx.strokeStyle = _this.color;\n\n      _this.ctx.stroke();\n    });\n\n    _this.bx = bx;\n    _this.by = by;\n    _this.tx = tx;\n    _this.ty = ty;\n    _this.color = color;\n    return _this;\n  }\n\n  return Grid;\n}(_src_lib_actor__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n\nvar TileSprite =\n/*#__PURE__*/\nfunction (_SpriteActor) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(TileSprite, _SpriteActor);\n\n  function TileSprite(bounds) {\n    var _this2;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, TileSprite);\n\n    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TileSprite).call(this, bounds, _spriteObjects_monkeySprite__WEBPACK_IMPORTED_MODULE_14__[\"default\"]));\n    _this2.ay = _this2.ax = 0;\n    _this2.vx = 0;\n    _this2.vy = 0;\n    return _this2;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TileSprite, [{\n    key: \"render\",\n    value: function render(dt) {\n      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TileSprite.prototype), \"render\", this).call(this, dt);\n\n      console.log(this.bounds);\n    }\n  }]);\n\n  return TileSprite;\n}(_src_lib_spriteActor__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n\nvar toggle = _spriteObjects_monkeySprite__WEBPACK_IMPORTED_MODULE_14__[\"default\"];\nvar fStage = new _src_lib_stage__WEBPACK_IMPORTED_MODULE_10__[\"default\"](document.querySelector(\"#fore\"));\nvar bStage = new _src_lib_stage__WEBPACK_IMPORTED_MODULE_10__[\"default\"](document.querySelector(\"#back\"));\nvar inp = new _src_lib_inputHandler__WEBPACK_IMPORTED_MODULE_12__[\"default\"](document.querySelector(\"#fore\"), {\n  mousedown: function () {\n    var _mousedown = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var x, y, i, gridX, gridY, sprite;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(rows);\n              x = this.input.x - 12;\n              y = this.input.y;\n              console.log(x, y);\n              i = 0;\n\n            case 5:\n              if (!(i < rows.length)) {\n                _context.next = 17;\n                break;\n              }\n\n              if (!(x <= rows[i][0] && x >= rows[i][1] && y <= rows[i][2] && y >= rows[i][3])) {\n                _context.next = 14;\n                break;\n              }\n\n              console.log(true);\n              console.log(rows[i]);\n              gridX = Math.floor((x - rows[i][0]) / 32) * 32;\n              gridY = Math.floor((y - rows[i][3]) / 32) * 32; // sprite.bounds = {\n              //     x: gridX + rows[i][0] - 20,\n              //     y: rows[i][3] - 16,\n              //     height: 32,\n              //     width: 32,\n              // }\n\n              sprite = new _src_lib_spriteActor__WEBPACK_IMPORTED_MODULE_13__[\"default\"]({\n                x: gridX + rows[i][0] - 20,\n                y: rows[i][3] - 16,\n                height: 32,\n                width: 32\n              }, toggle);\n              fStage.addActor(sprite);\n              return _context.abrupt(\"break\", 17);\n\n            case 14:\n              i++;\n              _context.next = 5;\n              break;\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function mousedown() {\n      return _mousedown.apply(this, arguments);\n    }\n\n    return mousedown;\n  }()\n});\ndocument.querySelector(\"#weebSprite\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_weebSprite__WEBPACK_IMPORTED_MODULE_15__[\"default\"];\n});\ndocument.querySelector(\"#monkeySprite\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_monkeySprite__WEBPACK_IMPORTED_MODULE_14__[\"default\"];\n});\ndocument.querySelector(\"#grillSprite\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_grillSprite__WEBPACK_IMPORTED_MODULE_16__[\"default\"];\n});\ndocument.querySelector(\"#exchangeSprite\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_exchangeSprite__WEBPACK_IMPORTED_MODULE_18__[\"default\"];\n});\ndocument.querySelector(\"#ryeSprite\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_ryeSprite__WEBPACK_IMPORTED_MODULE_17__[\"default\"];\n});\ndocument.querySelector(\"#pylon\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_pylonSprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"];\n});\ndocument.querySelector(\"#umbrella\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_umbrellaSprite__WEBPACK_IMPORTED_MODULE_22__[\"default\"];\n});\ndocument.querySelector(\"#protester\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_protesterSprite__WEBPACK_IMPORTED_MODULE_21__[\"default\"];\n});\ndocument.querySelector(\"#car\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_carSprite__WEBPACK_IMPORTED_MODULE_20__[\"default\"];\n});\ndocument.querySelector(\"#fence\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_fenceSprite__WEBPACK_IMPORTED_MODULE_23__[\"default\"];\n});\ndocument.querySelector(\"#mason\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_masonSprite__WEBPACK_IMPORTED_MODULE_24__[\"default\"];\n});\ndocument.querySelector(\"#lan\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_lanSprite__WEBPACK_IMPORTED_MODULE_27__[\"default\"];\n});\ndocument.querySelector(\"#ta\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_taSprite__WEBPACK_IMPORTED_MODULE_28__[\"default\"];\n});\ndocument.querySelector(\"#ali\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_aliSprite__WEBPACK_IMPORTED_MODULE_25__[\"default\"];\n});\ndocument.querySelector(\"#harley\").addEventListener(\"click\", function () {\n  toggle = _spriteObjects_harleySprite__WEBPACK_IMPORTED_MODULE_26__[\"default\"];\n});\ndocument.querySelector(\"#exportJson\").addEventListener(\"click\", function () {\n  var file = new Blob([JSON.stringify(fStage.exportList)], {\n    type: \"application/json\"\n  });\n  if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);else {\n    var a = document.createElement(\"a\"),\n        url = URL.createObjectURL(file);\n    a.href = url;\n    a.download = \"export.JSON\";\n    document.body.appendChild(a);\n    a.click();\n    setTimeout(function () {\n      document.body.removeChild(a);\n      window.URL.revokeObjectURL(url);\n    }, 0);\n  }\n});\n\nfunction loadImage(_x) {\n  return _loadImage.apply(this, arguments);\n}\n\nfunction _loadImage() {\n  _loadImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(src) {\n    var img;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            img = new Image();\n            img.src = src;\n            return _context2.abrupt(\"return\", new Promise(function (res, rej) {\n              img.onload = function () {\n                res(img);\n              };\n            }));\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _loadImage.apply(this, arguments);\n}\n\nfor (var _i = 0; _i <= 15; _i++) {\n  //drawing vertical lines\n  bStage.addActor(new Grid(600.032 + 32 * _i, 100, 20 + 32 * _i, 370.476, \"black\"));\n}\n\nvar rows = new Array(20);\nrows[0] = [1080, 600, 113.52, 98];\n\nfor (var i = 1; i < rows.length; i++) {\n  rows[i] = new Array(4);\n}\n\nfor (var i = 1; i < rows.length; i++) {\n  rows[i][0] = rows[i - 1][0] - 29.002;\n  rows[i][1] = rows[i - 1][1] - 29.002;\n  rows[i][2] = rows[i - 1][2] + 13.524;\n  rows[i][3] = rows[i - 1][3] + 13.524;\n}\n\nfor (var _i2 = 0; _i2 <= 20; _i2++) {\n  bStage.addActor(new Grid(20 + 29.002 * _i2, 370.476 - 13.524 * _i2, 500 + 29.002 * _i2, 370.476 - 13.524 * _i2, \"black\")); //console.log(20 + 29.002*i, 370.476 -13.524*i)\n}\n\nfStage.start();\nbStage.start();\ninp.startHandler();\n\n//# sourceURL=webpack:///./tests/tileditor/main.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/aliSprite.js":
/*!****************************************************!*\
  !*** ./tests/tileditor/spriteObjects/aliSprite.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ali-turret\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/ali.png */ \"./tests/tileditor/assets/ali.png\")[\"default\"],\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/aliSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/carSprite.js":
/*!****************************************************!*\
  !*** ./tests/tileditor/spriteObjects/carSprite.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"car-obstacle\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/car.png */ \"./tests/tileditor/assets/car.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/carSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/exchangeSprite.js":
/*!*********************************************************!*\
  !*** ./tests/tileditor/spriteObjects/exchangeSprite.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"exchange-student\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/exchange_walking1.png */ \"./tests/tileditor/assets/exchange_walking1.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 3,\n        y: 3,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 1,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 32,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 30,\n        width: 32,\n        height: 32\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/exchangeSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/fenceSprite.js":
/*!******************************************************!*\
  !*** ./tests/tileditor/spriteObjects/fenceSprite.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"fence-obstacle\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/Fence.png */ \"./tests/tileditor/assets/Fence.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/fenceSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/grillSprite.js":
/*!******************************************************!*\
  !*** ./tests/tileditor/spriteObjects/grillSprite.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"grill-student\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../assets/grill_walking.png */ \"./tests/tileditor/assets/grill_walking.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 3,\n        y: 3,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 1,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 32,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 30,\n        width: 32,\n        height: 32\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/grillSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/harleySprite.js":
/*!*******************************************************!*\
  !*** ./tests/tileditor/spriteObjects/harleySprite.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"harley-turret\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/harley.png */ \"./tests/tileditor/assets/harley.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/harleySprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/lanSprite.js":
/*!****************************************************!*\
  !*** ./tests/tileditor/spriteObjects/lanSprite.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"lan-turret\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/lan.png */ \"./tests/tileditor/assets/lan.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/lanSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/masonSprite.js":
/*!******************************************************!*\
  !*** ./tests/tileditor/spriteObjects/masonSprite.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"mason-turret\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/mason.png */ \"./tests/tileditor/assets/mason.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/masonSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/monkeySprite.js":
/*!*******************************************************!*\
  !*** ./tests/tileditor/spriteObjects/monkeySprite.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"monkey-student\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/Code-Monkey.png */ \"./tests/tileditor/assets/Code-Monkey.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 3,\n        y: 3,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 1,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 32,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 32,\n        width: 32,\n        height: 32\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/monkeySprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/protesterSprite.js":
/*!**********************************************************!*\
  !*** ./tests/tileditor/spriteObjects/protesterSprite.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"protester-obstacle\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/protester.png */ \"./tests/tileditor/assets/protester.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/protesterSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/pylonSprite.js":
/*!******************************************************!*\
  !*** ./tests/tileditor/spriteObjects/pylonSprite.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"pylon-obstacle\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/Pylon.png */ \"./tests/tileditor/assets/Pylon.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 0,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 0,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 0,\n        width: 32,\n        height: 32\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/pylonSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/ryeSprite.js":
/*!****************************************************!*\
  !*** ./tests/tileditor/spriteObjects/ryeSprite.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"normie-student\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/rye_walking.png */ \"./tests/tileditor/assets/rye_walking.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 3,\n        y: 3,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 1,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 32,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 32,\n        width: 32,\n        height: 32\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/ryeSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/taSprite.js":
/*!***************************************************!*\
  !*** ./tests/tileditor/spriteObjects/taSprite.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ta-turret\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/ta.png */ \"./tests/tileditor/assets/ta.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/taSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/umbrellaSprite.js":
/*!*********************************************************!*\
  !*** ./tests/tileditor/spriteObjects/umbrellaSprite.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"umbrella-obstacle\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/umbrella.png */ \"./tests/tileditor/assets/umbrella.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 0,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 65,\n        y: 0,\n        width: 64,\n        height: 64\n      }, {\n        x: 0,\n        y: 64,\n        width: 64,\n        height: 64\n      }, {\n        x: 64,\n        y: 64,\n        width: 64,\n        height: 64\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/umbrellaSprite.js?");

/***/ }),

/***/ "./tests/tileditor/spriteObjects/weebSprite.js":
/*!*****************************************************!*\
  !*** ./tests/tileditor/spriteObjects/weebSprite.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"weeb-student\",\n  properties: {},\n  states: {\n    idle: {\n      location: \"/\" + __webpack_require__(/*! ../../tileditor/assets/weeb_walking.png */ \"./tests/tileditor/assets/weeb_walking.png\"),\n      //location of sprites\n      rps: 5,\n      //refresh per second\n      loop: true,\n      //will continue to loop\n      frames: [{\n        x: 3,\n        y: 3,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 1,\n        width: 32,\n        height: 32\n      }, {\n        x: 0,\n        y: 32,\n        width: 32,\n        height: 32\n      }, {\n        x: 32,\n        y: 30,\n        width: 32,\n        height: 32\n      }]\n    }\n  }\n});\n\n//# sourceURL=webpack:///./tests/tileditor/spriteObjects/weebSprite.js?");

/***/ })

/******/ });