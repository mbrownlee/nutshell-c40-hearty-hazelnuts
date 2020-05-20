import data from './tasks_api.js'
import dom from './tasks_dom.js'

// placeholder for session stored user ID, need to change later
const loggedUserId = sessionStorage.getItem("loggedUser");
const taskSection = document.querySelector('.tasks')

// Displays initial tasks box with header and current tasks
dom.addTaskHeader()
data.getTasks()
    .then(tasks => dom.showCurrentTasks(tasks.filter(task => task.userId == loggedUserId)))

// Click event handler for New Task, View Current, and View Completed, Remove, and Checkbox (mark as completed) btns
taskSection.addEventListener('click', event => {

    // Creates new task form if New Task btn clicked
    if (event.target.id === 'create-new-task') {
        dom.showNewTaskForm()
    
    // Shows current tasks if Current Tasks btn clicked
    } else if (event.target.id === 'view-current-tasks') {
        data.getTasks()
            .then(tasks => dom.showCurrentTasks(tasks.filter(task => task.userId == loggedUserId)))

    // Shows completed tasks if Completed Tasks clicked
    } else if (event.target.id ==='view-completed-tasks') {
        data.getTasks()
            .then(tasks => dom.showCompletedTasks(tasks.filter(task => task.userId == loggedUserId)))

    // Saves tasks and shows current tasks if Submit Task btn clicked (inside create new task form)
    // Does not allow empty strings as input
    } else if (event.target.id === 'submit-task') {
        event.preventDefault()
        if (document.getElementById('task-name').value === '' ||
            document.getElementById('task-description').value === '' ||
            document.getElementById('task-compDate').value === '') {
                window.alert('Aren\'t you forgetting something?')
            } else {
        let newTask = {
            "userId": parseInt(loggedUserId, 10),
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
                    .then(tasks => dom.showCurrentTasks(tasks.filter(task => task.userId == loggedUserId)))        
            })
            }

    // Discards input and shows current tasks if Discard Task btn clicked (inside create new task form)
    } else if (event.target.id === 'discard-task') {
        event.preventDefault()
        dom.removeNewTaskForm()
        dom.addTaskHeader()
        data.getTasks()   
            .then(tasks => dom.showCurrentTasks(tasks.filter(task => task.userId == loggedUserId)))

    // Deletes task if Delete btn clicked
    } else if (event.target.id.startsWith('delete-')) {
        data.deleteTask(event.target.id.split('-')[1])
            .then( () => data.getTasks())
            .then(tasks => dom.showCurrentTasks(tasks.filter(task => task.userId == loggedUserId)))
    
    // Marks current task as completed and displays completed tasks if Completed checkbox is clicked
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
                .then(tasks => dom.showCompletedTasks(tasks.filter(task => task.userId == loggedUserId)))
            })
    }
})