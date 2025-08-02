const arr=[['name','saikumar'],['age',23]]
const obj=Object.fromEntries(arr)
console.log(obj)
console.log(Object.entries(obj))

Object.entries(obj).forEach(([key, value])=>{
    console.log(`${key}: ${value}`)
})