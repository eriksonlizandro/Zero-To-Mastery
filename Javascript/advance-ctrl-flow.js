//Ternary Operator

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
  "Your account # is" + (isUserValid(false) ? "12345" : "Not valid");

//Switch

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you encounter a monster";
      break;

    case "right":
      whatHappens = "you encounter a monster";
      break;

    case "left":
      whatHappens = "you encounter a monster";
      break;

    default:
        whatHappens= "please enter a valid direction";
  }
  return whatHappens;
}
