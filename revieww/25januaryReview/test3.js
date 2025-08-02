const org = require("./organization.json");

function getCommonProjectWorkers(org) {
  const projectEmployeeMap = {};

  org.organisation.divisions.forEach((division) => {
    division.departments.forEach((dept) => {
      dept.employees.forEach((employee) => {
        employee.projects.forEach((project) => {
          projectEmployeeMap[project.id] = projectEmployeeMap[project.id] || [];
          projectEmployeeMap[project.id].push(employee.name);
        });
      });
    });
  });

  const result = Object.entries(projectEmployeeMap).map(([project, employees]) => ({
    project,
    employees,
  }));

  
  console.log(result);
  

  return result;
}

const final = getCommonProjectWorkers(org);

console.log(final);
