import TaskCard from "../view/Components/TaskCard.js";
import TaskManager from "../model/TaskManager.js";
import { dialog } from "electron";

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


});

// Controlador del botón que añade la tarea a la lista
document.getElementById('dialogAddTask')?.addEventListener('click', () => {

    const tasksList = document.getElementById('Tasks');
    const newCard = document.createElement('task-card');
    const title = document.getElementById('nombre') as HTMLInputElement;
    const content = document.getElementById('descripcion') as HTMLInputElement;
    const dialogo = document.getElementById('addDialog') as HTMLDialogElement;

    if (title.value !== "") {

        if (manager.addTask(title.value, content.value) === 0) {

            newCard.setAttribute('title', title.value);
            newCard.setAttribute('content', content.value);
            tasksList?.appendChild(newCard);
            dialogo.close();
            title.value = '';
            content.value = '';
        }
        else {
            //TODO: Informar de que hubo un error al añadir el elemento a la lista
        }


    } else {
        //TODO: Informar de que hubo un error al introducir los parametros en el dialogo
    }
});

// Controlador de eventos en la lista de tareas
document.getElementById('Tasks')?.addEventListener('click', (event: Event) => {
    let target = event.target as HTMLElement;

    // Lectura y modificación de tareas
    if (target.matches('task-card button.btn-info')) {
        let card = target.closest('task-card');
        const dialogo = document.getElementById('viewDialog') as HTMLDialogElement;
        const dialogTitle = document.getElementById('viewName') as HTMLInputElement;
        const dialogContent = document.getElementById('viewContent') as HTMLInputElement;
        let oldName: string;




        if (card) {
            oldName = card.getAttribute('title') ?? "";
            dialogTitle.value = oldName;
            dialogContent.value = card.getAttribute('content') ?? "";
            dialogo.showModal();
        }

        const closeDialog = () => {

            if (dialogTitle.value !== "") {

                if (oldName !== dialogTitle.value) {
                    manager.removeTask(oldName);
                    manager.addTask(dialogTitle.value, dialogContent.value);

                    if (card) {
                 
                        card.setAttribute('title', dialogTitle.value);
                        card.setAttribute('content', dialogContent.value);
       
                    }
                }

                dialogo.close();


                dialogTitle.value = '';
                dialogContent.value = '';
            } else {
                //TODO avisar al usuario de que no puede intrdocuir un campo vacio
            }
        };


        document.getElementById('closeViewModal')?.addEventListener('click', closeDialog);
        document.getElementById('aspaViewDialog')?.addEventListener('click', closeDialog);

    }

    // Eliminación de tareas
    if (target.matches('task-card button.btn-delete')) {
        const card = target.closest('task-card');
        //Solucionar esto
        manager.removeTask(card?.getAttribute('title') ?? "");
        card?.remove();

    }
});



// Prueba para listar tareas almacenadas
document.getElementById('prueba')?.addEventListener('click', () => {
    const tasks = manager.Tasklist;
    tasks.forEach(task => {
        console.log(task.taskName);
    });
    manager.toJSON();

});
