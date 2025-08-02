const deliveries=require('../deliveries.json')
const matches=require('../matches.json')

const ids2016=matches.reduce((acc,match)=>{
    if (Number(match.season)===2016){
        acc.push(match.id)
    }
    return acc
},[])
const extras2016=deliveries.reduce((acc,delivery)=>{
    if(ids2016.includes(delivery.match_id)){
        if (!acc[delivery.bowling_team]){
            acc[delivery.bowling_team]=0            
        }
        acc[delivery.bowling_team]+=Number(delivery.extra_runs)
    }
    return acc
},{})
console.log(extras2016)