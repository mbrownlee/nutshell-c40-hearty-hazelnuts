 import API from "./eventsFetch.js"
 
 const eventFormContainer = document.querySelector(".eventFormContainer")
 eventFormContainer.addEventListener("click", (event) => {
     if(event.target.id==="saveButton") {
        const eventSaveObj = {
            date: document.querySelector("#eventDate").value,
            event: document.querySelector("#eventDescription").value,
            location: document.querySelector("#eventLocation").value
         }
         API.createNewEvent(eventSaveObj)
     }
 })
 
 const makeEventsForm = () => {
    
    return `
    <div class="eventForm">
        <fieldset>
            <label for="eventDate">Date of Entry</label>
            <input type="date" name="eventDate" id="eventDate">
        </fieldset>
        <fieldset>
            <label for="eventDescription">Event Name</label>
            <input type="text" name="eventDescripton" id="eventDescription">
        </fieldset>
        <fieldset>
            <label for="eventLocation">eventLocation</label>
            <input type="text" name="eventLocation" id="eventLocation">
        </fieldset>
        <fieldset>
        <label for="userName">Post By: (user name)</label>
        <input type="text" name="userName" id="userName">
    </fieldset>
    <button id="saveButton">Save Event</button>
    </div>`

    
}

export default makeEventsForm