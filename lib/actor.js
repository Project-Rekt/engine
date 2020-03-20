"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Actor = function Actor(bounds, name) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Actor);
  (0, _defineProperty2["default"])(this, "create", function () {});
  (0, _defineProperty2["default"])(this, "render", function (deltaTime) {});
  (0, _defineProperty2["default"])(this, "update", function (deltaTime) {});
  (0, _defineProperty2["default"])(this, "destroy", function () {
    //Clear boundingbox
    _this.ctx.clearRect(_this.bounds.x, _this.bounds.y, _this.bounds.width, _this.bounds.height); //Remove actor from stage


    _this.stage.removeActor(_this);
  });
  //Add actor to stage and stage context
  this.stage;
  this.ctx;
  this.name = name; //Dimensions of actor (has default bounds)

  this.bounds = bounds || {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
};

exports["default"] = Actor;