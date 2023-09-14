let listaTareas = [
  { id: 1, descripcion: "hacer tarea de matematicas", completada: false },
  { id: 2, descripcion: "hacer tarea de programacion", completada: false },
  { id: 3, descripcion: "hacer tarea de fisica", completada: false },
];

function crearTarea(nuevaTarea) {
  listaTareas.push(nuevaTarea);
}

function verListaDetareasCompletas() {
  const completada = listaTareas.filter((tarea) => tarea.completada === true);
  const resultado = completada.map((tarea) => {
    return `Tarea completada: ${tarea.id} - ${tarea.descripcion}`;
  });
  return resultado;
}

function verListaDetareasIncompletas() {
  const incompletas = listaTareas.filter((tarea) => tarea.completada === false);
  const resultado = incompletas.map((tarea) => {
    return `Tarea Incompleta: ${tarea.id} - ${tarea.descripcion}`;
  });
  return resultado;
}

function eliminarTarea(tareaId) {
  let nuevasTareas = listaTareas.filter((tarea) => tarea.id !== tareaId);
  listaTareas = nuevasTareas;
}

function actualizarTarea(id, nuevoCompletada) {
  if (id >= 0 && id < listaTareas.length) {
    listaTareas[id].completada = nuevoCompletada;
  }
}

function imprimirTareasCompletas() {
  return listaTareas;
}

module.exports = {
  verListaDetareasCompletas,
  verListaDetareasIncompletas,
  crearTarea,
  eliminarTarea,
  actualizarTarea,
  imprimirTareasCompletas,
};
