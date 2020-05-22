//Author: Brian Cravens
// Api manager for users, and News 

const API = {
  createUser(userObject) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    }).then((data) => data.json());
  },

  getUser(username) {
    return fetch(`http://localhost:3000/users?q=${username}`).then((data) =>
      data.json()
    );
  },
      getUsers() {
        return fetch(`http://localhost:3000/users`).then((data) =>
          data.json()
        )
      },
  getNews (){
    return fetch(`http://localhost:3000/news`).then((data)=>
    data.json()
    )
  },
  saveNews (newsObject){
    return fetch(`http://localhost:3000/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsObject),
    })
  },
  deleteNews (newsId){
    return fetch(`http://localhost:3000/news/${newsId}`, {
      method: "Delete"
    }).then((data) => data.json());
  },
  getNewsById (newsId){
    return fetch (`http://localhost:3000/news/${newsId}`)
    .then(data => data.json())
  },
  editNews (newsObject, newsId){
    return fetch(`http://localhost:3000/news/${newsId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsObject),
    }).then((data) => data.json());
  },
};
export default API;
