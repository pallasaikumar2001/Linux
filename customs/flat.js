Array.prototype.myFlat=function(depth=1){
    let res=[];
    for(let item of this){
        if(Array.isArray(item) && depth>0){
            res=res.concat(item.myFlat(depth-1));
        }else{
            res.push(item);
        }
    }
    return res
}

const nested=[1,[3,4,[[2]]],5];
console.log(nested.myFlat(5))