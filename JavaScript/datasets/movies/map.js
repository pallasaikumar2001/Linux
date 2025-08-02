const data=require('./movies.json')

const movieTitles=data.map(item=>item.Title)
console.log(movieTitles)

const directors=data.map(item=>item.Director)
console.log(new Set(directors))

const titleYear=data.map(item=>`${item.Title} (${item.Year})`)
console.log(titleYear)

const genersUppercase=data.map(item=>item.Genre.toUpperCase())
console.log(genersUppercase)

const minToHrs=data.map(item=>item.Runtime/60)
console.log(minToHrs)

const movieAge=data.map(item=>2025-item.Year)
console.log(movieAge)

const titleRating=data.map(item=>`${item.Title} : ${item.Rating}`)
console.log(titleRating)

const actors=data.map(item=>item.Actor)
console.log(new Set(actors))

const addOld=data.map(item=>{
    if(item.Year<2000){
        return { ...item, isOld:true};
    }
    return item;
})
console.log(addOld)

const grossEarnings=data.map(item=>item.Gross_Earning_in_Mil)
console.log(grossEarnings)