"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var datos;
fetch("http://18.234.172.127/apiRest/servicios/").then(function (response) {
  return response.text();
}).then(function (response) {
  return servicios(response);
})["catch"](function (error) {
  return console.log("error", error);
});
function servicios(_x) {
  return _servicios.apply(this, arguments);
}
function _servicios() {
  _servicios = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(datos) {
    var div;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          datos = JSON.parse(datos);
          div = document.getElementById("con");
          datos["data"].forEach(function (element) {
            var lbl = document.createElement("label");
            var inp = document.createElement("input");
            inp.type = "checkbox";
            inp.name = "servicios";
            inp.value = element.nombre;
            inp.setAttribute("Precio", element.precio);
            inp.addEventListener('change', function (Event) {
              if (Event.currentTarget.checked) {
                valor(inp.getAttribute("Precio"), true);
              } else {
                valor(inp.getAttribute("Precio"), false);
              }
            });
            lbl.append(inp);
            lbl.append(element.nombre);
            div.append(lbl);
            div.append(document.createElement("br"));
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _servicios.apply(this, arguments);
}
function valor(val, chk) {
  var t = document.getElementById("total");
  var total = parseFloat(t.value);
  val = parseFloat(val);
  console.log(chk);
  if (chk) {
    total += val;
  } else {
    total -= val;
  }
  t.value = total;
}