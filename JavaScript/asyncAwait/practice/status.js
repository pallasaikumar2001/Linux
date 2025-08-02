async function loading(){
    console.log("Loading...")
    await new Promise(resolve=>setTimeout(resolve,2000))
    console.log("Done!");
}
loading()