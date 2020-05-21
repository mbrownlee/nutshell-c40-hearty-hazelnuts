const createNewsHeader = () => {
    return`
    <header class="news_header">YOUR NEWS ARTICLES
        <button id="addNews">Add News Article</button>
    </header>`
}
const createCurrentNews = (news) => {
    return`
    <section class="current_news" id = "news-${news.id}">
    <h1>${news.title}</h1>
    <p>${news.description}</p>
    <p>${news.url}</p>
    <p>${news.synopsis}</p>
    <p>${news.timestamp}</p>
    <button class="delete_news" id="deleteNews-${news.id}">Delete</button>
    <button class="edit_news" id="editNews-${news.id}">Edit</button>
    </section>`
}
const createAddNewsForm = () => {
    return`
    <section class="add_news">
        <h3 class="add_news_header">Add News</h3>
        <form class="add_news_form">
            <fieldset>
                <label for="news-title">Title:</label>
                <input type="text" id="news-title" name="news-title">
                <label for="news-description">Description:</label>
                <textarea id="news-description" name="news-description"></textarea>
                <label for="news-synopsis">Synopsis:</label>
                <textarea id="news-synopsis" name="news-synopsis"></textarea>
                <label for="news-url">URL:</label>
                <input type="url" id="news-url" name="news-url">
                <label for ="news-timestamp">Time:</label>
                <input type="datetime" name="news-timestamp">
            </fieldset>
            <button id="submit-news">Create</button>
            <button id="discard-news">Discard</button>
        </form>
    </section>`
}
export default {createNewsHeader, createCurrentNews, createAddNewsForm}