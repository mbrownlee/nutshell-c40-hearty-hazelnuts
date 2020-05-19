import data from './tasks_api.js'
import dom from './tasks_dom.js'

// placeholder for session stored user ID, need to change later
const loggedUserId = 1;
const taskSection = document.querySelector('.tasks')

// Displays initial tasks box with header and current tasks
dom.addTaskHeader()
data.getTasks()
    .then(tasks => dom.showCurrentTasks(tasks))

// Click event handler for New Task, View Current, and View Completed, Remove, and Checkbox (mark as completed) btns
taskSection.addEventListener('click', event => {
    if (event.target.id === 'create-new-task') {
        dom.showNewTaskForm()
    } else if (event.target.id === 'view-current-tasks') {
        data.getTasks()
            .then(tasks => dom.showCurrentTasks(tasks))
    } else if (event.target.id ==='view-completed-tasks') {
        data.getTasks()
            .then(tasks => dom.showCompletedTasks(tasks))
    } else if (event.target.id === 'submit-task') {
        event.preventDefault()
        let newTask = {
            "userId": loggedUserId,
            "title": document.getElementById('task-name').value,
            "description": document.getElementById('task-description').value,
            "compDate": document.getElementById('task-compDate').value,
            "complete": false
        }
        data.saveTask(newTask)
            .then(() => {
                dom.removeNewTaskForm()
                dom.addTaskHeader()
                data.getTasks()   
                    .then(tasks => dom.showCurrentTasks(tasks))        
            })
    } else if (event.target.id === 'discard-task') {
        event.preventDefault()
        dom.removeNewTaskForm()
        dom.addTaskHeader()
        data.getTasks()   
            .then(tasks => dom.showCurrentTasks(tasks))
    } else if (event.target.id.startsWith('delete-')) {
        data.deleteTask(event.target.id.split('-')[1])
            .then( () => data.getTasks())
            .then(tasks => dom.showCurrentTasks(tasks))
    } else if (event.target.id.startsWith('complete-')) {
        data.getTask(event.target.id.split('-')[1])
            .then(task => {
                let completed = {
                    "userId": task.userId,
                    "title": task.title,
                    "description": task.description,
                    "compDate": task.compDate,
                    "complete": true,
                    "id": task.id
                }
                data.editTask(completed, task.id)
                .then( () => data.getTasks())
                .then(tasks => dom.showCompletedTasks(tasks))
            })
    }
})