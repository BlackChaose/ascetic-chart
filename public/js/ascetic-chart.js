"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parser = require("@babel/parser");

var _generator = _interopRequireDefault(require("@babel/generator"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var code = 'class Example {}';
var ast = (0, _parser.parse)(code);
var output = (0, _generator["default"])(ast, {
  /* options */
}, code);

var asceticChart = function () {
  var recFabric = function recFabric(ctx, arrData) {
    var dy = parseInt(arrData.height);
    var wdh = parseInt(arrData.width);
    var xdim = parseInt(arrData['x-dim']);
    var ydim = parseInt(arrData['y-dim']);

    _lodash["default"].forEach(arrData.arrData, function (el) {
      console.log(el);
      ctx.fillStyle = el.color;
      ctx.fillRect(parseInt(el.index - 1) * xdim, wdh, dy - el.height * ydim);
      return;
    });

    return ctx;
  };

  var Run = function Run(arr) {
    obj = document.getElementById(arr.idName);
    var cvs = document.createElement('canvas');
    cvs.className = "ascetic-chart";
    cvs.style.width = arr.width;
    cvs.style.height = arr.height;
    cvs.style.backgroundColor = arr['background-color'];
    obj.append(cvs);
    var ctx = cvs.getContext("2d");
    recFabric(ctx, arr);
  };

  return {
    Run: Run
  };
}();

var _default = asceticChart;
exports["default"] = _default;