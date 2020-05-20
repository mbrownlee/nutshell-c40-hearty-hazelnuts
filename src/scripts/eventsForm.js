 import API from "./eventsFetch.js"

 const eventEdit = id => {
    const eventEditObj = {
        date: document.querySelector("#eventDate").value,
        event: document.querySelector("#eventDescription").value,
        location: document.querySelector("#eventLocation").value
    }

    API.editEvents(eventEditObj, id)
       .then(() => (document.querySelector("#eventId").value = ""))  
       .then(() =>API.getAndRenderAllEvents) //put in eventsList
       
    }
 
 const eventFormContainer = document.querySelector(".eventFormContainer")
 eventFormContainer.addEventListener("click", (event) => {
    const eventId = document.getElementById("eventId").value
     if(eventId !== "") {
        eventEdit(eventId)
       
     }
     
    else if (event.target.id==="saveButton") {
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
    </div>`

    
}

function clearForm() {
    
        document.querySelector("#eventDate").value = "",
        document.querySelector("#eventDescription").value = "",
        document.querySelector("#eventLocation").value = ""
   
  }


export default makeEventsForm