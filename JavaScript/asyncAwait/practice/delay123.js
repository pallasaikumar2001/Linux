function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function printNumbers(){
    for(let i=1;i<=3;i++){
        console.log(i);
        await new Promise(resolve=>setTimeout(resolve,1000));
    }
}
printNumbers()