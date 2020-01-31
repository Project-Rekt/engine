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
Object.defineProperty(exports, "Stage", {
  enumerable: true,
  get: function get() {
    return _stage["default"];
  }
});
Object.defineProperty(exports, "InputHandler", {
  enumerable: true,
  get: function get() {
    return _inputHandler["default"];
  }
});
exports["default"] = void 0;

var _actor = _interopRequireDefault(require("./lib/actor"));

var _stage = _interopRequireDefault(require("./lib/stage"));

var _inputHandler = _interopRequireDefault(require("./lib/inputHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Actor: _actor["default"],
  InputHandler: _inputHandler["default"],
  Stage: _stage["default"]
};
exports["default"] = _default;