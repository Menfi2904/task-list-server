const express = require("express");
const listEditRouter = express.Router();


listEditRouter.post("/crear", (req, res) => {
  res.json("La tarea ha sido creada: ");
});

listEditRouter.delete("/borrar/:id", (req, res) => {
  res.json(`la tarea ${req.params.id} fue eliminada`);
});

listEditRouter.put("/actualizar/:id", (req, res) => {
  res.json(`la tarea ${req.params.id} fue actualizada`);
});

module.exports = listEditRouter;