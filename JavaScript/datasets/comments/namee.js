const fs=require('fs')

fs.readFile('comments.json','utf8',(err,data)=>{
    if (err){
        console.error('error in reading file: ',err);
        return
    }
    try{
        const jsondata=JSON.parse(data);
        const namewithe=jsondata.comments.filter(name=>name.user.username[0]=='e')

        console.log(namewithe)
    }catch(error){
        console.log(error)
    }
})