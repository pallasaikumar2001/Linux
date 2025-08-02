// - 5. Write a function called `nameWithA` which returns a array of names
// of all the people in `got` variable whose name includes `a` or `A`.

const data = require("./data.js");

function nameWithA() {
  return data.houses.reduce((acc, house) => {
    house.people.forEach((p) => {
      if (p.name.includes("a") || p.name.includes("A")) {
        acc.push(p.name);
      }
    });
    return acc;
  }, []);
}

let result = nameWithA();

console.log(result, result.length);
