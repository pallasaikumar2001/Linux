function mainfunction(callback){
    callback()
}

function greet(){
    const name="Saikumar"
    console.log(`Hello ${name}`)
}

mainfunction(greet)