

console.clear();
const {log}= console;
log(prompt)
const minShot=(height,arr)=>{
    return arr.filter((el)=>el>height).length;
}
/**
 *
3
4 10
2 13 4 16
5 8
9 3 8 8 4
4 6
1 2 3 4 

 */
const driver=()=>{
    console.log(minShot(10,[2,13,4,16]));
    console.log(minShot(8,[9,3,8,8,4]));
    console.log(minShot(6,[1,2,3,4]));
}

driver();