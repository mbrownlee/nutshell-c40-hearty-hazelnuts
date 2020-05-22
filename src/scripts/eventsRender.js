/*
    Author: Michelle McLane Brownlee
    Purpose: makes the entry HTML for the dom
*/
const makeEventEntry = (event) => {
    
    return `
    <div class="event">
    <h2 class="name_value">${event.event}</h2>
    <h4 class="date_value">${event.date}</h4>
    <p class="location_value">${event.location}</p>
    <button id="delete--${event.id}" class="delete__">Delete</button>
    <button id="edit--${event.id}" class="edit__">Edit</button>
    </div>`

    
}




export default makeEventEntry