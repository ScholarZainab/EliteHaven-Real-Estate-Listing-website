document.getElementById('news-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const content = document.getElementById('content').value;

    // Simulate saving the article (in practice, this would involve sending to a server)
    const newArticle = {
        id: (Math.random() * 1000).toFixed(0), // Random ID for demo purposes
        title: title,
        description: description,
        content: content,
        image: image
    };

    // Push new article to the newsArticles array
    newsArticles.push(newArticle);

    alert('Article published successfully!');
    // Optionally, redirect to the news page or clear the form
    document.getElementById('news-form').reset();
});