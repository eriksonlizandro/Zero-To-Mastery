/** function sayHello(){
    console.log('hello bitch');
}
sayHello();

function sign(song) {
  console.log(song)
}
sign('A ella le gusta la gasolina');
sign('dame mas gasolina');

function multiply(a,b){
    return a * b;
}
multiply(5,10);

function multiply(a,b){
    if(a > 10 || b > 10){
        return "that's too hard";
    }else{
        return a * b; 
    }
}
multiply(5,10);


function checkDriverAge(){
prompt('What\'s your age Stranger?');

}**/

/**facebook**/

var database = [
  {
    username: "Jenny",
    password: "eriksdick"
  },
  {
    username: "Kris",
    password: "123"
  },
  {
    username: "Sam",
    password: "satan"
  },
  {
    username: "Sony",
    password: "saarsafaar"
  }
];

var newsfeed = [
  {
    username: "Charlie",
    timeline: "Fuck the world"
  },
  {
    username: "Rose",
    timeline: "Hello bitches"
  },
  {
    username: "Mikasa",
    timeline: "Attack on Titan fuck yeah"
  }
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsfeed);
    } else {
      alert("Wrong username or password motherfucker");
    }
  
}
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password");

signIn(userNamePrompt, passwordPrompt);

/**facebook**/


/*if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry wrong username or password !!");

  }*/
