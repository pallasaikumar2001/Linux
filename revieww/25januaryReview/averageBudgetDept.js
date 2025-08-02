let data = require("./organization.json");

function getMaxDivision() {
  let maxDivison = { employeeCount: 0 };
  data.organisation.divisions.forEach((division) => {
    let employeeCount = division.departments.reduce((deptAcc, dept) => {
      deptAcc += dept.employees.length;
      return deptAcc;
    }, 0);

    if (employeeCount > maxDivison.employeeCount) {
      maxDivison = {
        employeeCount,
        name: division.divisionName,
        departments: division.departments.map((dept) => dept.departmentName),
      };
    }
  });
  return maxDivison;
}

let result = getMaxDivision();

console.log(result);
