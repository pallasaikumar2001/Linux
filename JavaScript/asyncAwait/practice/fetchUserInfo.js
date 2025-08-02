async function userInfo(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users/2")
    const result=await response.json();
    console.log(result.username)
}
userInfo()