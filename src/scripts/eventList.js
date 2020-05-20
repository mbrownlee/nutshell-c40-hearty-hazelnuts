import API from "./eventsFetch.js";
import makeEventEntry from "./eventsRender.js";



const events_container = document.querySelector(".eventListContainer");

function getAndRenderAllEvents() {
  events_container.innerHTML = "";
  API.getEvents().then((parsedEvents) => {
    parsedEvents.forEach((event) => {
      const eventHTML = makeEventEntry(event);
      events_container.innerHTML += eventHTML;
    });
  });
}

//  const hiddenEventId = document.querySelector("#entryId")
//  const eventDate = document.querySelector("#eventDate")
//  const eventBody = document.querySelector("#eventDescription")
//  const eventLocation =  document.querySelector("#eventLocation")


   
const repopulateForm = eventId => {
    
    fetch(`http://localhost:3000/events/${eventId}`)
    .then(events => events.json())
    .then(event => {
        document.querySelector("#eventId").value = event.id,
        document.querySelector("#eventDate").value = event.date,
        document.querySelector("#eventDescription").value = event.event,
        document.querySelector("#eventLocation").value = event.location })
    }

    function clearForm() {
        hiddenEventId.value = "",
        eventDate.value = "",
        eventBody.value = "",
        eventLocation.value = ""
    } 


events_container.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const eventEditId = event.target.id.split("--")[1];

    repopulateForm(eventEditId);
  }
  if (event.target.id.startsWith("delete--")) {
    const eventId = event.target.id.split("--")[1];
    API.deleteEvents(eventId)
    .then(getAndRenderAllEvents);
  }
});

export default getAndRenderAllEvents;
