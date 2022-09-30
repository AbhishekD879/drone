console.clear()
const countOfTargetCompletion =(arr)=>{
    return arr.reduce((count,el)=>{
        if(el>=10){
            count+=1;
        }
        return count;
    },0)
}

console.log(countOfTargetCompletion([12,15,8,10,50]))