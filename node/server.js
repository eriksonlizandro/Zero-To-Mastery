

const express = require('express'); 

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Getting Root");
});


app.listen(3000);



// -------------EXPRESS-----------------

/*
const express = require('express'); 

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Getting Root");
});

app.get("/profile", (req, res) => {
  res.send("Getting Profile");
});

app.post("/profile", (req, res) => {
  console.log(req.body)
  res.send('Success!');
});

app.listen(3000);

//-------------Middleware-------------------
/*
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('<h1>Hello There!!!</h1>')
    next(); 
})

app.get("/", (req, res) => {
  res.send("thisTest");
});

app.listen(3000);



//-------------------Server------------------

/*
const http = require('http');

const server = http.createServer((request, response) => {
    //console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)

    const user ={
        name:'John',
        hobby:'Skating'
    }

    response.setHeader('Content-Type','application/json');
    response.end(JSON.stringify(user)); 
})

server.listen(3000); 
*/