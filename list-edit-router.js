const express = require("express");
const listEditRouter = express.Router();
const funcionTareasEditar = require("./listatareas");

listEditRouter.post("/crear", (req, res) => {
  funcionTareasEditar.crearTarea(req.body);
  res.json({
    status: 200,
    message: "La tarea ha sido creada",
    data: req.body,
  });
});

listEditRouter.delete("/borrar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  funcionTareasEditar.eliminarTarea(id);
  res.json({
    message: `la tarea con id ${id} ha sido eliminada`,
  });
});

listEditRouter.put("/actualizar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nuevoCompletada } = req.body;
  if (nuevoCompletada !== undefined) {
    funcionTareasEditar.actualizarTarea(id, nuevoCompletada);
    res.json({
      message: `la tarea ${id} ha sido actualizada a ${nuevoCompletada}`,
    });
  }
});

module.exports = listEditRouter;
