data=require('./movies.json')

const totalVotes = data.reduce((acc,item)=>acc+=item.Votes,0)
console.log(totalVotes)

const avgrating=data.reduce((acc,item)=>acc+item.Rating,0)
console.log(avgrating/data.length)

const highestGross=data.reduce((prev,curr)=>prev.Gross_Earning_in_Mil >curr.Gross_Earning_in_Mil ? prev : curr);
console.log(highestGross)

const generMovies=data.reduce((acc,item)=>{
    if(!acc[item.Genre]){
        acc[item.Genre]=[];
    }
    acc[item.Genre].push(item.Title);
    return acc;
},{})
console.log(generMovies);

const totalGross=data.reduce((acc,item)=> item.Gross_Earning_in_Mil>0 ? acc+=item.Gross_Earning_in_Mil: acc , 0)
console.log(totalGross)

const totalRunTime=data.reduce((acc,item)=>acc+=item.Runtime,0)
console.log(totalRunTime)

const oldestMovie=data.reduce((prev,curr)=>prev.Year < curr.Year ? prev:curr)
console.log(oldestMovie)

const directorMovies=data.reduce((acc,item)=>{
    if(!acc[item.Director]){
        acc[item.Director]=0;
    }
    acc[item.Director]+=1;
    return acc
},{})
console.log(directorMovies)

const titleRating=data.reduce((acc,item)=>{
    acc[item.Title]=item.Rating
    return acc
},{})
console.log(titleRating)

const meatScoreOver80=data.reduce((acc,item)=> item.Metascore>80 ? acc+=1 : acc,0)
console.log(meatScoreOver80)
