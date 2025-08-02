function test(){
    console.log(1);
    new Promise((res)=>{
        console.log(4);
        res();
        console.log(5)
    });
    console.log(2);
    console.log(3);
}
test();
console.log(10)