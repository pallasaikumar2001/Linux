function mainfun(cb){
    console.log('performing the eoperation...')
    setTimeout(function(){
        cb('operation complete')
    },1000)
}

function cbfunction(result){
    console.log('result: '+result)
}
mainfun(cbfunction)