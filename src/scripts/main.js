import getAndRenderAllEvents from "./eventList.js"
import makeEventsForm from "./eventsForm.js"
import './tasks_main.js'
import userEvents from "./userEvents.js";
import users from "./users.js";
import welcome from "./welcome.js"

welcome.createWelcomeVideo()

const loggedUserId = sessionStorage.getItem("loggedUser");
if (loggedUserId === null) {
  userEvents.welcome();
} else {
  const dashboardContainer = document.getElementById("dashboard");

}

const blankForm = makeEventsForm()

const eventBox = document.querySelector(".eventFormContainer")
eventBox.innerHTML = blankForm

getAndRenderAllEvents()






