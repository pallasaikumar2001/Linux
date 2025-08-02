function outer(a){
    function inner(b){
        return a+b;
    }
    return inner
}

const add=outer()
console.log(add(10))