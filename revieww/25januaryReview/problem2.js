//List all unique certifications held by employees
//  across the organisation.

const org = require("./organization.json");

function uniqueCertificationByEmployees(org) {
  const result = new Set();
  org.organisation.divisions.forEach((division) => {
    division.departments.forEach((dept) => {
      dept.employees.forEach((employee) => {
        employee.certifications.forEach((certification) => {
          result.add(certification);
        });
      });
    });
  });
  return Array.from(result);
}

const final = uniqueCertificationByEmployees(org);

console.log(final);
