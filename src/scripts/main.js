import getAndRenderAllEvents from "./eventList.js"
import makeEventsForm from "./eventsForm.js"
import tasks from './tasks_main.js'
import "./userEvents.js"
import welcome from "./welcome.js"

const loggedUserId = sessionStorage.getItem("loggedUser");
if (loggedUserId === null) {
  console.log(loggedUserId)
  welcome.welcome();
} else {
  // rendering tasks
  tasks.tasks()

  // rendering events
  const blankForm = makeEventsForm()
  const eventBox = document.querySelector(".eventFormContainer")
  eventBox.innerHTML = blankForm
  getAndRenderAllEvents()

  // rendering articles

  // rendering messages
}