//Some recipes have multiple mealType entries (like "Dinner" and "Lunch"). Count how many recipes fall into each mealType.

const data=require('./recipes.json')
let object=data.recipes
// const output=obj.reduce((acc,item)=>{
//     if(!acc[item.mealType]){
//         acc[item.mealType]=0
//     }
//     acc[item.mealType]+=1
//     return acc
// },{})
// // console.log(output)

// const output2=obj.reduce((acc,item)=>{
//     if(!acc[item.difficulty]){
//         acc[item.difficulty]=[]
//     }acc[item.difficulty].push(item.name)
//     return acc
// },{})
// // console.log(output2)

// //Calculate the total time (prepTimeMinutes + cookTimeMinutes) for each recipe and return the top 5 fastest recipes.

// const output3=obj.reduce((acc,item)=>{
//     let obj={}
//     obj.name=item.name
//     obj.totalTime=item.prepTimeMinutes+item.cookTimeMinutes
//     acc.push(obj)
//     return acc;
// },[]);


// output3.sort((a,b)=>a.totalTime-b.totalTime)
// // console.log(output3.slice(0,5))

const output4=object.reduce((acc,item)=>{
    if(!acc[item.cuisine]){
        acc[item.cuisine]=[]
    }
    acc[item.cuisine].push(item.name)
    return acc
},{})
console.log(output4)