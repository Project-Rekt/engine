"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputHandler = exports.Stage = exports.Actor = exports["default"] = void 0;

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
var Actor = _actor["default"],
    Stage = _stage["default"],
    InputHandler = _inputHandler["default"];
exports.InputHandler = InputHandler;
exports.Stage = Stage;
exports.Actor = Actor;