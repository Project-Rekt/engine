"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Actor = function Actor(stage, options) {
  var _this = this;

  _classCallCheck(this, Actor);

  _defineProperty(this, "render", function (deltaTime) {});

  _defineProperty(this, "update", function (deltaTime) {});

  _defineProperty(this, "destroy", function () {
    //Clear boundingbox
    _this.ctx.clearRect(_this.x, _this.y, _this.width, _this.height); //Remove actor from stage


    _this.stage.removeActor(_this);
  });

  //Add actor to stage and stage context
  this.stage = stage;
  this.ctx = stage.ctx; //Dimensions of actor (has default bounds)

  this.bounds = options.bounds | {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
};

exports["default"] = Actor;