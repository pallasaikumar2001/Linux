const data=require('./product.json')

const negative=data.products.map(product=>({
    title:product.title,
    negative:product.reviews.filter(r=>r.rating<=2).length
})).sort((a,b)=>b.negative - a.negative);
console.log(`most negative review is:`,negative[0])