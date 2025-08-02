let p1=Promise.resolve(1);
let p2=Promise.resolve(2);
let p3=Promise.resolve(3);

Promise.all([p1,p2,p3])
.then((res)=>console.log(res))