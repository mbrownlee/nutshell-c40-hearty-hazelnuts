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