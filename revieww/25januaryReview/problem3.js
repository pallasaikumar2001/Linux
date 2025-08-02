//Identify all pairs of employees who work
// on at least one common project
const org = require("./organization.json");

function getCommonProjectWorkers(org) {
  const group = [];

  org.organisation.divisions.forEach((division) => {
    division.departments.forEach((dept) => {
      dept.employees.forEach((employee) => {
        employee.projects.forEach((project) => {
          group[project.id] = group[project.id] || [];
          group[project.id].push(employee.name);
        });
      });
    });
  });
  return group;
}

const final = (getCommonProjectWorkers(org));

console.log(final);
