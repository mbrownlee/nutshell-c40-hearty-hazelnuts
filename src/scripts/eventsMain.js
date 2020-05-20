import API from "./eventsFetch.js"
import render from "./eventsRender.js"
import makeEventsForm from "./eventsForm.js"

const eventsContainer = document.querySelector(".eventListContainer")

    
    const eventsToDom = (parsedEvents) => {
        eventsContainer.innerHTML = ""
        parsedEvents.forEach(event => eventsContainer.innerHTML += render.makeEventEntry(event))
        makeEventsForm()


    }

API.getEvents().then(eventsToDom)

const formContainer = document.querySelector(".eventFormContainer")

const eventEdit = id => {
    const eventEditObj = {
       date: document.querySelector(".date_value").value,
       event: document.querySelector(".event_value").value,
       location: document.querySelector(".location_value").value
    }

    API.editEvents(eventEditObj, id)
       .then(() => (document.getElementById("entryId").value = ""))
       .then(() =>API.getJournalEntries().then(renderToDom))
       
    }
/*
formContainer.addEventListener("click", () => {
    const date = document.querySelector("#journalDate").value 
    const topic = document.querySelector("#conceptsCovered").value
    const content = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#feeling").value
    const entryId = document.getElementById("entryId").value

    if (date === "" || topic === "" || content === "" || mood === "") {
        alert("NO POST FOR YOU!")
        
    } else if (entryId !== "") {
        entryEdit(entryId)
        clearForm()
    }
    
    else {
        const entryCreationObj = newEvent(date, event, location)
        API.createNewEntry(entryCreationObj).then(() => {
            API.getJournalEntries().then(eventsToDom)
        })
        clearForm()
    }

}) */


    function clearForm() {
        eventDateInput.value = ""
        eventInput.value = ""
        entryLocationInput.value = ""
        
      }

const eventContainer = document.querySelector(".eventListContainer")

eventContainer.addEventListener("click", (event) => {
    
        if (event.target.id.startsWith("edit--")) {
          const eventEditId = event.target.id.split("--")[1]
          
            repopulateForm(eventEditId) 

            } if (event.target.id.startsWith("delete--")) {
             const eventId = event.target.id.split("--")[1]
             API.deleteEvents(eventId)
    
             .then(getAndRenderAllEvents)
     }
   


   
}
)
export default {eventsToDom, eventEdit}