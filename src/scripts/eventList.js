import API from "./eventsFetch.js"
import makeEventEntry from "./eventsRender.js"

const events_container = document.querySelector(".eventListContainer")

function getAndRenderAllEvents() {
  events_container.innerHTML = "";
  API.getEvents().then((parsedEvents) => {
    parsedEvents.forEach(
        (event) => {
           const eventHTML = makeEventEntry(event) 
            events_container.innerHTML += eventHTML
        }
    )
  });
}


export default getAndRenderAllEvents