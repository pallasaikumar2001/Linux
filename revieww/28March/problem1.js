// create a function createPower(base)
// createPower should return a function using which following can be obtained
// for eg:
// const powerOfTwo = createPower(2);
// console.log(powerOfTwo(3)); // Should output 8 (2^3)

// const powerOfThree = createPower(3);
// console.log(powerOfThree(3)); // Should output 27 (3^3)


function createPower(base){
    return function(exponent){
        return Math.pow(base, exponent);
    }
}

const powerOfTwo = createPower(2);

console.log(powerOfTwo(3)); // Output: 8

