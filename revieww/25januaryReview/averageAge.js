const data=require('./organization.json');

function getAverageAgeByDivision(org) {
    return org.organisation.divisions.reduce((acc, division) => {
      let totalAge = 0;
      let count = 0;
  
      division.departments.forEach(department => {
        department.employees.forEach(employee => {
          totalAge += employee.age;
          count++;
        });
      });
  
      acc[division.divisionName] = totalAge / count;
      return acc;
    }, {});
  }
  
  console.log(getAverageAgeByDivision(data));
  