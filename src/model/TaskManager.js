

export default class TaskManager {
     // Propiedad estática privada
    taskList ; // Lista de tareas privada

    constructor() {
        this.taskList=[];
    }


    addTask(task) {
        this.taskList.push(task);
    }

    removeTask(task) {
        this.taskList = this.taskList.filter(item => item !== task);
    }

    getTaskList(){
        return this.taskList;
    }
    setTaskList(newList){
        this.taskList= newList;
    }
}

