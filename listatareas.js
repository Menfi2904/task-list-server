// array con una lista de Tareas
let listaTareas = [
  { id: 1, descripcion: "hacer tarea de matematicas", completada: false },
  { id: 2, descripcion: "hacer tarea de programacion", completada: false },
  { id: 3, descripcion: "hacer tarea de fisica", completada: false },
];

// Funcion para crear nuevas tareas
function crearTarea(nuevaTarea) {
  listaTareas.push(nuevaTarea);
}

// Funcion para buscar una tarea mediante su id
function buscarTareaPorId(id) {
  const tareaBuscada = listaTareas.find((tarea) => tarea.id === id);
  if (!tareaBuscada) {
    return `la tarea con id ${id} no fue encontrada`;
  }
  return tareaBuscada;
}

// Funcion para ver la lista de tareas completas = true
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

// Funcion para ver la lista de tareas incompletas = false
function verListaDetareasIncompletas() {
  const incompletas = listaTareas.filter((tarea) => tarea.completada === false);
  if (incompletas.length === 0) {
    return `No hay Tareas incompletas, estas al dia`;
  }
  const resultado = incompletas.map(
    (tarea) =>
      `Tareas incompletas: ID ${tarea.id} y su Descripcion ${tarea.descripcion}`
  );
  return resultado;
}

// Funcion para eliminar una tarea mediante el id
function eliminarTarea(tareaId) {
  let nuevasTareas = listaTareas.filter((tarea) => tarea.id !== tareaId);
  listaTareas = nuevasTareas;
}

// Funcion para ver actualizar una tarea
function actualizarTarea(id, nuevaTarea) {
  const index = listaTareas.findIndex((listaTareas) => listaTareas.id === id);
  if (index !== -1) {
    listaTareas[index] = { ...listaTareas[index], ...nuevaTarea };
    return `Tarea actualizada: ${listaTareas[index]}`;
  } else {
    return `No se encontro la tarea con id: ${id}, intenta nuevamente`;
  }
}

// Funcion para ver toda la lista de tareas
function imprimirTareasCompletas() {
  return listaTareas;
}

// exportando todas la funciones para ser utilizadas en las rutas
module.exports = {
  verListaDetareasCompletas,
  verListaDetareasIncompletas,
  crearTarea,
  eliminarTarea,
  actualizarTarea,
  imprimirTareasCompletas,
  buscarTareaPorId,
};
