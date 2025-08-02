const items=[1,2,3,4,5]

//task-1
function each(elements,cb){
    for (let index=0;index<elements.length;index++){
        cb(elements[index],index)
    }
}
each(items,(element,index)=>{
    console.log(element,index)
})
console.log();

//task-2
function map(elements,cb){
    for (let i=0;i<elements.length;i++){
        cb(elements[i],i)
    }
}
map(items,(element)=>{
    console.log(element*element)
})
console.log()

//task-3
function reduce(elements,cb,starting){
    let acc=starting !==undefined ? starting:elements[0]
    let startindex=starting!==undefined ? 0:1
    for (let i=startindex;i<elements.length;i++){
        acc=cb(acc,elements[i])
    }
    return acc
}
const sum=reduce(items,(acc,element)=>acc+element,0)
console.log(sum)

