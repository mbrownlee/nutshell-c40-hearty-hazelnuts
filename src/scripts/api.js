const API = {
    createUser(userObject){
        return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(userObject)
    })
},

    getUser(username){
        return fetch(`http://localhost:3000/users?q=${username}`)
        .then(data => data.json())
    },
}
export default API