const data=require("./countries.json")

const gt1Lakh=data.filter(item=>item.population>100000)
.map(item=>item.name.common)
console.log(gt1Lakh);

const americaCountries=data.filter(item=>item.region==="Americas")
.map(item=>item.name.common);
console.log(americaCountries)

const areaSt1K=data.filter(item=>item.area>1000)
.map(item=>item.name.common);
console.log(areaSt1K)

const noCapitals=data.filter(item=>!item.capital)
.map(item=>item.name.common);
console.log(noCapitals)

const commonNameStartwithG=data.filter(item=>item.name.common[0]==="G")
.map(item=>item.name.common)
console.log(commonNameStartwithG)

const unMembers=data.filter(item=>item.unMember===true)
.map(item=>item.name.common);
console.log(unMembers)
