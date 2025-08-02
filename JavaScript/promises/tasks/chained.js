function chained(n){
    return new Promise((resolve)=>resolve(n))
}
chained(5)
.then((res)=>{
    console.log("initial value is: ",res)
    return chained(res*3)
})
.then((res)=>{
    console.log("After multiplying with 3: ",res)
    return chained(res+10)
})
.then((res)=>{
    console.log("After adding :",res)
    return chained(res-5)
})
.then((res)=>console.log("After subract: ",res))