// - 4. Write a function called `nameWithS` which returns a array of names
// of all the people in `got` variable whose name includes `s` or `S`.

const data = require("./data.js");

function nameWithS() {
  return data.houses.reduce((acc, house) => {
    house.people.forEach((p) => {
      if (p.name.includes("s") || p.name.includes("S")) {
        acc.push(p.name);
      }
    });
    return acc;
  }, []);
}

let result = nameWithS();

console.log(result, result.length);
