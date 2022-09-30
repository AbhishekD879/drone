console.clear();
const onlyPositive=(arr)=>{
    return arr.filter(el=>el>0);
}
console.log(onlyPositive([-1,2,3,4,-9,-4,1000,-999]));