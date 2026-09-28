function createTodo (cTitle, cDescription, cDueDate, cPriority, cNote) {
    const id = self.crypto.randomUUID();
    const name = cTitle;
    const description = cDescription;
    cDueDate = cDueDate.slice(5);
    const dueDate = cDueDate;
    const priority = cPriority;
    const notes = cNote;
    const status = 0;

    return { id, name, description, dueDate, priority, notes, status };
}

export { createTodo };
