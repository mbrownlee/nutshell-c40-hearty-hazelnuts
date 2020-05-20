<<<<<<< HEAD
import getAndRenderAllEvents from "./eventList.js"
import makeEventsForm from "./eventsForm.js"



const blankForm = makeEventsForm()

const eventBox = document.querySelector(".eventFormContainer")
eventBox.innerHTML = blankForm

getAndRenderAllEvents()



=======
import userEvents from "./userEvents.js";
import "./users.js";
import users from "./users.js";

const loggedUserId = sessionStorage.getItem("loggedUser");
console.log(loggedUserId);
if (loggedUserId === null) {
  userEvents.welcome();
} else {
  const dashboardContainer = document.getElementById("dashboard");
  dashboardContainer.innerHTML = "";
}
>>>>>>> master
