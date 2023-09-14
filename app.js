const express = require("express");
const app = express();
const port = 3000;
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use(express.json());

app.use("/listadetareas", listViewRouter);
app.use("/editartareas", listEditRouter);

app.listen(port, () => {
  console.log(`el servidor inicio correctamente en el port ${port}`);
});