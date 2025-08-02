async function double(n){
    console.log(`Initial value is :${n}`)
    const res=await new Promise(resolve=>setTimeout(()=>resolve(n*2),2000))
    console.log("After delay value is:",res)
}
double(5)