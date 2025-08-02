
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