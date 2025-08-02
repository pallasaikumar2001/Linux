const fs=require('fs');
fs.readFile('comments.json','utf8',(err,data)=>{
    if (err){
        console.error('error readong file: ',err);
        return;
    }
    try{
        const jsondata=JSON.parse(data);

        const mostlikes=jsondata.comments.reduce((prev,curr)=>
            prev.likes > curr.likes ? prev : curr
        );
        console.log(mostlikes);
    } catch(error){
        console.log(error)
    }
});


//this is another way to solve the same problem

// const data=require('./comments.json')
// const mostlikes=data.comments.reduce((prev,curr)=>(curr.likes>prev.likes ? curr:prev));
// console.log(`most liked comment is by ${mostlikes.user.fullName} with ${mostlikes.likes} likes`);
