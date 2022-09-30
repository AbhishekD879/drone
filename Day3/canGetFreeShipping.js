const freeShipping=(obj)=>{
    return Object.values(obj).reduce((acc,price)=>price+=acc,0)>=50;
}

console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))// ➞ false
 
console.log(freeShipping({ "Flatscreen TV": 399.99 })) //➞ true
 
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }))// ➞ true
