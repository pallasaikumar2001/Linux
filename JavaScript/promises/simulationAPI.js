function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={name:"Saikumar",age:25};
            resolve(data)
        },2000)
    })
}
fetchData()
.then((data)=>console.log("data",data))
.catch((err)=>console.log("Error: ",err));