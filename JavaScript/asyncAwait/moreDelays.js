function wait(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function doSteps(){
    console.log("Step-1");
    await wait(1000);
    console.log("Step 2");
    await wait(2000);
    console.log("Step 3");
}
doSteps()