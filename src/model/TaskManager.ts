import Task from "./Task.js";

export default class TaskManager{

    private TaskList :Array<Task>;

    public constructor(){

        this.TaskList = new Array();
    }

    public addTask(taskName:string, taskContent:string):number{
        const auxtask:Task = new Task(taskName,taskContent);
        
        this.TaskList.forEach(element => {
            if(element.taskName === auxtask.taskName){
                return 1;
            }
            
        });

        this.TaskList.push(auxtask);
        return 0;
    }

    public removeTask(aux:Task){

        this.TaskList = this.TaskList.filter(item=> item !== aux);
        
    }

    public get Tasklist(): Array<Task>{
        return this.TaskList;
    }


}