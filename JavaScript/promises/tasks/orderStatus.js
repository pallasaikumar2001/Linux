function orderStatus(){
    console.log("Checking...")
    return new Promise((resolve)=>setTimeout(()=>resolve("Delivered"),3000))
}
orderStatus()
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("Status check complete"))