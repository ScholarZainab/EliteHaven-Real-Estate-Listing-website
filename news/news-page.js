// Sample data for all news articles
const allNewsArticles = [
    {
        id: "1",
        title: "ALX Africa Cohort 22 News",
        description: "Alx Software Engineeng Portfolio Project.",
        content: "This brings us to the completion of AlX Africal Chort 22.",
        image: "news/alximage.jpg"
    },
    {
        id: "2",
        title: "Zainab Akinola Graduates from ALX Africa",
        description: "Zainab Akinola Graduates from ALX Africa after more than a year rigourous training.",
        content: "Zainab Akinola Graduates from ALX Africa after more than a year rigourous training. She is so happy to have been able to complete the course.",
        image: "news/image2.jpg" 
    },
    {   id: "3",
        title: "Zainab Akinola Graduates from ALX Africa",
        description: "Zainab Akinola Graduates from ALX Africa after more than a year rigourous training.",
        content: "Zainab Akinola Graduates from ALX Africa after more than a year rigourous training. She is so happy to have been able to complete the course.",
        image: "news/image2.jpg" 
    },
    // Add more articles as neededS
];

// Function to display all articles
function displayAllArticles() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear existing content

    allNewsArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');
        articleDiv.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="feature-image">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="news-detail.html?article=${article.id}">Read more</a>
        `;
        newsContainer.appendChild(articleDiv);
    });
}

// Call the function to display all articles on page load
window.onload = displayAllArticles;