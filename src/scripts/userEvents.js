import users from "./users.js";
import API from "./api.js";

const dashboardContainer = document.getElementById("dashboard");
const createLoginContainer = document.getElementById("createAccountForm");
const createLogin = document.getElementById("createAccount");
const loginBtn = document.getElementById("login");
const loginContainer = document.getElementById("log_me_in");

const welcome = () => {
  const displayWelcome = users.createWelcome();
  users.renderWelcome(displayWelcome);
};

//Event Listener for Login
loginContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  let targetElement = event.target;
  if (targetElement.id == "createAccount") {
    createLoginContainer.style.visibility = "visible";
    createLoginContainer.innerHTML = users.renderLogin();
  } else if (targetElement.id == "logOut") {
    sessionStorage.clear();
  } else if (targetElement.id == "login") {
    if (usernameInput.value === "" || passwordInput.value === "") {
      window.alert("Fill out username and password fields");
    } else {
      API.getUser(usernameInput.value).then((user) => {
        if (user.length < 1) {
          window.alert("User Account doesn't exist");
        } else if (
          user[0].username === usernameInput.value &&
          user[0].password === passwordInput.value
        ) {
          sessionStorage.setItem("loggedUser", user[0].id);
          let loggedUser = sessionStorage.getItem(`loggedUser`);
          console.log("Session Stored", loggedUser);
          dashboardContainer.innerHTML = "";
        } else {
          clearForm();
          window.alert("Username and password do not match");
        }
      });
    }
  }
});
//Event Listener for Create Login Container
createLoginContainer.addEventListener("click", (event) => {
  const createUsername = document.getElementById("createUsername");
  const createPassword = document.getElementById("createPassword");
  const createEmail = document.getElementById("createEmail");

  event.preventDefault();
  let targetElement = event.target;
  function clearForm() {
    createUsername.value = "";
    createEmail.value = "";
    createPassword.value = "";
  }
  const userValues = {
    username: createUsername.value,
    email: createEmail.value,
    password: createPassword.value,
  };
  if (targetElement.id == "createUserBtn") {
    if (
      createUsername.value === "" ||
      createPassword.value === "" ||
      createEmail.value === ""
    ) {
      window.alert("Please fill out all fields");
    } else {
      API.getUser(createUsername.value).then((user) => {
        if (user.length < 1) {
          API.createUser(userValues).then((newUser) => {
            sessionStorage.setItem("loggedUser", newUser.id);
            dashboardContainer.innerHTML = "";
            console.log("entry created");
            createLoginContainer.style.visibility = "hidden";
            window.alert("Your account has been created!");
          });
        } else {
          clearForm();
          window.alert("User already exists");
          event.stopPropagation();
        }
      });
    }
  }
});

export default { welcome };
