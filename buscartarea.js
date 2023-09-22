const express = require("express");
const buscarTareas = express.Router();
const funcionTareas = require("./listatareas");

// middleware para validar que el numero enviado como parametro sea un numero positivo, para buscar una tarea
function validarIdParametro(req, res, next) {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      error: "ingresa un numero valido",
    });
  } else {
    next();
  }
}

buscarTareas.get("/:id", validarIdParametro, (req, res) => {
  const id = parseInt(req.params.id);
  const tareaBuscada = funcionTareas.buscarTareaPorId(id);
  if (!tareaBuscada) {
    res.status(400).json({
      error: "no se encontro la tarea con ese id, porque no existe",
    });
  } else {
    res.json(funcionTareas.buscarTareaPorId(id));
  }
});

module.exports = buscarTareas;
