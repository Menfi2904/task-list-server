const express = require("express");
const listViewRouter = express.Router();
const funcionTareas = require("./listatareas");

//Middleware que nos permite validar que las rutas sean correctas
function validarRutas(req, res, next) {
  const rutasValidas = ["/", "/completas", "/incompletas"];
  if (rutasValidas.includes(req.path)) {
    next();
  } else {
    return res.status(402).json({
      error: "Ruta Invalida",
      message:
        "Por favor utiliza una de las rutas validas: /, /completas o /incompletas",
    });
  }
}

listViewRouter.use(validarRutas);

listViewRouter.get("/", (req, res) => {
  res.json(funcionTareas.imprimirTareasCompletas());
});

listViewRouter.get("/completas", (req, res) => {
  res.json(funcionTareas.verListaDetareasCompletas());
});

listViewRouter.get("/incompletas", (req, res) => {
  res.json(funcionTareas.verListaDetareasIncompletas());
});

module.exports = listViewRouter;
