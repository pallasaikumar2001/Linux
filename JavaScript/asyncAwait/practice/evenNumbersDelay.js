async function evens(arr){
    for(const element of arr){
        if(element%2===0){
            const response=await new Promise(resolve=>setTimeout(()=>resolve(element),1000))
            console.log(response)
        }
    }
}
evens([1,2,3,4,5,6])