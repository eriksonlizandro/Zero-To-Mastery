/*var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function(){
    console.log('CLICK!!!');
})*/

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


function inputLength() {
  return input.value.length;
}

// This function creates  a new element "li" 
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  li.addEventListener("click", function(){

// this var creates a toggle and add the element "done"
  var finished = this.classList.toggle("done");

//Creates a new element in this case the Button
  var removeButton = document.createElement("button");
  removeButton.classList.add("deleteButton");

  
  if (finished){
    removeButton.appendChild(document.createTextNode('X'));
    removeButton.classList = "deleteButton";
    li.appendChild(removeButton);

    removeButton.addEventListener("click", function() {
      this.parentElement.remove();
    });

  }else{
    this.getElementsByClassName("deleteButton")[0].remove();
  }
  })

  //Input value back to nothing 
  input.value = "";
}



function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
