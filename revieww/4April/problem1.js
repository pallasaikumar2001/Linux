// 1. Write a function called `countAllPeople` which counts the total
// number of people in `got` variable defined in `data.js` file.

let data = require("./data.js");

function countAllPeople() {
  return data.houses.reduce((acc, house) => {
   return acc + house.people.length;
   // console.log(acc);
    return acc;
  }, 0);
  // return data.houses.length;
}

let result = countAllPeople();

console.log(result);
