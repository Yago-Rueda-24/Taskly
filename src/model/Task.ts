export default class Task {
    private _taskName: string;
    private _taskContent: string;

    constructor(newName: string, newContent: string) {
        this._taskName = newName;
        this._taskContent = newContent;
    }

    get taskName(): string {
        return this._taskName;
    }

    set taskName(newName: string) {
        if (newName) {
            this._taskName = newName;
        }
    }

    get taskContent(): string {
        return this._taskContent;
    }

    set taskContent(newContent: string) {
        if (newContent) {
            this._taskContent = newContent;
        }
    }
}
