const express = require("express");
const listViewRouter = express.Router();
const funcionTareas = require("./listatareas");

// metodo .get para para ver completa la lista de tareas
listViewRouter.get("/", (req, res) => {
  res.json(funcionTareas.imprimirTareasCompletas());
});

// metodo .get para buscar una tarea pasandole por parametro un id
listViewRouter.get("/buscar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(funcionTareas.buscarTareaPorId(id));
});

//con la siguiente peticion podemos ver la lista de tareas completas
listViewRouter.get("/completas", (req, res) => {
  res.json(funcionTareas.verListaDetareasCompletas());
});

//con la siguiente peticion podemos ver la lista de tareas incompletas
listViewRouter.get("/incompletas", (req, res) => {
  res.json(funcionTareas.verListaDetareasIncompletas());
});

// exportando los endpoints al servidor principal
module.exports = listViewRouter;
