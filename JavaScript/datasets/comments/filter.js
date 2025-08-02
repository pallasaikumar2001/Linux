const data=require('./comments.json')

const likesgt2=data.comments.filter(item=>item.likes>3)
console.log(likesgt2)

const zeroLikes=data.comments.filter(item=>item.likes===0)
console.log(zeroLikes)

const namewithE=data.comments.filter(item=>item.user.fullName[0]==="E")
console.log(namewithE)

const postIdGt200=data.comments.filter(item=>item.postId>200)
console.log(postIdGt200)

const bodywithIdea=data.comments.filter(item=>item.body.includes("idea"))
console.log(bodywithIdea)