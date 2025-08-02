//Calculate the total budget allocated to projects in
// the "Engineering" department across all divisions.

const data = require("./organization.json");

function totalBudgetAllocated(data) {
  let total = 0;

  data.organisation.divisions.forEach((division) => {
    division.departments.forEach((dept) => {
      if (dept.departmentName === "Engineering") {
        dept.employees.forEach((employee) => {
          total = employee.projects.reduce((acc, project) => {
            return acc + project.budget;
          }, 0);
        });
      }
    });
  });
  console.log(total);
}

totalBudgetAllocated(data);
