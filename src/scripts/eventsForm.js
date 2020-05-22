import API from "./eventsFetch.js";
import getAndRenderAllEvents from "./eventList.js";

const eventEdit = (id, eventObj) => {
  id = parseInt(id);
  return API.editEvents(eventObj, id)
    .then(() => (document.querySelector("#eventId").value = ""))
    
};

const eventFormContainer = document.querySelector(".eventFormContainer");
eventFormContainer.addEventListener("click", (event) => {
  const eventId = document.getElementById("eventId").value;

  if (event.target.id === "saveButton") {
    const eventSaveObj = {
      date: document.querySelector("#eventDate").value,
      event: document.querySelector("#eventDescription").value,
      location: document.querySelector("#eventLocation").value,
    };
    if (eventId !== "") {
      eventEdit(eventId, eventSaveObj).then(getAndRenderAllEvents)
      clearForm()
    } else {
      API.createNewEvent(eventSaveObj).then(getAndRenderAllEvents)
      clearForm()
    }
    
  }
});

const makeEventsForm = () => {
  return `
    <div class="eventForm">
        <input type="hidden" id="eventId" value="" />
        <fieldset>
            <label for="eventDate">Date of Event</label>
            <input type="date" name="eventDate" id="eventDate">
        </fieldset>
        <fieldset>
            <label for="eventDescription">Event Name</label>
            <input type="text" name="eventDescripton" id="eventDescription">
        </fieldset>
        <fieldset>
            <label for="eventLocation">Location of Event</label>
            <input type="text" name="eventLocation" id="eventLocation">
        </fieldset>
    <button id="saveButton">Save Event</button>
    </div>`;
};

function clearForm() {
    document.querySelector("#eventId").value = ""
    document.querySelector("#eventDate").value = "",
    document.querySelector("#eventDescription").value = "",
    document.querySelector("#eventLocation").value = ""

} 
export default makeEventsForm;
