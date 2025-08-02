Array.prototype.myReduce=function(cb,acc){
    for(let i=0;i<this.length;i++){
        acc=cb(acc,this[i],i,this);
    }
    return acc
}

const nums=[1,2,3,4,5];
const sum=nums.myReduce((acc,val)=>acc+val,0);
console.log(sum)