import { createTodo } from "./todo.js"

function createProject (projectName) {
    const id = self.crypto.randomUUID();
    const name = projectName;
    const todoList = [];

    function addTodo(name, description, dueDate, priority, notes) {
        const newTodo = createTodo(name, description, dueDate, priority, notes);
        todoList.push(newTodo);
    }

    function getList() {
        return todoList;
    }

    function getID() {
        return id;
    }

    return { id, name, todoList, addTodo, getList, getID}

}

export {createProject}