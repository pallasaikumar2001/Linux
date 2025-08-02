async function getUser(){
    try{
        const response=await fetch("https://jsonpeholder.typicode.com/use");
        const user=await response.json();
        console.log(user);
    }catch(error){
        console.log("Something went wrong:",error.message);
    }
}
getUser();