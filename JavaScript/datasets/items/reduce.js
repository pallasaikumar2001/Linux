const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 60000, stock: 50 },
    { id: 2, name: 'Mobile', category: 'Electronics', price: 20000, stock: 150 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500, stock: 200 },
    { id: 4, name: 'Washing Machine', category: 'Appliances', price: 30000, stock: 20 },
    { id: 5, name: 'Refrigerator', category: 'Appliances', price: 40000, stock: 30 },
    { id: 6, name: 'Jeans', category: 'Clothing', price: 2500, stock: 100 },
    { id: 7, name: 'TV', category: 'Electronics', price: 50000, stock: 40 },
    { id: 8, name: 'Shoes', category: 'Footwear', price: 3000, stock: 80 },
    { id: 9, name: 'Air Conditioner', category: 'Appliances', price: 45000, stock: 10 },
    { id: 10, name: 'Jacket', category: 'Clothing', price: 3500, stock: 60 },
];

// 1. Total price of all products
const totalPrice=products.reduce((sum,prod)=>sum+prod.price,0);
console.log(totalPrice);

// 2. Total stock of all products
const totalstock=products.reduce((sum,prod)=>sum+prod.stock,0);
console.log(totalstock)

// 3. Most expensive product
const expensive=products.reduce((prev,curr)=>prev.price>curr.price ? prev:curr);
console.log(expensive);

// 4. Least expensive product
const leastexpensive=products.reduce((prev,curr)=>prev.price<curr.price ? prev:curr);
console.log(leastexpensive);

// 5. Average price of all products
const avgprice=products.reduce((sum,prod)=>sum+prod.price,0)/products.length;
console.log(avgprice);

// 6. Count products in Electronics category
const electronicscount=products.reduce((count,prod)=>prod.category==='Electronics' ? count+1:count,0)
console.log(electronicscount)

// 7. Total price of Electronics products
const electronicsprice=products.reduce((cost,prod)=>prod.category==='Electronics' ? cost+prod.price:cost,0);
console.log(electronicsprice);

// 8. Product with highest stock
const higheststock=products.reduce((prev,curr)=>prev.stock>curr.stock? prev:curr);
console.log(higheststock)

// 9. Concatenated product names
const productNames=products.reduce((acc,prod)=>acc+prod.name+', ','');
console.log(productNames.slice(0,-2));

// 10. Group products by category
const groupbycategory=products.reduce((acc,prod)=>{
    if(!acc[prod.category]){
        acc[prod.category]=[]
    }acc[prod.category].push(prod);
    return acc;
},{})
console.log(groupbycategory)