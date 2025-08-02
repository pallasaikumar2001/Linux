const data = require("./organization.json");

function getAverageAgeByDepartment(org) {
  return org.organisation.divisions.reduce((acc, division) => {
    division.departments.forEach((department) => {
      let totalAge = 0;
      let count = 0;

      department.employees.forEach((employee) => {
        totalAge += employee.age;
        count++;
      });

      acc[department.departmentName] = totalAge / count;
    });

    return acc;
  }, {});
}

console.log(getAverageAgeByDepartment(data));
