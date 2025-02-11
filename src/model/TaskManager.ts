import Task from "./Task.js";


export default class TaskManager {

    private TaskList: Array<Task>;

    public constructor() {

        this.TaskList = new Array();
    }



    public addTask(taskName: string, taskContent: string): number {
        const auxtask: Task = new Task(taskName, taskContent);

        if (this.Tasklist.some(element => element.taskName == auxtask.taskName)) {
            return 1;
        }

        this.TaskList.push(auxtask);
        return 0;
    }

    public removeTask(removedTaskName: string):number {

        if (!this.Tasklist.some(element => element.taskName == removedTaskName)) {
            return 1;
        }

        this.TaskList = this.TaskList.filter(item => item.taskName != removedTaskName);
        return 0;

    }

    public modifyName(oldName:string,newName:string):number{


        let findIndex = this.TaskList.findIndex(element=> element.taskName == oldName);
        if(findIndex === -1){
            return 1;
        }
        this.TaskList.at(findIndex)!.taskName = newName;
        return 0;

    }

    public get Tasklist(): Array<Task> {
        return this.TaskList;
    }

    public get length(): number {
        return this.TaskList.length;
    }

    public toJSON() {
        let taskJson = JSON.stringify(this.Tasklist, null, 2);


    }

}