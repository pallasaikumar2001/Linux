const org = require("./organization.json");

// Identify the division with the highest number of employees and list its departments

function divisionWithHighestNoOfEmployees(org) {
  let maxDivision = { name: null, employeeCount: 0, departments: [] };

  org.organisation.divisions.forEach((division) => {
    let employeeCount = division.departments.reduce(
      (count, dept) => count + dept.employees.length,
      0
    );

    if (employeeCount > maxDivision.employeeCount) {
      maxDivision = {
        name: division.divisionName,
        employeeCount,
        departments: division.departments.map((dept) => dept.departmentName),
      };
    }
  });

  return maxDivision;
}

let result = divisionWithHighestNoOfEmployees(org);
console.log("Division with the highest number of employees:", result);


function divisionWithHighestNoOfEmployees(org) {
  const groupDivisionsByName = org.organisation.divisions.reduce((result, division) => {
    const { divisionName, departments } = division;
    const employeeCount = departments.reduce(
      (count, dept) => count + dept.employees.length, 
      0
    );
    result[divisionName] = { employeeCount, departments: departments.map((dept) => dept.departmentName) };
    return result;
  }, {});

  console.log(groupDivisionsByName)

  return Object.entries(groupDivisionsByName).reduce(
    (acc, [divisionName, divisionData]) => {
      const { employeeCount, departments } = divisionData;
      if (employeeCount > (acc.employeeCount || 0)) {
        acc = {
          divisionName,
          employeeCount,
          departments,
        };
      }
      return acc;
    },
    {}
  );
}

console.log(divisionWithHighestNoOfEmployees(org));
