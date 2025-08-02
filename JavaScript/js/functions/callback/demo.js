function greet(name,cb){
    console.log('hello '+name+'!')
    cb()
}
function byy(){
    console.log('Byy...')
}

greet('Alice',byy)