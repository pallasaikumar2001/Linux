// 1. Return an array of all unique technologies used in any project by any user.

const data = require("./users-dataset.json");

function getAllUniqueTechnologies() {
  return data.reduce((acc, user) => {
    user.employment.forEach((emp) => {
      emp.projects.forEach((project) => {
        project.technologies.forEach((tech) => {
          if (!acc.includes(tech)) {
            acc.push(tech);
          }
        });
      });
    });
    return acc;
  }, []);
}

let result = getAllUniqueTechnologies();

console.log(result);
