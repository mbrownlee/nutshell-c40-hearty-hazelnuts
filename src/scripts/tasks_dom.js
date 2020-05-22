// ZN Inserting task components into DOM

import component from './tasks_component.js'

const taskSection = document.querySelector('.tasks')

const addTaskHeader = () => {
    document.querySelector('.tasks').innerHTML = component.createTaskHeader()
}

const showNewTaskForm = () => {
    document.querySelector('.tasks').innerHTML = component.createNewTaskForm()
}

const removeNewTaskForm = () => {
    const newTaskForm = document.querySelector('.new_task')
    newTaskForm.parentElement.removeChild(newTaskForm)
}

const clearTasks = () => {
    Array.from(taskSection.getElementsByClassName('task_current_card')).forEach(card => card.parentElement.removeChild(card))
    Array.from(taskSection.getElementsByClassName('task_complete_card')).forEach(card => card.parentElement.removeChild(card))
}

const showCurrentTasks = (tasks) => {
    clearTasks();
    tasks.filter(task => task.complete === false).forEach(current => {
        let taskCard = document.createElement('div')
        taskCard.className = "task_current_card"
        taskCard.innerHTML = component.createCurrentTask(current)
        taskSection.appendChild(taskCard)
    })
}

const showCompletedTasks = (tasks) => {
    clearTasks();
    tasks.filter(task => task.complete === true).forEach(complete => {
        let taskCard = document.createElement('div')
        taskCard.className = "task_complete_card"
        taskCard.innerHTML = component.createCompletedTask(complete)
        taskSection.appendChild(taskCard)
    })
}

export default { addTaskHeader, showNewTaskForm, removeNewTaskForm, showCurrentTasks, showCompletedTasks }