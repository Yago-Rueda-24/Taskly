export default class Task {
    #taskName;
    #taskContent;

    constructor(newName, newContent) {
        this.#taskName = newName;
        this.#taskContent = newContent;
    }

    getTaskName() {
        return this.#taskName;
    }

    setTaskName(newName) {
        if (newName !== null && newName !== "") {
            this.#taskName = newName;
        }
    }

    getTaskContent() {
        return this.#taskContent;
    }

    setTaskContent(newContent) {
        if (newContent !== null && newContent !== "") {
            this.#taskContent = newContent;
        }
    }
}
