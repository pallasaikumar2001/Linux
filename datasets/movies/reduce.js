const data=require('./movies.json')

//Calculate the total number of votes for all movies.
const totalVotes=data.reduce((acc,item)=>acc+=item.Votes,0)
console.log(totalVotes)

//average movie rating
const avgrating=data.reduce((acc,item)=>acc+=item.Rating,0)
console.log(avgrating/data.length)

//highest gross movie
const highestGross=data.reduce((prev,curr)=>{
    return prev.Gross_Earning_in_Mil>curr.Gross_Earning_in_Mil ? prev.Title:curr.Title;
})
console.log(highestGross)

//Count how many movies belong to each genre using an object like { Action: 3, Drama: 4 }.
const generFilter=data.reduce((acc,item)=>{
    if(!acc[item.Genre]){
        acc[item.Genre]=1
    }else{
        acc[item.Genre]+=1
    }
    return acc
},{})
console.log(generFilter)

//Create a summary object: { totalMovies: X, totalEarnings: Y }.
const summary=data.reduce((acc,item)=>{
    acc.totalMovies+=1;
    acc.totalGross+=item.Gross_Earning_in_Mil*1000000 || 0;
    return acc;
},{totalMovies:0,totalGross:0})
console.log(summary)