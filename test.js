// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=>res.json())
// .then(data=>console.log(data));

// console.log("Hello");
// console.log(true);

const data = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Hello");
    const json = await res.json();
    console.log(json);
    console.log(true);
}
data();