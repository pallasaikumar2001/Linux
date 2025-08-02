const a=['hydrogen','helium','lithium','beryllium']

const a2=a.map(function(s){
    return s.length
})
console.log('normal way ',a2)

const a1=a.map((s)=>s.length)
console.log('using arrow function',a1)