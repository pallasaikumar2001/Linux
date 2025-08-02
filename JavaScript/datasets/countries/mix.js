const data=require("./countries.json")

const nameArea=data.filter(item=>item.region==="Americas" && item.area<1000)
.map(item=>item.name.common+" : "+item.area)
console.log(nameArea)

const subregionCountries=data.reduce((acc,item)=>{
    if(!acc[item.subregion]){
        acc[item.subregion]=[]
    }acc[item.subregion].push(item.name.common);
    return acc
},{})
console.log(subregionCountries)

const capitalsofCountrygt1000=data.filter(item=>item.population>1000)
.map(item=>item.name.common+" : "+item.capital);
console.log(capitalsofCountrygt1000)

const dollarCountries=data.flatMap(item=>{
    const currenciesList= Object.values(item.currencies || {})
    return currenciesList
    .filter(currency=>currency.name.toLowerCase().includes("dollar"))
    .map(currency=>`${item.name.common},${currency.name}`)
})
console.log(dollarCountries)

const independentCountries=data.filter(item=>item.independent)
.map(item=>item.name.common+" is independent country")
console.log(independentCountries)

const americasCountries=data.filter(item=>item.region==="Americas")
.map(item=>item.name.common+" "+item.region)
console.log(americasCountries)

const tld=data
.filter(item=>item.tld && item.tld.some(it=>it.includes(".g")))
.map(item=>item.name.common)
console.log(tld)

const regionIndependenceStatus=data.reduce((acc,item)=>{
    const region=item.region || "Unknown";
    const name=item.name.common;
    const independenceStatus=item.independent ? "independent":"dependent";

    if(!acc[region]){
        acc[region]={independent:[],dependent:[]};
    }
    acc[region][independenceStatus].push(name);
    return acc;
},{})
console.log(regionIndependenceStatus)

const regionWiseSubregionCountries=data.reduce((acc,item)=>{
    const region=item.region || "Unknown Region";
    const subregion=item.subregion || "Unknown Subregion";
    const country=item.name.common;

    if(!acc[region]){
        acc[region]={};
    }

    if(!acc[region][subregion]){
        acc[region][subregion]=[];
    }
    acc[region][subregion].push(country)
    return acc;
},{});
console.log(regionWiseSubregionCountries)
console.log(dollarCountries)