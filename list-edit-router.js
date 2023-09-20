const express = require("express");
const listEditRouter = express.Router();
const funcionTareasEditar = require("./listatareas");


// Ruta para hacer solicitudes .post esta nos sirve para Crear una nueva Tarea, enviandole un body
// en formato Json
listEditRouter.post("/crear", (req, res) => {
  funcionTareasEditar.crearTarea(req.body);
  res.json({
    status: 200,
    message: "La tarea ha sido creada",
    data: req.body,
  });
});

// Ruta para hacer solicitudes .delete esta nos sirve para Borrar una tarea por medio del id
listEditRouter.delete("/borrar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tareaExistente = funcionTareasEditar.buscarTareaPorId(id);
  if (!tareaExistente) {
    res.status(404).json({
      status: 404,
      message: `No puedes borrar la tarea con id ${id} porque no existe`,
    });
  } else {
    funcionTareasEditar.eliminarTarea(id);
    res.json({
      message: `la tarea con id ${id} ha sido eliminada`,
    });
  }
});

// Ruta para hacer solicitudes .put esta nos sirve para Actualizar una tarea mediante el id
listEditRouter.put("/actualizar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const siExisteTarea = funcionTareasEditar.buscarTareaPorId(id);
  if (!siExisteTarea) {
    res.status(404).json({
      status: 404,
      message: `No se encontro la tarea con ID ${id}, intenta nuevamente`,
    });
  } else {
    funcionTareasEditar.actualizarTarea(id, req.body);
    res.json({
      status: 200,
      message: `la tarea con id ${req.params.id} fue editada exitosamente`,
    });
  }
});

// exportando los endpoints al servidor principal
module.exports = listEditRouter;
