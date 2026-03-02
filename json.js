const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))   
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPost(data))
}

const displayPost = (posts) => {
    posts.forEach(post => {
        console.log(post);
    });
}