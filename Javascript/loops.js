var toDos = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];
var toDos2 = [
    'clean room !',
    'brush teeth !',
    'exercise !',
    'study javascript !',
    'eat healthy !'
];

/**FOR**/

/**for (var i = 0; i < length.toDos; i++){
console.log(toDos[i] + '!');
}**/

/**for (var i = 0; i < toDos.length; i++){
    toDos[i] = toDos[i] + '!';
}**/

/**for (var i = 0; i < toDosLength; i++){
    toDos.pop();
}*/

/**WHILE**/

/** var counterOne = 0;
while (counterOne < 10){
    console.log(counterOne);
    counterOne++
}

var counterOne = 10;
while (counterOne < 0){
    console.log(counterOne);
    counterOne-- 
}
*/

/**DO WHILE */

/**var counterTwo = 10
do{
    console.log(counterTwo);
    counterTwo--;
}while(counterTwo > 0);  */

var toDosLength = toDos.length;

function logToDos(toDos, i){
    console.log(toDos, i); 
}

toDos.forEach(logToDos);
toDos2.forEach(logToDos);


