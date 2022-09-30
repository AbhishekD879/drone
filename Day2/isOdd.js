console.clear();
const arr=[1,3,5,7];
function isOdd(value) {
    return value%2!==0;
}
// console.time()
// for (let i=0; i<arr.length; i++) {
//     console.log(isOdd(arr[i]));
// }
// console.timeEnd();

//Arrow
console.time();
console.log(arr.every(e=>e%2!==0));
console.timeEnd();