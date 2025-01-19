class TaskManager {
    private static Manager: TaskManager | null = null;
    private TaskList: Task[];

    private constructor() {
        this.TaskList = [];
    }
    static getInstance(): TaskManager {
        if (TaskManager.Manager === null) {
            TaskManager.Manager = new TaskManager();
        }
        return TaskManager.Manager;
    }

    addTask(task: Task): void {
        this.TaskList.push(task);
    }

    removeTask(task: Task): void {
        this.TaskList = this.TaskList.filter(item => item !== task);
    }

}
