import '../View/Components/TaskCard.js';
import Task from "../model/Task.js"
import TaskManager from "../model/TaskManager.js";

const manager = new TaskManager();

// Controlador del botón que abre el diálogo
document.getElementById('openDialog')?.addEventListener('click', () => {
    const dialogo = document.getElementById('addDialog') as HTMLDialogElement;
    const btnClose = document.getElementById('closeModal') as HTMLButtonElement;
    const span = document.getElementsByClassName('close')[0] as HTMLElement;
    const nameInput = document.getElementById('nombre') as HTMLInputElement;
    const description = document.getElementById('descripcion') as HTMLInputElement;
    
    dialogo.showModal();

    const closeDialog = () => {
        dialogo.close();
        nameInput.value = '';
        description.value = '';
    };

    span.onclick = closeDialog;
    btnClose.onclick = closeDialog;
    
    window.onclick = (event: MouseEvent) => {
        if (event.target === dialogo) closeDialog();
    };
});

// Controlador del botón que añade la tarea a la lista
document.getElementById('dialogAddTask')?.addEventListener('click', () => {
    const tasksList = document.getElementById('Tasks');
    const newCard = document.createElement('task-card');
    const title = document.getElementById('nombre') as HTMLInputElement;
    const content = document.getElementById('descripcion') as HTMLInputElement;
    const auxTask = new Task(title.value, content.value);
    
    newCard.setAttribute('title', title.value);
    newCard.setAttribute('content', content.value);
    
    manager.addTask(auxTask);
    tasksList?.appendChild(newCard);
    
    const dialogo = document.getElementById('addDialog') as HTMLDialogElement;
    dialogo.close();
    title.value = '';
    content.value = '';
});

// Controlador de eventos en la lista de tareas
document.getElementById('Tasks')?.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    
    // Lectura y modificación de tareas
    if (target.matches('task-card button.btn-info')) {
        const card = target.closest('task-card');
        const dialogo = document.getElementById('viewDialog') as HTMLDialogElement;
        const dialogTitle = document.getElementById('viewName') as HTMLInputElement;
        const dialogContent = document.getElementById('viewContent') as HTMLInputElement;
        
        if (card) {
            dialogTitle.value = card.getAttribute('title') || '';
            dialogContent.value = card.getAttribute('content') || '';
            dialogo.showModal();
        }

        const closeDialog = () => {
            card?.setAttribute('title', dialogTitle.value);
            card?.setAttribute('content', dialogContent.value);
            dialogo.close();
            dialogTitle.value = '';
            dialogContent.value = '';
        };
        
        document.getElementById('closeViewModal')?.addEventListener('click', closeDialog);
        document.getElementById('aspaViewDialog')?.addEventListener('click', closeDialog);
        window.onclick = (event: MouseEvent) => {
            if (event.target === dialogo) closeDialog();
        };
    }

    // Eliminación de tareas
    if (target.matches('task-card button.btn-delete')) {
        const card = target.closest('task-card');
        card?.remove();
    }
});

// Prueba para listar tareas almacenadas
document.getElementById('prueba')?.addEventListener('click', () => {
    const tasks = manager.Tasklist;
    tasks.forEach(task => {
        console.log(task.taskName);
    });
});
