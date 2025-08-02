// - 7. Write a function called `surnameWithA` which returns a array of
// names of all the people in `got` variable whoes surname is starting
// with `A`(capital a).

const data = require("./data.js");

function surnameWithA() {
  return data.houses.reduce((acc, house) => {
    house.people.forEach((p) => {
      if (p.name.split(" ")[1][0] === "A") {
        acc.push(p.name);
      }
    });
    return acc;
  }, []);
}
let result = surnameWithA();
console.log(result, result.length);
