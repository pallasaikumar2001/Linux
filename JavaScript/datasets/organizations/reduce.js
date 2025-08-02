const data=require("./organisation.json")

const divisions=data.organisation.divisions


//1. Total project budget per employee(all divisions)
const totalbudget=divisions.reduce((divAcc,division)=>{
    return division.departments.reduce((deptAcc,dept)=>{
        return dept.employees.reduce((empAcc,emp)=>{
            const total=emp.projects.reduce((sum,proj)=>sum+proj.budget,0);
            empAcc[emp.name]=total;
            return empAcc
        },deptAcc)
    }, divAcc)
},{})
console.log(totalbudget)


//2. Count of employees per role
const roleCount=divisions.reduce((divAcc,division)=>{
    return division.departments.reduce((deptAcc,dept)=>{
        return dept.employees.reduce((empAcc,emp)=>{
            empAcc[emp.role]=(empAcc[emp.role]||0)+1;
            return empAcc
        },deptAcc)
    },divAcc)
},{});
console.log(roleCount)


//3. List all unique certifications:
const certifications=divisions.reduce((divAcc,division)=>{
    return division.departments.reduce((deptAcc,dept)=>{
        return dept.employees.reduce((empAcc,emp)=>{
            emp.certifications.forEach(cert=>empAcc.add(cert));
            return empAcc
        }, deptAcc)
    }, divAcc)
},new Set());
console.log([...certifications])


//4. Group employees by city
const cityGroup=divisions.reduce((divAcc,division)=>{
    return division.departments.reduce((deptAcc,dept)=>{
        return dept.employees.reduce((empAcc,emp)=>{
            const city=emp.address.city;
            if(!empAcc[city]){
                empAcc[city]=[];
                empAcc[city].push(emp.name);
            }
            return empAcc
        }, deptAcc)
    },divAcc)
},{})
console.log(cityGroup)

//5. Milestome status count across all projects
const milestomeStatus=divisions.reduce((divAcc,division)=>{
    return division.departments.reduce((deptAcc,dept)=>{
        return dept.employees.reduce((empAcc,emp)=>{
            return emp.projects.reduce((projAcc,proj)=>{
                return proj.milestones.reduce((milestoneAcc,milestone)=>{
                    milestoneAcc[milestone.status]=(milestoneAcc[milestone.status]||0)+1;
                    return milestoneAcc
                },projAcc)
            }, empAcc)
        }, deptAcc)
    }, divAcc)
},{})
console.log(milestomeStatus)