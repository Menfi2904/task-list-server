const express = require("express");
const app = express();
const port = 3000;
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use(express.json());
app.use("/listadetareas", listViewRouter);
app.use("/editartareas", listEditRouter);


app.get("/" , (req, res) =>{
  res.send("<h1>¡Hola y bienvenidos al servidor de lista de tareas! </h1>")
})


app.listen(port, () => {
  console.log(`el servidor inicio correctamente en el port ${port}`);
});
