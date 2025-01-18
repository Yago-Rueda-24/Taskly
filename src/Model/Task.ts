class Task {
    private TaskName: string;
    private TaskContent: string;

    constructor(newName, newContent) {
        this.TaskName = newName;
        this.TaskContent = newContent;
    }

    /**
     * getTaskName
     */
    public getTaskName() {
        return this.TaskName;
    }
    /**
     * setTaskName
     */
    public setTaskName(newName: string) {
        if (newName !== null && newName !== "") {
            this.TaskName = newName;
        }
    }

    /**
     * getTaskContent
     */
    public getTaskContent() {
        return this.TaskContent;
    }


    /**
     * setTaskContent
     */
    public setTaskContent(newContent: string) {
        if (newContent !== null && newContent !== "") {
            this.TaskContent = newContent;
        }
    }
}   