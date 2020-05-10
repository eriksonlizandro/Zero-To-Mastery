const fs = require("fs");

//1- What floor does Santa Needs to go
// ( --> 1 floor up
// ) --> 1 floor down

const question1 = () => {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log("Floor", answer);
  });
};

question1();


const question2 = () => {
    fs.readFile("./santa.txt", (err, data) => {
      console.time("q2 = santa-time");
      const directions = data.toString();
      const directionsArray = directions.split("");
      let accumulator = 0
      let counter = 0 
      const answer = directionsArray.some((currentItem) => {
        if (currentItem === "(") {
          accumulator += 1

        } else if (currentItem === ")") {
          accumulator -= 1
        }
        counter ++
        return accumulator < 0; 
      });

      console.timeEnd("q2 = santa-time");
      console.log('basement entered at: ', counter)
    })
}

question2(); 