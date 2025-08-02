const data=require("./comments.json")

const allUserNames=data.comments.map(item=>item.user.username)
console.log(allUserNames)

const commentBodies=data.comments.map(item=>item.body)
console.log(commentBodies)

const nameUserName=data.comments.map(item=>`${item.user.fullName} (${item.user.username})`)
console.log(nameUserName)

const idWithLikes=data.comments.map(item=>`${item.id} - ${item.likes}`)
console.log(idWithLikes)

const commentSummary=data.comments.map((item=>`Comment by ${item.user.fullName} on post ${item.postId}: ${item.likes} likes`))
console.log(commentSummary)