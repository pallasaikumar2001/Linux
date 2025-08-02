//Get all employees across all divisions working on projects
// with a budget exceeding $150,000

const org = require("./organization.json");

const getAllEmployees = (org) => {
  const result = [];
  org.organisation.divisions.forEach((division) => {
    division.departments.forEach((dept) => {
      dept.employees.forEach((employee) => {
        employee.projects.forEach((project) => {
          if (project.budget > 150000) {
            if (!result.includes(employee.name)) result.push(employee.name);
          }
        });
      });
    });
  });
  return Array.from(result);
};
const employeesWithHighBudgetProjects = getAllEmployees(org);
console.log(employeesWithHighBudgetProjects.length);
