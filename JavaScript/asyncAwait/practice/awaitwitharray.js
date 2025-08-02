async function arraywith(arr){
    for(const element of arr){
        if(element%2===0){
            const res = await new Promise(resolve=>setTimeout(()=>resolve(element),1000))
            console.log(res)
        }
    };
}
arraywith([1,2,3,4])