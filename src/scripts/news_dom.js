import component from "./news_component.js"

const newsSection = document.querySelector("#news")

const addNewsHeader = () => {
    document.getElementById("news").innerHTML = component.createNewsHeader()
}

const showNewsTaskForm = () => {
    document.getElementById("news").innerHTML = component.createAddNewsForm()
}

const removeNewsTaskForm = () => {
    const addNews = document.querySelector('.add_news')
    addNews.parentElement.removeChild(addNews)
}

const showNews = (news) => {
    Array.from(newsSection.getElementsByClassName('news_current_card')).forEach(card => card.parentElement.removeChild(card))
    news.forEach(current => {
        let newsCard = document.createElement('div')
        newsCard.className = "news_current_card"
        newsCard.innerHTML = component.createCurrentNews(current)
        newsSection.appendChild(newsCard)
    })
}
export default {addNewsHeader, showNewsTaskForm, removeNewsTaskForm, showNews}