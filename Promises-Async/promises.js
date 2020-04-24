const promise = new Promise((resolved, reject) => {
  if (true) {
    resolved("Stuff Worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hi");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Pookie");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Is it me you are looking for");
});

Promise.all([promise,promise2, promise3, promise4])
.then(values =>{
  console.log(values)
})

//-------------Fetch URLs & Promises-----------------//

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error'))

