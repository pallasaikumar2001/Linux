// const fs=require('fs')

// fs.readFile('comments.json','utf8',(err,data)=>{
//     if (err){
//         console.error('error in reading file: ',err)
//         return
//     }
//     try{
//         const jsondata=JSON.parse(data)
//         const smithcomms=jsondata.comments.filter(comment=>comment.user.fullName.includes('Smith')
//     );
//     console.log(`number of comments made by user whose name contains 'smith': ${smithcomms.length}`);
//     }catch(error){
//         console.error(error)
//     }
// })
