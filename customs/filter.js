Array.prototype.myfilter=function(cb){
    const res=[]
    for (let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            res.push(this[i])
        }
    }
    return res
}

const nums=[1,2,3,4,5,6];
const evens=nums.myfilter(num=>num%2===0);
console.log(evens)