const fs=require('fs')

fs.readFile('comments.json','utf8',(err,data)=>{
    if (err){
        console.error('error in reading file: ',err);
        return;
    }
    try{
        const jsondata=JSON.parse(data)

        const zerolikes=jsondata.comments.filter(comment=>comment.likes==0 );
        
        console.log(zerolikes.length)
    }catch(error){
        console.log(error);
    }
})