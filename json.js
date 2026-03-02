const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))   
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}

const displayPosts = (posts) => {
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = '';

    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
        postContainer.append(div);
    });
}