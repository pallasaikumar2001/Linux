const data=require("./countries.json")

const totalPopulation=data.reduce((acc,item)=>acc+item.population,0);
console.log(totalPopulation)

const largestArea=data.reduce((prev,curr)=>prev.area > curr.area ? prev : curr);
console.log(largestArea)

const independentCountries=data.reduce((acc,item)=>{
    item.independent ? acc.push(item.name.common):acc
    return acc
},[])
console.log(independentCountries.length)

const countriesByRegion=data.reduce((acc,item)=>{
    if(!acc[item.region]){
        acc[item.region]=[]
    }acc[item.region].push(item.name.common)
    return acc
},{});
console.log(countriesByRegion)

const uniqueCurrencies=data.reduce((acc,item)=>{
    if(!acc.includes(item.currencies)){
        acc.push(item.currencies)
    }
    return acc
},[])
console.log(uniqueCurrencies)

const totalAreaAndPopulation=data.reduce((acc,item)=>{
    acc.totalArea+=item.area;
    acc.totalPopulation+=item.population;
    return acc
},{"totalArea":0,"totalPopulation":0})
console.log(totalAreaAndPopulation)

const englishCountries=data.reduce((acc,item)=>{
    if(item.languages && item.languages.eng){
        acc+=1
    }
    return acc
},0)
console.log(englishCountries)

const sortLanguages=data.reduce((acc,item)=>{
    if(item.languages){
        const langs=Object.values(item.languages);
        return acc.concat(langs)
    }
    return acc
},[])
.sort()
const sorts=new Set(sortLanguages)
let sorted=[...sorts]
console.log(sorted)