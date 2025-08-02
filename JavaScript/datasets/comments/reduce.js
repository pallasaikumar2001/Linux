const data=require("./comments.json")

//1. Count total number of likes across all comments
const totalLikes=data.comments.reduce((acc,comment)=>{
    acc+=comment.likes
    return acc
},0)
console.log(totalLikes)

//2. Create an object showing how many comments each user has made.
const CommentsPerUser=data.comments.reduce((acc,user)=>{
    acc[user.user.fullName]===undefined ? acc[user.user.fullName]=1 : acc[user.user.fullName]+=1
    return acc
},{})
console.log(CommentsPerUser)

//3. Build a list of unique usernames.
const uniqueUser=data.comments.reduce((acc,comment)=>{
    acc[comment.user.username]===undefined ? acc.push(comment.user.username):acc;
    return acc
},[])
console.log(uniqueUser)

//4. Count how many comments exist per postId
const commentsPerId=data.comments.reduce((acc,comment)=>{
    acc[comment.postId]===undefined ? acc[comment.postId]=1 : acc[comment.postId]+=1
    return acc
},{})
console.log(commentsPerId)

//5. Group all comments by postId
const groupByPostId = data.comments.reduce((acc, comment) => {
    if (!acc[comment.postId]) {
        acc[comment.postId] = [comment.body];
    } else {
        acc[comment.postId].push(comment.body);
    }
    return acc;
}, {});
console.log(groupByPostId);

//6. Create a nested object where each username maps to an array of their comment bodies.
const  nameWithComment=data.comments.reduce((acc,comment)=>{
    if(!acc[comment.user.fullName]){
        acc[comment.user.fullName]=[comment.body]
    }else{
        acc[comment.user.fullName].push(comment.body)
    }
    return acc
},{})
console.log(nameWithComment)

// 7. find the comment with th ehighet likes.
const mostLikedComment=data.comments.reduce((prev,curr)=>{
    return prev.likes > curr.likes ? prev: curr;
})
console.log(mostLikedComment.body)

//8. Compute the average number of likes per comment.
const avgLikes=data.comments.reduce((acc,comment)=>{
    acc+=comment.likes
    return acc
},0)
console.log(avgLikes/data.comments.length)