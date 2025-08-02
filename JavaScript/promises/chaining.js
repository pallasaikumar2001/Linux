function multiplyBy2(num){
    return new Promise((resolve)=>resolve(num*2));
}
multiplyBy2(5)
.then((res)=>{
    console.log(res);
    return multiplyBy2(res)
})
.then((res)=>{
    console.log(res)
})