const data=require('./users.json')

const userbyid3=data.users.find(user=>user.id===3);
console.log('full name of user with id 3:', `${userbyid3.firstName} ${userbyid3.lastName}`)