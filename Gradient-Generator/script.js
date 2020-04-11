var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value
        + ", " 
        + color2.value 
        + ")";

        css.innerHTML = body.style.background + ",";
}

function setRandomColor() {
    var genColor = Math.floor(Math.random()*16777215).toString(16);;
    var genColor2 =Math.floor(Math.random()*12345678).toString(16);;
    body.style.background = 
        "linear-gradient(to right, "
        + "#" + genColor
        + ", " 
        + "#" + genColor2
        + ")";
        
        css.innerHTML = body.style.background + "#"+ genColor + "," + "#" + genColor2;
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColor.addEventListener("click", setRandomColor);





