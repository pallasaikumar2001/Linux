function greeting(name,delay){
    return new Promise((resolve)=>setTimeout(()=>resolve("Hello, "+name),delay))
}
greeting("Saikumar",2000)
.then((res)=>console.log(res))