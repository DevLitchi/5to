// Variables
const listaTareas = document.getElementById('lista-tareas');
const listaTareasCompletadas = document.getElementById('lista-tareas-completadas');
const formulario = document.getElementById('formulario');
const inputTarea = document.getElementById('input-tarea');
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Funciones
const crearTarea = (tarea) => {
    const nuevaTarea = {
        id: Date.now(),
        tarea: tarea,
        completada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas();
    mostrarTareas();
};

const editarTarea = (id) => {
    const nuevaTarea = prompt("Edit the task:");
    if (nuevaTarea) {
        const index = tareas.findIndex((tarea) => tarea.id === id);
        tareas[index].tarea = nuevaTarea;
        tareas[index].completada = false; // Desmarcar la tarea como completada al editarla
        guardarTareas();
        mostrarTareas();
    }
};

const completarTarea = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    tareas[index].completada = !tareas[index].completada; // Alterna entre completada y no completada
    guardarTareas();
    mostrarTareas();
};

const eliminarTarea = (id) => {
    tareas = tareas.filter((tarea) => tarea.id !== id);
    guardarTareas();
    mostrarTareas();
};

const guardarTareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
};

const mostrarTareas = () => {
    listaTareas.innerHTML = '';
    listaTareasCompletadas.innerHTML = '';

    tareas.forEach((tarea) => {
        const li = document.createElement('li');
        li.classList.add('tarea');
        
        const span = document.createElement('span');
        span.textContent = tarea.tarea;
        if (tarea.completada) {
            span.style.textDecoration = 'line-through'; // Tachar el texto si la tarea está completada
        }

        const divBotones = document.createElement('div');
        
        // Mostrar solo el botón "Completar" si la tarea no está completada
        if (!tarea.completada) {
            const completarBtn = document.createElement('button');
            completarBtn.textContent = 'Completar';
            completarBtn.onclick = () => completarTarea(tarea.id);
            divBotones.appendChild(completarBtn);
        }

        // Botón para editar
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.onclick = () => editarTarea(tarea.id);
        divBotones.appendChild(editarBtn);
        
        // Botón para eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarTarea(tarea.id);
        divBotones.appendChild(eliminarBtn);
        
        li.appendChild(span);
        li.appendChild(divBotones);
        
        // Añadir a la lista correspondiente
        if (tarea.completada) {
            listaTareasCompletadas.appendChild(li); // Tareas completadas
        } else {
            listaTareas.appendChild(li); // Tareas pendientes
        }
    });
};

// Evento de agregar tarea
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const tarea = inputTarea.value.trim();
    if (tarea !== '') {
        crearTarea(tarea);
        inputTarea.value = ''; // Limpiar input
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', mostrarTareas);
