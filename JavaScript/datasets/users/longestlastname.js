const data=require('./users.json')

const lastname=data.users.reduce((prev,curr)=>prev.lastName.length>curr.lastName.length ? prev:curr);
console.log(lastname.firstName+" "+lastname.lastName, 'has longest lastname');
