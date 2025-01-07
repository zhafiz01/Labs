const redditUrl = "https://www.reddit.com/r/aww/.json";

const fetchAwwPosts = async () => {
    try {
        const response = await fetch(redditUrl);
        if (!response.ok) throw new Error("API error");
        const data = await response.json();
        return data.data.children.map(post => post.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const displayPosts = async () => {
    const posts = await fetchAwwPosts();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    posts.slice(0, 10).forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        if (post.thumbnail && post.thumbnail !== 'self') {
            const img = document.createElement('img');
            img.src = post.thumbnail;
            postDiv.appendChild(img);
        }

        const title = document.createElement('h2');
        title.classList.add('post-title');
        title.innerText = post.title;
        postDiv.appendChild(title);

        const link = document.createElement('a');
        link.href = `https://www.reddit.com${post.permalink}`;
        link.target = '_blank';
        link.innerText = 'View Post';
        postDiv.appendChild(link);

        resultsDiv.appendChild(postDiv);
    });
};


displayPosts();
