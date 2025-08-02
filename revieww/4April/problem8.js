// - 8. Write a function called `peopleNameOfAllHouses` which returns an
// object with the key of the name of house and value will be all the
// people in the house in an array.

const data = require("./data.js");

function peopleNameOfAllHouses() {
  return data.houses.reduce((acc, house) => {
    acc[house.name] = house.people.map((p) => {
      return p.name;
    });
    return acc;
  }, {});
}

let result = peopleNameOfAllHouses();
console.log(result);
