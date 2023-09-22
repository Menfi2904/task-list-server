const express = require("express");
const app = express();
const port = 3000;
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");
const buscarTareas = require("./buscartarea")

app.use(express.json());

//middleware para validar que el metodo HTTP incluye uno de los que estamos usando
const metodosHTTPermitidos = (req, res, next)=>{
const metodosHTTP = ['GET' , 'POST', 'PUT', 'DELETE']
if (metodosHTTP.includes(req.method)){
next()
}else{
  res.status(400).json({error: 'Metodo HTTP no permitido'})
}
}

app.use(metodosHTTPermitidos);


app.use("/listadetareas", listViewRouter);
app.use("/editartareas", listEditRouter);
app.use("/buscartarea" , buscarTareas);


app.get("/" , (req, res) =>{
  res.send("<h1>¡Hola y bienvenidos al servidor de lista de tareas! </h1>")
})


app.listen(port, () => {
  console.log(`el servidor inicio correctamente en el port ${port}`);
});
