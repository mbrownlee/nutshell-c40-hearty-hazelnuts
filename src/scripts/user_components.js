//Author: Brian Cravens
// Html components for the Welcome page and creating users.
const dashboardContainer = document.getElementById("dashboard");

const users = {
  renderLogin() {
    return `
    <div class="createUser">
    <h1>Create your account</h1>
    <input type="text" id="createUsername" placeholder="username">
    <input type="text" id="createPassword" placeholder="password">
    <input type="text" id="createEmail" placeholder="email">
    <button id="createUserBtn">Create Account</button>
    </div>`;
  }
};

export default users;
