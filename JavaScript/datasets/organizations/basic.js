const data=require("./organisation.json")

//1. List all employee anems in division1, HR department:
console.log(data.organisation.divisions[0].departments[0].employees)

//2. print the names of projects that are marked as completed:
const employees = data.organisation.divisions[0].departments[0].employees;
const completedProjects=employees.flatMap(emp=>
    emp.projects.filter(p=>p.status==="Completed").map(p=>p.name)
);
console.log(completedProjects)

//3. Dsiplay all the certifications of the employee 1-1-3
const emp=employees.filter(e=>e.name==="Employee 1-1-3");
console.log(emp[0].certifications)

//4. SHow the cities where each employee lives:
const cities=employees.map(e=>e.address.city);
console.log(cities)

//5. Count how many employees have the role engineering:
const engineerCount=employees.filter(e=>e.role==="Engineer").length;
console.log(engineerCount)

const engineers=employees.reduce((acc,emp)=>{
    if(emp.role==="Engineer")acc.push(emp.name)
    return acc;
},[])
console.log(engineers)