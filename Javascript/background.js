var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Old method //
/*color1.addEventListener("input", function() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
});

/*color2.addEventListener("input", function() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
});*/

// How I did it //
/*
var gradient = addEventListener("input", function() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
});

color1.gradient();
color2.gradient();
*/

//How it was done in the course// 

function setGradient(){
    body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);



