<<<<<<< HEAD
import './tasks_main.js'
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
>>>>>>> cba3cbf68c2153b3f50eb7f999110d4dc0aa2619
