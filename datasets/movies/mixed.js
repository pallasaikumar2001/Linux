const data=require('./movies.json');

//Get the average rating of all movies with a metascore above 85.
const filtered=data.filter(item=>item.Metascore>8.5)
const avgrating=filtered.reduce((acc,item)=>acc+=item.Rating,0)/filtered.length
console.log(avgrating)