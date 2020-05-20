import getAndRenderAllEvents from "./eventList.js"
import makeEventsForm from "./eventsForm.js"



const blankForm = makeEventsForm()

const eventBox = document.querySelector(".eventFormContainer")
eventBox.innerHTML = blankForm

getAndRenderAllEvents()



