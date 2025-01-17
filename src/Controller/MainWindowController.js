
import '../View/Components/TaskCard.js'

//Controlador del Boton que abre el dialogo
document.getElementById('openDialog').addEventListener('click', () => {

  const dialogo = document.getElementById('addDialog');

  const btnclose = document.getElementById("closeModal");

  const span = document.getElementsByClassName("close")[0];

  var nameinput = document.getElementById("nombre");
  var description = document.getElementById("descripcion");
  dialogo.showModal();

  // Cierra la ventan al pulsar el aspa
  span.onclick = function () {
    dialogo.close();
    nameinput.value = "";
    description.value = ""


  }

  // Cierra la ventana al pulsar fuera del dialogo
  window.onclick = function (event) {
    if (event.target == dialogo) {
      dialogo.close();
      nameinput.value = "";
      description.value = ""

    }
  }
  //Cierra la ventana al pulsar el boton de cancelar
  btnclose.onclick = function () {
    dialogo.close();
    nameinput.value = "";
    description.value = ""
  }


})

//Controlador dek boton que añade la tarea a la lista de tareas
//Este boton se encuentra en el dialogo
document.getElementById('dialogAddTask').addEventListener('click', () => {

  // Selecciona el elemento <ul> con el ID 'Tasks'
  const tasksList = document.getElementById('Tasks');

  const newcard = document.createElement('task-card');

  const title = document.getElementById('nombre');
  const content = document.getElementById('descripcion');
  // Crea un nuevo elemento <li>
  newcard.setAttribute('title', title.value);
  newcard.setAttribute('content', content.value);

  // Añade el nuevo <li> al final de la lista
  tasksList.appendChild(newcard);
  const dialogo = document.getElementById('addDialog');
  dialogo.close();

  title.value = "";
  content.value = ""
})

//Este controlador maneja los eventos relacionados con la lista de tareas
document.getElementById('Tasks').addEventListener('click', (event) => {

  
//Este fragmento de código esta dedicado a la lectura y modificación de las tareas
//mediante el dialogo "viewDialog"
  if (event.target.matches('task-card button.btn-info')){
    const card = event.target.closest('task-card');
    const dialogo = document.getElementById('viewDialog');
    var dialogTitle = document.getElementById('viewName');
    var dialogContent = document.getElementById('viewContent');


    if (card) {
      dialogTitle.value = card.getAttribute('title');
      dialogContent.value = card.getAttribute('content');
      dialogo.showModal();
    }

    //Fuciones de cierre del dialogo
    const buttonclose = document.getElementById('closeViewModal');
    const aspaClose = document.getElementById('aspaViewDialog');

    buttonclose.onclick = function () {
      closeDialog();
    }

    window.onclick = function (event) {
      if (event.target == dialogo) {
        closeDialog();

      }
    }

    aspaClose.onclick = function () {
      closeDialog();
    }
    function closeDialog() {
      // Este codigo cambia el contenido del objeto pero no actualiza la interfaz
      card.setAttribute('title', dialogTitle.value);
      card.setAttribute('content', dialogContent.value);
      dialogo.close();
      dialogTitle.value = "";
      dialogContent.value = "";
    }
  }
//Fin del fragmento de código esta dedicado a la lectura y modificación de las tareas

//Este fragmento esta dedicado a la eliminación de tareas de la lista de tareas
  if(event.target.matches('task-card button.btn-delete')){
    console.log('Funcino');
    const card = event.target.closest('task-card');
    const tasksList = document.getElementById('Tasks');
    tasksList.removeChild(card);
  }
//Fin del fragmento de código a la eliminación de tareas de la lista de tareas
})





