const data=require("./countries.json")

const countryNames=data.map(item=>item.name.common);
console.log(countryNames)

const officialNames=data.map(item=>item.name.official);
console.log(officialNames)

const capitals=data.map(item=>item.capital)
console.log(capitals)

const namePopulation=data.map(item=>{
    return{
    "name":item.name.common, 
    "population":item.population
    };
})
console.log(namePopulation)

const countryCodecca2=data.map(item=>item.name.common+" "+item.cca2)
console.log(countryCodecca2)

const countryAndLanguage=data.map(item=>item.name && item.languages ? item.name.common+":"+Object.values(item.languages).join(", ") : "Invalid Data");
console.log(countryAndLanguage)

const allregions=data.map(item=>item.region ? item.region : null)
console.log("allregions")
const s=new Set(allregions)
console.log([...s]);