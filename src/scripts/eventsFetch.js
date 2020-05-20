
const API = {
    getEvents() {
      return fetch("http://localhost:8088/events") 
        .then((events) => events.json());
    },

    createNewEvent(newEventObj) {
      return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEventObj),
      });
    },

    deleteEvents (eventId) {
      return fetch(`http://localhost:8088/events${eventId}`, {
      method: "DELETE"
    })
  },
    editEvents (eventObj, eventId) {
      return fetch(`http://localhost:8088/events${eventId}` , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventObj)
    })
    .then((event) => event.json()) }}

    export default API