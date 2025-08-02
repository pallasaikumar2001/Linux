const data =require('./product.json')

const instockitems=data.products.reduce((sum,prod)=>sum+prod.stock,0);
console.log('total products in stock is: ',instockitems)

const maxdiscount=data.products.reduce((prev,curr)=>prev.discountPercentage>curr.discountPercentage ? prev:curr);
console.log(maxdiscount.discountPercentage, maxdiscount.id);