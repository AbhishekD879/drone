const mostExpensive=obj=>{
    const valueArr=Object.values(obj);
    const max=Math.max(...valueArr)
    const indexOfMax=valueArr.indexOf(max);
    return Object.keys(obj)[indexOfMax];
}

console.log(mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }))// ➞  "The most expensive one is the Pearl Necklace"
   
  console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }))// ➞ "The most expensive one is the Diamond Ring"
  