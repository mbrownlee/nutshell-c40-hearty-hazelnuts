//Fetching the messages from the database
const loggedUserId = 1;

const API = {
  getMessages() {
    return fetch(
      "http://localhost:3000/messages?_expand=user"
    ).then((message) => message.json());
  },
  saveMessageEntry(newEntryObject) {
    return fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntryObject),
    });
  },
  getMessagesByID(messageId) {
    return fetch(
      `http://localhost:3000/messages/${messageId}`
    ).then((response) => response.json());
  },
  deleteMessage(messageId) {
    return fetch(`http://localhost:3000/messages/${messageId}`, {
      method: "DELETE",
    });
  },
  updateMessage(updatedMessageObject, messageId) {
    return fetch(`http://localhost:3000/messages/${messageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMessageObject),
    }).then((res) => res.json());
  },
};

//Defining Messages Section in index.html
const messageSection = document.querySelector(".messages");

//making a message from the fetch call
const makeMessageComponent = (messageData) => {
  return `
  <section class="userMessage">
  <input type="hidden" id="message" value="${messageData.id}" /> 
  <div class="messageUserName">${messageData.user.username}</div>
  <div class="messageBody">${messageData.description}</div>
  <button id="edit--${messageData.id}" class="message_edit_btn">edit</button>
  <button id="delete--${messageData.id}" class="message_delete_btn">delete</button>
  </section>`;
};

//Making entire message Container and adding spot for database messages to go into when called
function renderInitialSection() {
  messageSection.innerHTML = `<section class="messagesContainer">
  <div class="databaseMessages"></div>
  <div class="messageTextBox">
  <br>
  <input
            type="text"
            name="conceptsCovered"
            id="messageText"
            placeholder= "start typing"
          />
          <button id="message_send_btn" class="message_send_btn">send</button>
  </div>
  </section>`;
}
//---------------------calling the initial build for the messages section
renderInitialSection();

//Rendering Database Messages to their section in DOM
const databaseMessageContainer = document.querySelector(".databaseMessages");
function renderMessageToDOM(htmlMessage) {
  databaseMessageContainer.innerHTML += htmlMessage;
}

//Get all messages already existing in the database
let messageId = "";
const getAndRenderMesages = () => {
  databaseMessageContainer.innerHTML = "";
  API.getMessages().then((message) => {
    message.map(makeMessageComponent).forEach(renderMessageToDOM);
  });
};

// -------------------Executing the function to get all messages existing in the database
getAndRenderMesages();

//Function and Button Event Listeners for Creating and Sending
const sendButtonListener = document.querySelector("#message_send_btn");
sendButtonListener.addEventListener("click", (event) => {
  let userMessageId = loggedUserId;
  let description = document.querySelector("#messageText").value;
  let newMessageEntry = buildMessageComponent(
    messageId,
    userMessageId,
    description
  );

  API.saveMessageEntry(newMessageEntry).then(getAndRenderMesages());
});
// API.getMessages().then((data) => renderJournalEntries(data))

// Factory Function to build a new message entry
const buildMessageComponent = (messageId, userMessageId, description) => ({
  id: messageId,
  userId: userMessageId,
  description: description,
});

// function to prepopulate the edit message form
function prepopulateForm(message) {
  formId.value = message.id;
  formUserId.value = message.userId;
  formDescription.value = message.description;
}

//Event Listners to work with Edit and Delete dynamically
messageSection.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const messageId = event.target.id.split("--")[1];
    API.getMessagesByID(messageId).then((message) => {
      prepopulateForm(message);
    });
  }
  if (event.target.id.startsWith("delete--")) {
    const messageId = event.target.id.split("--")[1];
    API.deleteMessage(messageId).then(getAndRenderMesages);
  }
  // if (event.target.id.startsWith("send--")) {
  //   const messageId = event.target.id.split("--")[1];
  //   createMessage(messageId).then(getAndRenderMesages);
  // }
});

// let messageId = currentMessageId++;
// let userMessageId = currentUserId;

// renderMessageToDOM(makeMessageTextBox())
