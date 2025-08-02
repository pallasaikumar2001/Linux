function results(marks){
    return new Promise((resolve,reject)=>{
        if(marks>40){
            resolve("You passed the exam")
        }else{
            reject("Better luck next time")
        }
    })
}
results(41)
.then((res)=>console.log("The result is :",res))
.catch((err)=>console.log("The result is :",err));