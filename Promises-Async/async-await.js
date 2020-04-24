//Async Await

// easy example

movePlayer(100, "left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

async function playerStart() {
  const firstMove = await movePlayer(100, "left"); //pause
  const secondMove = await movePlayer(400, "left"); //pause
  const thirdMove = await movePlayer(10, "Right"); //pause
  const fourthMove = await movePlayer(350, "left"); //pause
}

// More realistic Example

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);

async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

//third example

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
  .then((array) => {
    console.log("users", array[0]);
    console.log("posts", array[1]);
    console.log("albums", array[2]);
  })
  .catch("Oops!");

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  )
  console.log("users", array[0]);
  console.log("posts", array[1]);
  console.log("albums", array[2]);
};
