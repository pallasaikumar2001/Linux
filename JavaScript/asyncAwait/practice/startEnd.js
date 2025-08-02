async function startend(){
    console.log("Start")
    const res= await new Promise(resolve=>setTimeout(()=>resolve("End"),2000));
    console.log(res)
}
startend()