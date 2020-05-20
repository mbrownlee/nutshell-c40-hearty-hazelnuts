const createTaskHeader = () => {
    return `
    <header class="task_header">
        <h2 class="task_header">Manage Tasks</h2>
        <button id="create-new-task">New Task</button>
        <button id="view-current-tasks">View Current</button>
        <button id="view-completed-tasks">View Completed</button>
    </header>
    `
}

const createNewTaskForm = () => {
    return `
    <section class="new_task">
        <h3 class="new_task_header">Create Task</h3>
        <form class="new_task_form">
            <fieldset>
                <label for="task-name">Name:</label>
                <input type="text" id="task-name" name="task-name">
                <label for="task-description">Description:</label>
                <textarea id="task-description" name="task-description"></textarea>
                <label for="task-compDate">Completion Date:</label>
                <input type="date" id="task-compDate" name="task-compDate">
            </fieldset>
            <button id="submit-task">Create</button>
            <button id="discard-task">Discard</button>
        </form>
    </section>
    `
}

const createCurrentTask = (task) => {
    return `
    <section class="current_task" id="current-${task.id}">
        <p contentEditable="true">Name: ${task.title}</p>
        <p contentEditable="true">Description: ${task.description}</p>
        <p contentEditable="true">Complete By: ${task.compDate}</p>
        <button id="delete-${task.id}">Remove</button>
        <input type="checkbox" id="complete-${task.id}" name="complete" value="complete-${task.id}">
        <label for="complete-${task.id}>Completed</label>
    </section>
    `
}

const createCompletedTask = (task) => {
    return `
    <section class="completed_task" id="completed-${task.id}">
        <p contentEditable="true">Name: ${task.title}</p>
        <p contentEditable="true">Description: ${task.description}</p>
        <p contentEditable="true">Completed On: ${task.compDate}</p>
        <button id="delete-${task.id}>Remove</button>
    </section>
    `
}

export default { createTaskHeader, createNewTaskForm, createCurrentTask, createCompletedTask }