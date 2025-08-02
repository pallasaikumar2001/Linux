let promise=new Promise(function(resolve,reject){
    
    setTimeout(()=>{
        if(!10/0){
            resolve("Success")
        }else{
            reject("Failed")
        }
    },1000)
})
promise
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("Done !"))