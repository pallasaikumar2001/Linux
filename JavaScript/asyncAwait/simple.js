function getData(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Data Received"),3000)
    })
}
async function showData(){
    console.log("Getting Data...");
    const result=await getData();
    console.log(result)
}
showData()