const fs = require('fs'); 

fs.readFile('./hello.txt', (err, data) => {
    if (err){
        console.log('Fucking Error')
    }else
    console.log(data.toString())
});


 const file = fs.readFileSync('./hello.txt'); 
 console.log(file.toString()); 

 /*Append

 fs.appendFile('./hello.txt', ' General Kenobi!!!', err => {
     if(err){
         console.log(err)
     }
 })
 

 //Write 

 fs.writeFile('bye.txt', 'Sad to see you go', err => {
     if(err){ 
         console.log(err)
     }
 })
*/

//Delete
fs.unlink('./bye.txt', err => {
    if(err){ 
        console.log(err)
    }
    console.log('Inception')
})

