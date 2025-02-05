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
});