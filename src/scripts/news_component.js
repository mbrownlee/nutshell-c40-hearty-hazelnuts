// Author: Brian Cravens
// Html components for News Section

const loggedUserId = sessionStorage.getItem("loggedUser");

const createNewsHeader = () => {
    return`
    <header class="news_header">YOUR NEWS ARTICLES
        <button id="addNews">Add News Article</button>
    </header>`
}
const createCurrentNews = (news) => {
    return`
    <section class="current_news" id = "news-${news.id}">
    <input type="hidden" id="newsId" value="" />
    <h1>${news.title}</h1>
    <p>${news.description}</p>
    <p><a href = ${news.url}>${news.url}</a></p>
    <p>${news.synopsis}</p>
    <p>${news.timestamp}</p>
    <button class="delete_news" id="delete-${news.id}">Delete</button>
    <button class="edit_news" id="edit-${news.id}">Edit</button>
    </section>`
}
const createAddNewsForm = () => {
    return`
    <section class="add_news">
        <h3 class="add_news_header">Add News</h3>
        <form class="add_news_form">
            <fieldset>
                <input type="hidden" id="newsId" value="" />
                <label for="news-title">Title:</label>
                <input type="text" id="news-title" name="news-title">
                <label for="news-description">Description:</label>
                <textarea id="news-description" name="news-description"></textarea>
                
                <label for="news-synopsis">Synopsis:</label>
                <textarea id="news-synopsis" name="news-synopsis"></textarea>
                
                <label for="news-url">URL:</label>
                <input type="text" id="news-url" name="news-url">
                <input type="hidden" id="news-timestamp" name="news-timestamp">
            </fieldset>
                <button id="submit-news">Create</button>
                <button id="discard-news">Discard</button>
        </form>
    </section>
    `
}
export default {createNewsHeader, createCurrentNews, createAddNewsForm}