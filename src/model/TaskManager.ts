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

    public removeTask(removedTaskName: string) {

        this.TaskList = this.TaskList.filter(item => item.taskName != removedTaskName);

    }

    public get Tasklist(): Array<Task> {
        return this.TaskList;
    }

    public toJSON() {
        let taskJson = JSON.stringify(this.Tasklist, null, 2);


    }

}