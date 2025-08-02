function chain(){
    return new Promise((resolve)=>setTimeout(()=>resolve(10),1000));
}
chain()
.then((res)=>{
    console.log(res)
    return chain().then((val)=>val*2)
})
.then((res)=>console.log(res))