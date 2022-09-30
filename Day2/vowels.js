console.clear();
const numberOfVowels=(str)=>{
    const count=str.split("").reduce((acc,curr)=>{
        if(["a","e","i","o","u"].includes(curr.toLowerCase())){
            acc+=1;
            return acc;
        }
        return acc;
    },0)
    return count;
}

console.log(numberOfVowels("Abhishek is js developer"));