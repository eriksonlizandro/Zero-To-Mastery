//let + const

const player = "bobby";
// Const cannot be reassign, but if it is an object you
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  // With let you can create a new scope inside brakets
  let wizardLevel = true;
}

//Destructuring

const obj = {
  player: "Bobby",
  experience: 100,
  wizardLevel: false
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// we can do this same thing with less code

const { player, experience } = obj;
let { wizardLevel } = obj;

//Object properties
const name = "john snow";

const obj = {
  [name]: "hello",
  [1 + 2]: "hihi"
};

// Template Strings 
const name = 'Puto';
const pet ='bitch'; 
const age = 34;

const greetings = `Hello ${name} you seem to be ${age}. Nice ${pet} you have`;

//Default arguments 
function greet(name = '', age =30, pet = 'cat'){
return  `Hello ${name} you seem to be ${age}. Nice ${pet} you have`
}

//Arrow function 

function add(a, b){
    return a + b;
}

//Forma abreviada con arrow function 
const add2 = (a, b) => a + b; 