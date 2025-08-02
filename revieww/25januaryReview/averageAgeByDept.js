const data = require("./organization.json");

function getAverageAgeByDepartment(org) {
  return org.organisation.divisions.reduce((acc, division) => {
    acc[division.divisionName] = division.departments.reduce(
      (deptAcc, department) => {
        let totalAge = 0;
        let count = 0;

        department.employees.forEach((employee) => {
          totalAge += employee.age;
          count++;
        });

        deptAcc[department.departmentName] = totalAge / count;
        return deptAcc;
      },
      {}
    );

    return acc;
  }, {});
}

console.log(getAverageAgeByDepartment(data));

// function getDivisionDetails(org) {
//     return org.organisation.divisions.reduce((acc, division) => {
//         let totalAge = 0;
//         let count = 0;
//         let departments = [];

//         division.departments.forEach(department => {
//             departments.push(department.departmentName);
//             department.employees.forEach(employee => {
//                 totalAge += employee.age;
//                 count++;
//             });
//         });

//         acc[division.divisionName] = {
//             averageAge: totalAge / count,
//             departments: departments
//         };
//         return acc;
//     }, {});
// }

// console.log(getDivisionDetails(data));
