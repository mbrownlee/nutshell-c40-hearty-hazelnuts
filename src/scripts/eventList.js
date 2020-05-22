import API from "./eventsFetch.js";
import makeEventEntry from "./eventsRender.js";
/*
    Author: Michelle McLane Brownlee
    Purpose: Make the event list, event listeners for edit and delete buttons
*/
const events_container = document.querySelector(".eventListContainer");

function getAndRenderAllEvents() {
  events_container.innerHTML = "";
  API.getEvents().then((parsedEvents) => {
    console.log(parsedEvents, "events");
    parsedEvents
      .sort((a, b) => a.date.localeCompare(b.date))
      .forEach((event) => {
        const eventHTML = makeEventEntry(event);
        events_container.innerHTML += eventHTML;
      });
  });
}

const repopulateForm = (eventId) => {
  fetch(`http://localhost:3000/events/${eventId}`)
    .then((events) => events.json())
    .then((event) => {
      (document.querySelector("#eventId").value = event.id),
        (document.querySelector("#eventDate").value = event.date),
        (document.querySelector("#eventDescription").value = event.event),
        (document.querySelector("#eventLocation").value = event.location);
    });
};

events_container.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const eventEditId = event.target.id.split("--")[1];

    repopulateForm(eventEditId);
  }
  if (event.target.id.startsWith("delete--")) {
    const eventId = event.target.id.split("--")[1];
    API.deleteEvents(eventId).then(getAndRenderAllEvents);
  }
});

export default getAndRenderAllEvents;
