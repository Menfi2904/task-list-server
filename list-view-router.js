const express = require("express");
const listViewRouter = express.Router();
const funcionTareas = require("./listatareas");

listViewRouter.get("/completas", (req, res) => {
  res.json(funcionTareas.verListaDetareasCompletas());
});

listViewRouter.get("/incompletas", (req, res) => {
  res.json(funcionTareas.verListaDetareasIncompletas());
});

listViewRouter.get("/", (req, res) => {
  res.json(funcionTareas.imprimirTareasCompletas());
});

module.exports = listViewRouter;
