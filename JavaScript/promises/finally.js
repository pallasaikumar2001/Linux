function processTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Task Completed!"),1000);
    });
}
processTask()
.then((res)=>console.log(res))
.finally(()=>console.log("Cleaning up resources..."))