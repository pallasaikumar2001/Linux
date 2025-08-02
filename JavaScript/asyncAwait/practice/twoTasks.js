function taks(name){
    return new Promise(resolve=>setTimeout(()=>{
        console.log(`${name} completed`)
        resolve();
    },3000))
}

async function runTask(){
    await taks("task1")
    await taks("task2")
}
runTask()

async function parallelTasks(){
    await Promise.all([taks("Task A"),taks("task B")]);
    console.log("both tasks done")
}
parallelTasks()