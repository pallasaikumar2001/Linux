function delay(){
    return new Promise(resolve=>
        setTimeout(()=>resolve("Hello World"),2000)
    );
}

async function greeting(){
    const result=await delay();
    console.log(result);
    console.log(await delay())
}
greeting();