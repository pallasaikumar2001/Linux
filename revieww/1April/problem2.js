// 2. Return a grouped object where the keys are country names
//  and values are arrays of user names living in that country
// (only home address counts).

// {
//     "USA": ["Alice Johnson", "Emma Watson", ...],
//     "Canada": ["Liam Brown", ...]
// }
const data = require("./users-dataset.json");
function groupByCountry() {
  return data.reduce((acc, user) => {
    user.address.forEach((add) => {
      let country = add.location.country;
      acc[country] = acc[country] || [];
      acc[country].push(user.name.first + " " + user.name.last);
    });
    return acc;
  }, {});
}

let result = groupByCountry();

console.log(result, Object.keys(result).length);
