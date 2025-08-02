// - 3. Write a function called `everyone` which returns a array of names
//  of all the people in `got` variable.

const data = require("./data.js");

function everyone() {
  return data.houses.reduce((acc, house) => {
    house.people.forEach((p) => {
      acc.push(p.name);
    });
    return acc;
  }, []);
}

let result = everyone();

console.log(result, result.length);
