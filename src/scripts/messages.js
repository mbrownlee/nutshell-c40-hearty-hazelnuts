/* Nutshell Messages Section
Author: Tom Strother
Date: May 22nd, 2020
*/

//declaring the variable loggedUserId to store the ID value of the user currently logged in
const loggedUserId = +sessionStorage.getItem("loggedUser");

//Fetch Functions for the CRUD functions
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

//Defining Messages Section in DOM on index.html
const messageSection = document.querySelector(".messages");

//function to build a message
const makeMessageComponent = (messageData) => {
  let editButton = showCrudButton(messageData);
  return `
  <section class="userMessage sb1">
  <input type="hidden" id="message--${messageData.id}" value="${messageData.description}" /> 
  <input type="hidden" id="userId--${messageData.userId}"/> 
  <div class="hidden editMessage--${messageData.id}">
    <input id="messageDescription--${messageData.id}" value="${messageData.description}"/>
    <button id="message_saveEdit_btn--${messageData.id}">save</button> 
  </div>
  <div id="messageBody--${messageData.id}">${messageData.description}</div>
  <div class="messageUserName">-${messageData.user.username}</div>
  ${editButton}
  </section>`;
};

//function creating the initial message Container upon user login
function renderInitialSection() {
  messageSection.innerHTML = `<section class="messagesContainer">
  <div class="databaseMessages"></div>
  <div class="messageTextBox">
  <br>
  <input
            type="text"
            name="messageText"
            id="messageText"
            class="messageText"
            placeholder= "start typing"
          />
          <button id="message_send_btn" class="message_send_btn">send</button>
  </div>
  </section>
  `;
}

//calling the initial message Container upon user login
renderInitialSection();

//Function rendering Database Messages to their section in DOM
const databaseMessageContainer = document.querySelector(".databaseMessages");
function renderMessageToDOM(htmlMessage) {
  databaseMessageContainer.innerHTML += htmlMessage;
}

//Get all messages already existing in the database upon user login
let messageId = "";
const getAndRenderMesages = () => {
  databaseMessageContainer.innerHTML = "";
  API.getMessages().then((messages) => {
    messages.map(makeMessageComponent).forEach((item) => {
      renderMessageToDOM(item);
    });
  });
};

//Executing the function to get all messages existing in the database upon user login
getAndRenderMesages();

//Event Listeners for the buttons associated with Creating and Sending
const sendButtonListener = document.querySelector("#message_send_btn");
sendButtonListener.addEventListener("click", (event) => {
  let userMessageId = loggedUserId;
  let description = document.querySelector("#messageText").value;
  let newMessageEntry = buildMessageComponent(
    messageId,
    userMessageId,
    description
  );
  document.querySelector("#messageText").value = "";
  API.saveMessageEntry(newMessageEntry).then(getAndRenderMesages);
});

// Factory Function to build a new message entry
const buildMessageComponent = (messageId, userMessageId, description) => ({
  id: messageId,
  userId: userMessageId,
  description: description,
});

//Values needed for editing the message
const formMessageId = document.getElementById("entryId");
const formMessageUserId = document.getElementById("date");
const formDescription = document.getElementById("concept");

// function to prepopulate the edit message form when editing
function prepopulateForm(message) {
  formId.value = message.id;
  formUserId.value = message.userId;
  formDescription.value = message.description;
}

let editMessage = () => {
  return `
  <input
            type="text"
            name="messageText"
            id="messageText"
            placeholder= "start typing"
          />
          <button id="message_send_btn" class="message_send_btn">send</button>
  `;
};

//Event Listners to work with Edit and Delete dynamically
messageSection.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const messageId = event.target.id.split("--")[1];
    API.getMessagesByID(messageId).then((message) => {});
  }
  if (event.target.id.startsWith("delete--")) {
    const messageId = event.target.id.split("--")[1];
    API.deleteMessage(messageId).then(getAndRenderMesages);
  }
});

// Event Listener to hide the initial message when the edit button is clicked. Then making the edit box visible
messageSection.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const editBtnId = event.target.id.split("--")[1];
    document
      .querySelector(`.editMessage--${editBtnId}`)
      .classList.remove("hidden");
    document
      .querySelector(`#messageBody--${editBtnId}`)
      .classList.add("hidden");
  }
});

// Event listener for the save button after editing the message text
messageSection.addEventListener("click", (event) => {
  if (event.target.id.startsWith("message_saveEdit_btn--")) {
    const editBtnId = event.target.id.split("--")[1];
    let newMessageDescription = document.querySelector(
      `#messageDescription--${editBtnId}`
    ).value;
    const updatedMessageObject = {
      userId: loggedUserId,
      description: newMessageDescription,
    };
    API.updateMessage(updatedMessageObject, editBtnId).then(
      getAndRenderMesages
    );
  }
});
// function that returns HTML respresentaton of the edit and delete buttons only for messages that the person who is logged in creates.
const showCrudButton = (message) => {
  if (loggedUserId == message.userId) {
    return `
    <div class="btmright">
    <button class="lightBlue" id="edit--${message.id}" class="message_edit_btn">edit</button>
    <button class="redBG" id="delete--${message.id}" class="message_delete_btn">delete</button>
    </div>`;
  } else {
    return "";
  }
};
