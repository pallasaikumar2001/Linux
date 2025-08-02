const data=require("./movies.json")

const decreasingorder=Object.entries(data).sort((a,b)=>b.votes - a.votes)
.slice(0,10)
console.log(decreasingorder)

const top10ratings=Object.entries(data)
.sort((a,b)=>b.Rating - a.Rating)
.slice(0,10);
console.log(top10ratings)

const top5Gross = data
  .filter(movie => typeof movie.Gross_Earning_in_Mil === 'number') 
  .sort((a, b) => b.Gross_Earning_in_Mil - a.Gross_Earning_in_Mil)
  .slice(0, 5);

console.log(top5Gross);
