"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return (0, _mongoose.connect)("mongodb+srv://cgnuno:C3sar1002*@cluster0.kpqh9ex.mongodb.net/?retryWrites=true&w=majority");
      case 3:
        db = _context.sent;
        _context.next = 9;
        break;
      case 6:
        _context.prev = 6;
        _context.t0 = _context["catch"](0);
        console.log(_context.t0);
      case 9:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 6]]);
}))();