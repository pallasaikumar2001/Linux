async function delay(){
    console.log("Hello")
    const response= await new Promise(resolve=>setTimeout(()=>resolve("World!"),1000))
    console.log(response)
}
delay()