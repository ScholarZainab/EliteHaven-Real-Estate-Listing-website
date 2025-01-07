// Sample data for news articles
let newsArticles = [];

// Function to fetch and display the latest news
function displayLatestNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear existing content
    const latestNews = newsArticles.slice(-4); // Get latest 4 articles

    latestNews.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');
        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <img src="${article.image}" alt="${article.title}" class="feature-image">
            <p>${article.description}</p>
            <a href="news-detail.html?article=${article.id}">Read more</a>
        `;
        newsContainer.appendChild(articleDiv);
    });
}

// Call the function to display news on page load
window.onload = displayLatestNews;