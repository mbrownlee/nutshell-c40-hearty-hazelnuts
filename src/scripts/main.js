import "./userEvents.js"

const loggedUserId = sessionStorage.getItem("loggedUser")
console.log(loggedUserId)
if (loggedUserId === null) {
    displayWelcome()
}else {
    
}