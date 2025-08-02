function success(result){
    console.log(`Success: ${result}`)
}

function failure(error){
    console.log(`Error: ${error}`)
}

function process(task,onSuccess, onError){
    if(task==='done'){
        onSuccess("Task is completed!")
    }else{
        onError("Somehins went wrong")
    }
}
process("done",success,failure)