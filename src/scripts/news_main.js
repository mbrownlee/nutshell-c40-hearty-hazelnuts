import API from "./api.js"
import dom from "./news_dom.js"

const loggedUserId = sessionStorage.getItem("loggedUser");
const newsSection = document.querySelector("#news")

dom.addNewsHeader()
API.getNews()
    .then(news => dom.showNews(news.filter(news => news.userId == loggedUserId)))


newsSection.addEventListener("click", event => {
    targetId = event.target.id
    if (targetId === "addNews"){
        dom.showNewsTaskForm()

    }if (targetId === "submit-news"){
        event.preventDefault()
        const title = document.querySelector("#news-title").value
        const description = document.querySelector("#news-description").value
        const synopsis = document.querySelector("#news-synopsis").value
        const url = document.querySelector("#news-url").value
        const timestamp = document.querySelector("#news-timestamp").value
        if(title=== "" || description === "" || synopsis === "" || url === "" || timestamp === "" ||){
            window.alert("Please Fill Out All Fields")
        }else{
            let newNews = {}
        }
        

    }if (targetId === "discard-News"){

    
    }if (targetId === "editNews"){

    }

})