"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _expressSession = _interopRequireDefault(require("express-session"));
var _Pedido = _interopRequireDefault(require("../models/Pedido"));
var _pedidos = require("../controllers/pedidos.controller");
var router = (0, _express.Router)();
router.get("/", function (req, res) {
  if (res.session) {
    req.session.destroy();
  }
  console.log(res.locals);
  res.render("index", {
    layout: "login"
  });
});
router.get("/logout", function (req, res) {
  if (res.session) {
    req.session.destroy();
  }
  console.log(res.locals);
  res.redirect("/");
});
router.get("/prueba", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(res.locals);
          res.send("Exito");
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post("/clientes/verificar", _pedidos.clienteVerificar);
router.post("/usuario/verificar", _pedidos.usuarioVerificar);
router.get("/usuario/:id", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pedido, clientes, pedidos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _pedidos.conseguirEsp)(req.params.id);
        case 2:
          pedido = _context2.sent;
          _context2.next = 5;
          return fetch("http://18.234.172.127/apiRest/clientes").then(function (response) {
            return response.json();
          }).then(function (response) {
            return response;
          });
        case 5:
          clientes = _context2.sent;
          _context2.next = 8;
          return (0, _pedidos.remplazar)(pedido, clientes);
        case 8:
          pedidos = _context2.sent;
          res.render("menuUsuarios", {
            pedidos: pedidos
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get("/pedidos", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pedido, clientes, pedidos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          console.log(res.locals);
          if (!(req.session.nivel != 0)) {
            _context3.next = 14;
            break;
          }
          _context3.next = 4;
          return (0, _pedidos.conseguir)();
        case 4:
          pedido = _context3.sent;
          _context3.next = 7;
          return fetch("http://18.234.172.127/apiRest/clientes").then(function (response) {
            return response.json();
          }).then(function (response) {
            return response;
          });
        case 7:
          clientes = _context3.sent;
          _context3.next = 10;
          return (0, _pedidos.remplazar)(pedido, clientes);
        case 10:
          pedidos = _context3.sent;
          res.render("verPedidos", {
            pedidos: pedidos
          });
          _context3.next = 15;
          break;
        case 14:
          res.render("index");
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get("/pedidos/agregar", function (req, res) {
  res.render("agregarPedido");
});
router.post("/pedidos/add", _pedidos.pedidoGuardar);
router.get("/pedido/:id/completar", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pedido;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Pedido["default"].findById(req.params.id);
        case 2:
          pedido = _context4.sent;
          pedido.estatus = "Completado";
          _context4.next = 6;
          return pedido.save();
        case 6:
          res.redirect("/pedidos");
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.get("/pedido/:id/cancelar", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pedido;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Pedido["default"].findById(req.params.id);
        case 2:
          pedido = _context5.sent;
          pedido.estatus = "Cancelado";
          _context5.next = 6;
          return pedido.save();
        case 6:
          if (res.locals.nivel == 1) res.redirect("/pedidos");else res.redirect("/usuario/" + res.locals.idS);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.get("/usuarios/registrar", function (req, res) {
  res.render("registro", {
    layout: "login"
  });
});
router.post("/usuarios/registrado", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var myHeaders, raw, requestOptions;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          myHeaders = new Headers();
          myHeaders.append("Content-Type", "text/plain");
          raw = '{\r\n    "usuario": "' + req.body.usuario + '",\r\n    "contrasena": "' + req.body.contrasena + '",\r\n    "telefono": "' + req.body.telefono + '",\r\n    "correo": "' + req.body.correo + '",\r\n    "direccion": "' + req.body.direccion + '"\r\n}';
          requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };
          _context6.next = 6;
          return fetch("http://18.234.172.127/apiRest/clientes/", requestOptions).then(function (response) {
            return response.text();
          }).then(function (result) {
            return console.log(result);
          })["catch"](function (error) {
            return console.log("error", error);
          });
        case 6:
          res.redirect("/");
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router.get("/err", function (req, res) {
  res.render("err", {
    layout: "login"
  });
});
var _default = router;
exports["default"] = _default;