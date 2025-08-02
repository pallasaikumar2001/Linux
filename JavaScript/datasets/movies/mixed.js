const data=require('./movies.json')


const gt=data.filter(item=>item.Runtime>150)
const avgrating=gt.reduce((acc,item)=>acc+=item.Rating,0)
console.log(avgrating/gt.length)


const titles = data
  .filter(movie => movie.Rating > 9 && movie.Year > 2000)
  .map(movie => movie.Title);
console.log(titles);


const actionVotes=data
.filter(item=>item.Genre==="Action")
.reduce((acc,item)=>acc+=item.Votes,0)
console.log(actionVotes)


const genreLists=data.filter(item=>item.Rating>=8.5)
// console.log(genreLists)
.reduce((acc,item)=>{
    if(!acc[item.Genre]){
        acc[item.Genre]=[]
    }
    // acc[Genre] = acc[Genre] || []
    acc[item.Genre].push(item.Title)
    return acc
},{})
console.log(genreLists)


const highRated=data
.filter(item=>item.Metascore>90 && item.Rating>8)
.map(item=>item.Title);
console.log(highRated)


const highVoted=data.filter(item=>item.Votes>1000000)
const avgruntime=highVoted.reduce((acc,item)=>acc+=item.Runtime / highRated.length,0)
console.log(avgruntime)


const highestGrossCrime=data.filter(item=>item.Genre==="Crime")
.reduce((prev,curr)=>prev.Gross_Earning_in_Mil>curr.Gross_Earning_in_Mil ? prev:curr)
console.log(highestGrossCrime)


const summary=data.reduce((acc,item)=>{
    acc.totalMovies+=1;
    acc.totalVotes+=item.Votes
    acc.totalGross+=typeof item.Gross_Earning_in_Mil==="number" ? item.Gross_Earning_in_Mil:0;
    return acc
},{totalMovies:0,totalVotes:0,totalGross:0});
console.log(summary)