let listaTareas = [
  { id: 1, descripcion: "hacer tarea de matematicas", completada: false },
  { id: 2, descripcion: "hacer tarea de programacion", completada: false },
  { id: 3, descripcion: "hacer tarea de fisica", completada: false },
];

function crearTarea(nuevaTarea) {
  listaTareas.push(nuevaTarea);
}

function verListaDetareasCompletas() {
  const completadas = listaTareas.filter((tarea) => tarea.completada === true);
  if (completadas.length === 0) {
    return `No hay tareas completadas, ponte al dia`;
  }
  const resultado = completadas.map(
    (tarea) =>
      `tarea completada: ID ${tarea.id} y su Descripcion ${tarea.descripcion}`
  );
  return resultado;
}

function verListaDetareasIncompletas() {
  const incompletas = listaTareas.filter((tarea) => tarea.completada === false);
  if (incompletas.length === 0) {
    return `No hay Tareas incompletas, estas al dia`;
  }
  const resultado = incompletas.map(
    (tarea) =>
      `Tareas incompletas: ID ${tarea.id} y su Descripcion ${tarea.descripcion}`
  );
  return resultado
}

function eliminarTarea(tareaId) {
  let nuevasTareas = listaTareas.filter((tarea) => tarea.id !== tareaId);
  listaTareas = nuevasTareas;
}

function actualizarTarea(id, nuevaTarea) {
  const index = listaTareas.findIndex((listaTareas) => listaTareas.id === id);
  if (index !== -1) {
    listaTareas[index] = { ...listaTareas[index], ...nuevaTarea };
    return `Tarea actualizada: ${listaTareas[index]}`;
  } else {
    return `No se encontro la tarea con id: ${id}, intenta nuevamente`;
  }
}

function buscarTareaPorId(id) {
  return listaTareas.find((tarea) => tarea.id === id);
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
  buscarTareaPorId,
};
