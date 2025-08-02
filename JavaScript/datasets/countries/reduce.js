const data=require('./countries.json')

//Total population
const population=data.reduce((total,element)=>total+element.population,0);
console.log(population)

//Average Area
const avgarea=data.reduce((total,country)=>total+country.area,0)/data.length;
console.log(avgarea)

//Most Borders
const countryWithMostBorders = data.reduce((acc, country) => {
    if (!country.borders || country.borders.length === 0) return acc;
    if (country.borders.length > acc.borders.length) {
      return {
        name: country.name.common,
        borders: country.borders,
        borderCount: country.borders.length,
      };
    } else {
      return acc;
    }
  }, { name: "", borders: [], borderCount: 0 }); // Initial accumulator
  
  console.log(countryWithMostBorders);

  // currency count
  const currcount=data.reduce((count,country)=>country.currencies && country.currencies.XCD ? count+1:count,0)
  console.log(currcount);