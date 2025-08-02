const obj = { akash: 24, modi: 100, chakra: 26 };

const result = Object.entries(obj).sort(([,a],[,b])=>(a-b));



console.log(result);

console.log(Object.fromEntries(result))
