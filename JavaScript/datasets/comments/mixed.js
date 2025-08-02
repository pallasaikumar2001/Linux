data=require('./comments.json')

const name2Likes=data.comments.reduce((acc,item)=>{
    if(item.likes>2){
        acc[item.user.fullName]=item.likes
    }else{
        acc
    }
    return acc
},{})
console.log(name2Likes)

const sortedNamesonLikes=Object.entries(
    data.comments.reduce((acc,item)=>{
        acc[item.user.username]=item.likes;
        return acc
    },{})
)
.sort((a,b)=>b[1]-[a[1]])
console.log(sortedNamesonLikes)

const userGt2Likes=data.comments
.filter(item=>item.likes>2)
.map(item=>`${item.user.username}: "${item.body}" (${item.likes})`)
console.log(userGt2Likes)