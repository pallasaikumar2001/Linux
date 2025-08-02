function milli(ms){
    return new Promise((resolve)=>setTimeout(()=>resolve(`resolving after ${ms} milli seconds`),ms))
}

milli(2000)
.then((res)=>console.log(res))