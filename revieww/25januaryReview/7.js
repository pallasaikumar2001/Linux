const data = require("./organization.json");

function deptWithHighestBUdget() {
  let divisionAcc = {};
  let maxdept = { deptBudget: 0 };
  data.organisation.divisions.forEach((divison) => {
    let deptBudget = divison.departments.reduce((deptAcc, dept) => {
      dept.employees.forEach((employee) => {
        employee.projects.forEach((project) => {
          deptAcc += project.budget;
          // console.log(deptAcc);
        });
      });
      return deptAcc;
    }, 0);
    divisionAcc[divison.divisionName] = deptBudget;
    if (deptBudget > maxdept.deptBudget) {
      maxdept = {
        divison: divison.divisionName,
        deptBudget,
        depts:divison.departments.map(dept=>dept.departmentName)
      };
    }
  });
  return maxdept;
}

let result = deptWithHighestBUdget();

console.log(result);
