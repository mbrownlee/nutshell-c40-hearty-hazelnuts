// ZN Fetch requests for tasks section

const tasks_api = {
    getTasks() {
        return fetch('http://localhost:3000/tasks')
            .then(response => response.json())
    },
    getTask(taskId) {
        return fetch(`http://localhost:3000/tasks/${taskId}`)
            .then(response => response.json())
    },
    saveTask(task) {
        return fetch('http://localhost:3000/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
    },
    deleteTask(taskId) {
        return fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    editTask(task, taskId) {
        return fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(response => response.json())
    }
}

export default tasks_api