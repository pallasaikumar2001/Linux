Array.prototype.myMap=function(cb){
    const res=[];
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i],i,this))
    }
    return res
}

const nums=[1,2,3,4]
const double=nums.myMap(num=>num*2);
console.log(double)