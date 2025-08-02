const p1=new Promise((res)=>setTimeout(res,500,"first"))
const p2=new Promise((res)=>setTimeout(res,500,"second"));

Promise.race([p1,p2]).then((val)=>console.log(val))