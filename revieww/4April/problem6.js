// - 6. Write a function called `surnameWithS` which returns a array of
// names of all the people in `got` variable whoes surname is starting
// with `S`(capital s).

const data = require("./data.js");

function surnameWithS() {
  return data.houses.reduce((acc, house) => {
    house.people.forEach((p) => {
      if (p.name.split(" ")[1][0] === "S") {
        acc.push(p.name);
      }
    });
    return acc;
  }, []);
}
let result = surnameWithS();
console.log(result);
