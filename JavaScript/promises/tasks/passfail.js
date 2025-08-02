function results(res){
    return new Promise((resolve,reject)=>{
        if(res%2===0){
            resolve("Passed")
        }else{
            reject("Failed")
        }
    })
}
let x=Math.floor(Math.random()*10);
results(x)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))