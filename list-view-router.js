const express = require("express");
const listViewRouter = express.Router();

listViewRouter.get("/completas", (req, res) => {
  res.send("Lista de tareas completas");
});

listViewRouter.get("/incompletas", (req, res) => {
  res.send("Lista de tareas incompletas");
});


module.exports = listViewRouter;