const data = require("./organization.json");

function highestBudgetDepartmentPerDivision(data) {
  const result = {};

  data.organisation.divisions.forEach((division) => {
    let highestDept = { name: null, budget: 0 };

    division.departments.forEach((dept) => {
      let totalBudget = 0;

      dept.employees.forEach((employee) => {
        employee.projects.forEach((project) => {
          totalBudget += project.budget;
        });
      });

      if (totalBudget > highestDept.budget) {
        highestDept = { name: dept.departmentName, budget: totalBudget };
      }
    });

    result[division.divisionName] = highestDept.name;
  });

  console.log("Department with Highest Budget in Each Division:", result);
}

highestBudgetDepartmentPerDivision(data);
