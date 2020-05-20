import API from "./eventsFetch.js"
import render from "./eventsRender.js"
import makeEventsForm from "./eventsForm.js"

const eventsContainer = document.querySelector(".eventListContainer")

    
    const eventsToDom = (parsedEvents) => {
        eventsContainer.innerHTML = ""
        parsedEvents.forEach(event => eventsContainer.innerHTML += render.makeEventEntry(event))
        makeEventsForm()


    }
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

API.getEvents().then(eventsToDom)

const formContainer = document.querySelector(".eventFormContainer")

const eventEdit = id => {
    const eventEditObj = {
        date: document.querySelector("#eventDate").value,
        event: document.querySelector("#eventDescription").value,
        location: document.querySelector("#eventLocation").value
    }

    API.editEvents(eventEditObj, id)
       .then(() => (document.getElementById("#eventId").value = ""))  
       .then(() =>API.getAndRenderAllEvents) //put in eventsList
       
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


    

export default {eventsToDom, eventEdit}