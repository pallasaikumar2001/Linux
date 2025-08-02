const matchesdata=require('../matches.json')
// console.log(matchesdata)

const matchesperteam=matchesdata.reduce((acc,match)=>{
    if (!acc[match.team1]){
        acc[match.team1]=1
    }
    else{
        acc[match.team1]+=1
    }
    if (!acc[match.team2]){
        acc[match.team2]=1
    }
    else{
        acc[match.team2]+=1
    }
    return acc
},{})

console.log(matchesperteam)

