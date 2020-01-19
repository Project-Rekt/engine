"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actor = _interopRequireDefault(require("./lib/actor"));

var _inputHandler = _interopRequireDefault(require("./lib/inputHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Actor: _actor["default"],
  InputHandler: _inputHandler["default"]
};
exports["default"] = _default;