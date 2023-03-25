"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clienteVerificar = clienteVerificar;
exports.conseguir = conseguir;
exports.conseguirEsp = conseguirEsp;
exports.conseguirId = conseguirId;
exports.pedidoGuardar = pedidoGuardar;
exports.remplazar = remplazar;
exports.usuarioVerificar = usuarioVerificar;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Pedido = _interopRequireDefault(require("../models/Pedido"));
var _expressSession = _interopRequireDefault(require("express-session"));
function conseguir() {
  return _conseguir.apply(this, arguments);
}
function _conseguir() {
  _conseguir = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Pedido["default"].find().lean();
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _conseguir.apply(this, arguments);
}
function conseguirEsp(_x) {
  return _conseguirEsp.apply(this, arguments);
}
function _conseguirEsp() {
  _conseguirEsp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Pedido["default"].find({
            cliente: id
          }).lean();
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _conseguirEsp.apply(this, arguments);
}
function conseguirId(_x2) {
  return _conseguirId.apply(this, arguments);
}
function _conseguirId() {
  _conseguirId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _Pedido["default"].find({
            _id: id
          });
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _conseguirId.apply(this, arguments);
}
function pedidoGuardar(_x3, _x4) {
  return _pedidoGuardar.apply(this, arguments);
}
function _pedidoGuardar() {
  _pedidoGuardar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pedido, guardado;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          pedido = (0, _Pedido["default"])(req.body);
          console.log(pedido);
          pedido.cliente = res.locals.idS;
          pedido.estatus = "En Proceso";
          pedido.total = req.body.total;
          _context4.next = 7;
          return pedido.save();
        case 7:
          guardado = _context4.sent;
          res.redirect("/usuario/" + res.locals.idS);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _pedidoGuardar.apply(this, arguments);
}
function clienteVerificar(_x5, _x6) {
  return _clienteVerificar.apply(this, arguments);
}
function _clienteVerificar() {
  _clienteVerificar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var us, ps, id, clientes, Jclientes, val;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          us = req.body.usNombre;
          ps = req.body.usPass;
          _context5.next = 4;
          return fetch("http://18.234.172.127/apiRest/clientes/").then(function (response) {
            return response.text();
          }).then(function (response) {
            return response;
          });
        case 4:
          clientes = _context5.sent;
          try {
            Jclientes = JSON.parse(clientes);
            val = false;
            Jclientes["data"].forEach(function (element) {
              if (element.usuario == us) if (element.contrasena == ps) {
                val = true;
                id = element.idCl;
              }
            });
            if (val) {
              req.session.user = us;
              req.session.nivel = 0;
              req.session.idS = id;
              res.redirect("/usuario/" + id);
            } else {
              res.redirect("/err");
            }
          } catch (error) {
            console.log(error);
          }
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _clienteVerificar.apply(this, arguments);
}
function usuarioVerificar(_x7, _x8) {
  return _usuarioVerificar.apply(this, arguments);
}
function _usuarioVerificar() {
  _usuarioVerificar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var us, ps, id, usuarios, Jusuarios, val;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          us = req.body.adNombre;
          ps = req.body.adPass;
          _context6.next = 4;
          return fetch("http://18.234.172.127/apiRest/usuarios/").then(function (response) {
            return response.text();
          }).then(function (response) {
            return response;
          });
        case 4:
          usuarios = _context6.sent;
          try {
            Jusuarios = JSON.parse(usuarios);
            val = false;
            Jusuarios["data"].forEach(function (element) {
              if (element.usuario == us) if (element.contrasena == ps) {
                val = true;
                id = element.idUs;
              }
            });
            if (val) {
              req.session.user = us;
              req.session.nivel = 1;
              req.session.idS = id;
              res.redirect("/pedidos");
            } else {
              res.redirect("/err");
            }
          } catch (error) {
            console.log(error);
          }
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _usuarioVerificar.apply(this, arguments);
}
function remplazar(_x9, _x10) {
  return _remplazar.apply(this, arguments);
}
function _remplazar() {
  _remplazar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(ped, cli) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          cli.data.forEach(function (cliente) {
            ped.forEach(function (pedido) {
              if (pedido.cliente == cliente.idCl) {
                pedido.cliente = cliente.usuario;
                pedido.direccion = cliente.direccion;
              }
            });
          });
          return _context7.abrupt("return", ped);
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _remplazar.apply(this, arguments);
}