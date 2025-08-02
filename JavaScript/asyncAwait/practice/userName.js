async function apis(){
    const result=await fetch("https://jsonplaceholder.typicode.com/users/1")
    const user=await result.json()
    console.log(user.name)
}
apis()