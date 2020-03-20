"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpriteActor = exports.InputHandler = exports.Stage = exports.Actor = exports["default"] = void 0;

var _actor = _interopRequireDefault(require("./lib/actor"));

var _spriteActor = _interopRequireDefault(require("./lib/spriteActor"));

var _stage = _interopRequireDefault(require("./lib/stage"));

var _inputHandler = _interopRequireDefault(require("./lib/inputHandler"));

var _default = {
  Actor: _actor["default"],
  InputHandler: _inputHandler["default"],
  Stage: _stage["default"],
  SpriteActor: _spriteActor["default"]
};
exports["default"] = _default;
var Actor = _actor["default"],
    Stage = _stage["default"],
    InputHandler = _inputHandler["default"],
    SpriteActor = _spriteActor["default"];
exports.SpriteActor = SpriteActor;
exports.InputHandler = InputHandler;
exports.Stage = Stage;
exports.Actor = Actor;