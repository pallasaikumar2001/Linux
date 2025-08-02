data=require('./users.json');

//Find the average age of all users.
const avgage=data.users.reduce((sum,element)=>sum+element.age,0)/data.users.length;
console.log(avgage)

//Calculate the total weight of all users.
const totalweight=data.users.reduce((wsum,element)=>wsum+element.weight,0);
console.log(totalweight)

//Find the total number of characters in all usernames.
const totalchar=data.users.reduce((charsum,element)=>charsum+element.username.length,0);
console.log(totalchar);

//Determine how many users have Ethereum wallets.
const Ethereums=data.users.reduce((count,element)=>element.crypto.network==='Ethereum (ERC20)' ? count+1:count,0)
console.log(Ethereums)

//Get the total balance amount of all users in their respective currencies.
const userpercurrency=data.users.reduce((acc,user)=>{
    acc[user.bank.currency]=(acc[user.bank.currency] || 0)+1;
    return acc;
},{})

//number of admins
const admins=data.users.reduce((count,user)=>user.role==='admin'?count+1:count,0);
console.log(admins)

// 7. Number of users per blood group
const usersperbloodgroup=data.users.reduce((acc,user)=>{
    acc[user.bloodGroup]=(acc[user.bloodGroup]||0)+1;
    return acc
},{})
console.log(usersperbloodgroup)

//average height of female users
const avgfemalesheight=data.users.reduce((acc,user)=>user.gender==='female' ? acc+user.height:acc,0)/data.users.length;
console.log(avgfemalesheight)

//total users per state
const usersperstate=data.users.reduce((acc,user)=>{
    acc[user.address.state]=(acc[user.address.state] || 0)+1;
    return acc
},{})
console.log(usersperstate)

//maximum height user among all users
const maxHeight=data.users.reduce((prev,curr)=>prev.height>curr.height ? prev : curr);
console.log("maximum height candidate is :",maxHeight.firstName)

//eyecolor along with the users first name
const eyecolors=data.users.reduce((acc,user)=>{
    if(!acc[user.eyeColor]){
        acc[user.eyeColor]=[]
    }acc[user.eyeColor].push(user.firstName)
    return acc
},{})
console.log(eyecolors)