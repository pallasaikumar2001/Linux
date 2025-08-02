function delay(message,cb){
    setTimeout(()=>{
        console.log(message)
        cb()
    },2000)
}
function after(){
    console.log('this runs after the message')
}
delay('Hello after 2 seconds ',after)