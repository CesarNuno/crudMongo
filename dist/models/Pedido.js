"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var PedidoSquema = (0, _mongoose.Schema)({
  cliente: Number,
  servicios: Array,
  direccion: String,
  total: Number,
  estatus: String
}, {
  timestamps: false,
  versionKey: false
});
var _default = (0, _mongoose.model)("Pedido", PedidoSquema);
exports["default"] = _default;