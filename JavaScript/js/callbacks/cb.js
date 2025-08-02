function greeting(name){
    console.log(`Hello, ${name}`)
}

function input(cb,user){
    cb(user)
}
input(greeting,"saikumar")

function fetchdata(cb){
    setTimeout(()=>{
        const data={name:'john',age:25};
        cb(data);
    },2000)
}

function displaydata(data){
    console.log("User data:",data);
}
fetchdata(displaydata)