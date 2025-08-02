const data=require('./users.json')

const negatives=data.users.filter(user=>user.bloodGroup==='O-');
console.log(negatives.length)

const admins=data.users.filter(user=>user.role==="admin")
// console.log(admins.length)
const adminnames=admins.map(adm=>adm.firstName+adm.lastName)

console.log(adminnames)