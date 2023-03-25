"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Pedido = _interopRequireDefault(require("../models/Pedido"));
function test() {
  return _test.apply(this, arguments);
}
function _test() {
  _test = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var a;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Pedido["default"].find().lean();
        case 2:
          a = _context.sent;
          table(response);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _test.apply(this, arguments);
}
function table(data) {
  var main = document.getElementById("main");
  var tb = document.createElement("table");
  tb.className = "table";
  var tr = document.createElement("tr");
  var tam = Object.keys(data[0]);
  tam.forEach(function (element) {
    var th = document.createElement("th");
    th.innerText = element;
    tr.append(th);
  });
  tb.append(tr);
  data.forEach(function (element) {
    tr = document.createElement("tr");
    tam.forEach(function (arr) {
      var td = document.createElement("td");
      td.innerText = element[arr];
      tr.append(td);
    });
    for (i = 0; i != 2; i++) {
      var btn = document.createElement("button");
      if (i == 1) btn.innerText = "Modificar";else btn.innerText = "Eliminar";
      tr.append(btn);
    }
    tb.append(tr);
  });
  main.append(tb);
}
test();