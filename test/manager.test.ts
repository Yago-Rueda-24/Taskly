
import TaskManager from "../src/model/TaskManager.js";

let manager = new TaskManager();

test("Añadir una entrada a la lista", () => {
    expect(manager.addTask("hola", "mundo")).toBe(0);
});
test("Eliminar un entrada de las lista", () => {
    manager.removeTask("hola")
    expect(manager.Tasklist.length).toBe(0);
});
test("Eliminar una entrada inexistente", () => {
    expect(manager.removeTask("hola")).toBe(1);
});
test("Añadir una entrada repetida a la lista", () => {
    manager.addTask("hola", "mundo");
    expect(manager.addTask("hola", "mundo")).toBe(1);
});

test("Longitud de la lista", () => {
    expect(manager.length).toBe(1);
});
test("modificación del nombre de una tarea", () => {
    
    expect(manager.modifyName("hola","adios")).toBe(0);
    expect(manager.modifyName("hola","adios")).toBe(1);
});