// - 2. Write a function called `peopleByHouses` which counts the total
// number of people in different houses in the `got` variable defined in
// `data.js` file.

let data = require("./data.js");

function peopleByHouses() {
  return data.houses.reduce((acc, house) => {
    acc[house.name] = house.people.length;
    return acc;
  }, {});
}

let result = peopleByHouses();

console.log(result);
