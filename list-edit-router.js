const express = require("express");
const listEditRouter = express.Router();
const funcionTareasEditar = require("./listatareas");

//Middleware que maneja errores retornando un código de respuesta 400:
//Solicitudes POST y PUT con el cuerpo vacio
//Solicitudes POST y PUT que tengan información no valida
function manejarErrores(req, res, next) {
  if (req.method === "POST") {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        errorMessage: "el cuerpo no puede estar vacio, intenta nuevamente",
      });
    }
  }
  if (req.method === "POST" && (!req.body.id || !req.body.descripcion)) {
    return res.status(400).json({
      errorMessage:
        "para crear una tarea debes agregar un id y una descripcion",
    });
  }
  if (req.method === "PUT") {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ errorMessage: "El cuerpo de la tarea no puede estar vacio" });
    }
  }
  if (req.method === "PUT" && (!req.body.descripcion || !req.body.completada)) {
    return res
      .status(400)
      .json({
        errorMessage:
          "Debes agregar una descripcion y un estado de completada validos",
      });
  }

  next();
}

listEditRouter.post("/crear", manejarErrores, (req, res) => {
  const nuevaTarea = { ...req.body, completada: false };
  funcionTareasEditar.crearTarea(nuevaTarea);
  res.json({
    status: 200,
    message: "La tarea ha sido creada",
    data: req.body,
  });
});

listEditRouter.put("/actualizar/:id", manejarErrores, (req, res) => {
  const id = parseInt(req.params.id);
  const tareaExistente = funcionTareasEditar.buscarTareaPorId(id);
  if (!tareaExistente) {
    res.status(404).json({
      status: 404,
      message: `No puedes actualizar la tarea con id ${id} porque no existe`,
    });
  } else {
    funcionTareasEditar.actualizarTarea(id, req.body);
    res.json({
      status: 200,
      message: `la tarea con id ${req.params.id} fue editada exitosamente`,
    });
  }
});

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

module.exports = listEditRouter;
