import Task from "./Task";

export default class TaskManager{

    private TaskList :Array<Task>;

    public constructor(){

        this.TaskList = new Array();
    }

    public addTask(aux:Task){
        this.TaskList.push(aux);
    }

    public removeTask(aux:Task){

        this.TaskList = this.TaskList.filter(item=> item !== aux);
        
    }

    public get Tasklist(): Array<Task>{
        return this.TaskList;
    }


}