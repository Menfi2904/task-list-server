const express = require("express");
const listViewRouter = express.Router();
const funcionTareas = require("./listatareas");


listViewRouter.get("/", (req, res) => {
  res.json(funcionTareas.imprimirTareasCompletas());
});


listViewRouter.get("/buscar/:id" , (req, res) =>{
  const id = parseInt(req.params.id)
  res.json(funcionTareas.buscarTareaPorId(id)) 
})


listViewRouter.get("/completas", (req, res) => {
  res.json(funcionTareas.verListaDetareasCompletas());
});

listViewRouter.get("/incompletas", (req, res) => {
  res.json(funcionTareas.verListaDetareasIncompletas());
});



module.exports = listViewRouter;
