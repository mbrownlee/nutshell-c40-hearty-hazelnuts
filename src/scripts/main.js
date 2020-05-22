// BC, MM, TS, ZN Importing relevant pages and displaying either welcome page or logged-in user's home page

import getAndRenderAllEvents from "./eventList.js"
import makeEventsForm from "./eventsForm.js"
import tasks from './tasks_main.js'
import "./userEvents.js"
import welcome from "./welcome.js"
import news from "./news_main.js"
import messages from "./messages.js"

const loggedUserId = sessionStorage.getItem("loggedUser");
if (loggedUserId === null) {
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
  news.makeNews();

  // rendering messages, ZN - can't get this to work, have to leave functions called in messages.js
  // messages.renderInitialSection();
  // messages.getAndRenderMesages();
}
