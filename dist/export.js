"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Actor", {
  enumerable: true,
  get: function get() {
    return _actor["default"];
  }
});
Object.defineProperty(exports, "InputHandler", {
  enumerable: true,
  get: function get() {
    return _inputHandler["default"];
  }
});

var _actor = _interopRequireDefault(require("./lib/actor"));

var _inputHandler = _interopRequireDefault(require("./lib/inputHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }