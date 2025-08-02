const matchesdata=require('../matches.json')
// console.log(matchesdata)

const matchesperteam=matchesdata.reduce((acc,match)=>{
    const season=match.season
    if (!acc[season]){
        acc[season]={}
    }

    if(!acc[season][match.team1]){
        acc[season][match.team1]=1
    }
    else{
        acc[season][match.team1]+=1
    }
    if (!acc[season][match.team2]){
        acc[season][match.team2]=1
    }
    else{
        acc[season][match.team2]+=1
    }
    return acc
},{})

console.log(matchesperteam)

