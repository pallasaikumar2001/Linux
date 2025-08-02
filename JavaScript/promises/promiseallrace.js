const p1=new Promise((resolve)=>setTimeout(()=>resolve("primise1"),1000));
const p2=new Promise((resolve)=>setTimeout(()=>resolve("primise2"),3000));
const p3=new Promise((resolve)=>setTimeout(()=>resolve("primise3"),500));

[p1,p2,p3].forEach((p)=>{
    p.then((res)=>console.log(res))
})

Promise.all([p1,p2,p3])
.then((res)=>console.log(res))

Promise.race([p1,p2,p3])
.then((res)=>console.log(res))