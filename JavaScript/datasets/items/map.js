const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 60000, stock: 50 },
    { id: 2, name: 'Mobile', category: 'Electronics', price: 20000, stock: 150 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500, stock: 200 },
    { id: 4, name: 'Washing Machine', category: 'Appliances', price: 30000, stock: 20 },
    { id: 5, name: 'Refrigerator', category: 'Appliances', price: 40000, stock: 30 },
    { id: 6, name: 'Jeans', category: 'Clothing', price: 2500, stock: 100 },
    { id: 7, name: 'TV', category: 'Electronics', price: 50000, stock: 40 },
    { id: 8, name: 'Shoes', category: 'Footwear', price: 3000, stock: 80 },
    { id: 9, name: 'Air Conditioner', category: 'Appliances', price: 45000, stock: 0 },
    { id: 10, name: 'Jacket', category: 'Clothing', price: 3500, stock: 60 },
];

// 1. Array of product names
const prodnames=products.map(prod=>prod.name);
console.log(prodnames)

// 2. Discounted prices (10% off)
const discount=products.map(prod=>({...prod,price:prod.price*0.9}));
console.log(discount)

//3. products labels
const label=products.map(prod=>`product: ${prod.name},price:₹${prod.price}`);
console.log(label)

//4. Arrsy of product IDs
const ids=products.map(prod=>prod.id);
console.log(ids)

//5. Convert product namesot uppercase
const uppercase=products.map(prod=>prod.name.toUpperCase());
console.log(uppercase)

// 6. Double the stock of all products
const doublestock=products.map(prod=>({...prod,stock:prod.stock*2}))
console.log(doublestock)

// 7. Prices in thousands (₹60,000 → ₹60K)
const priceinthousands=products.map(prod=>`${Math.round(prod.price/1000)}K`)
console.log(priceinthousands)

// 8. Add "Limited Stock" to products with less than 20 units
const limited=products.map(prod=>prod.stock<20 ? `${prod.name}(limited stock)`:prod.name)
console.log(limited)

//9. Stock availability
const available=products.map(prod=>prod.stock>0 ?`${prod.name}-->tavailable`:`${prod.name}-->Not available`)
console.log(available)

// 10. Add tax field (10% of price)
const prodwithtax=products.map(prod=>({...prod,tax:prod.price*0.1}));
console.log(prodwithtax);