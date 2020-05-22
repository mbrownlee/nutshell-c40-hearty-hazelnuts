//Author: Brian Cravens
// Event Listeners for News Section

import API from "./api.js"
import dom from "./news_dom.js"
const loggedUserId = sessionStorage.getItem("loggedUser");
const newsSection = document.querySelector("#news")

//variables for creating timestamp
var currentdate = new Date(); 
var datetime = "Last Updated: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

//initial render of News Section 
function makeNews(){               
dom.addNewsHeader()
API.getNews()
.then(news => dom.showNews(news.filter(news => news.userId == loggedUserId)))
}
//Function to edit news article
    const newsEdit = (newsObject, newsId) => {
        newsId = parseInt(newsId);
        return API.editNews(newsObject, newsId)
            .then(() => (document.getElementById("newsId").value = ""))
    }
    //function to populate form for edit
    function prepopulateForm (news) {
        dom.addNewsHeader()
        dom.showNewsTaskForm()
        const title = document.getElementById("news-title")
        const description = document.getElementById("news-description")
        const synopsis = document.getElementById("news-synopsis")
        const url = document.getElementById("news-url")
        const timestamp = document.getElementById("news-timestamp")
        const newsId = document.getElementById("newsId")
        title.value = news.title
        description.value = news.description
        synopsis.value = news.synopsis
        url.value = news.url
        timestamp.value = datetime
        newsId.value = news.id
    }
    newsSection.addEventListener("click", event => {
        let targetId = event.target.id
        if (targetId === "addNews"){
            dom.showNewsTaskForm()
            
        }else if (targetId === "submit-news"){
        event.preventDefault()
        const newsId = document.getElementById("newsId").value
        const title = document.getElementById("news-title").value
        const description = document.getElementById("news-description").value
        const synopsis = document.getElementById("news-synopsis").value
        const url = document.getElementById("news-url").value
        const timestamp = Date(Date.now()).toString()
        let newNews = {
            "userId": parseInt(loggedUserId, 10),
            "description": description,
            "url": url,
            "title": title,
            "synopsis": synopsis,
            "timestamp": datetime
        }
        if (title === "" || description === "" || synopsis === "" || url === "" || timestamp === ""){
            return window.alert("Please Fill Out All Fields")

            }if(newsId !== ""){
                    API.editNews(newNews, newsId)
                    .then(() => {
                        dom.removeNewsTaskForm()
                        dom.addNewsHeader()
                        location.reload()
                        .then( () => API.getNews())
                        .then(news => dom.showNews(news.filter(news => news.userId == loggedUserId)))
                    })
            }else{
                API.saveNews(newNews)
                .then(() => {
                    dom.removeNewsTaskForm()
                    dom.addNewsHeader()
                    API.getNews()
                    .then(news => dom.showNews(news.filter(news => news.userId == loggedUserId)))   
                })
            }
        
         }else if (targetId === "discard-News"){
            dom.removeNewsTaskForm()
            dom.addNewsHeader()
            location.reload()
            API.getNews()
                .then(news => dom.showNews(news.filter(news => news.userId == loggedUserId)))

    }else if (targetId.startsWith("edit-")){
        API.getNewsById(event.target.id.split('-')[1])
            .then(news => {
                let newNews = {
                "userId": news.userId,
                "description": news.description,
                "url": news.url,
                "title": news.title,
                "synopsis": news.synopsis,
                "timestamp": datetime,
                "id": news.id
        }
                prepopulateForm(news)
            })
        
    }else if (event.target.id.startsWith("delete-")){
        API.deleteNews(event.target.id.split('-')[1])
        .then( () => API.getNews())
        .then(news => dom.showNews(news.filter(news => news.userId == loggedUserId)))
    }

})

export default { makeNews }