const array = [13, 9, 96, 126, 88];

function sumOfNum() {
     let sum = 0;
     for (let i = 0; i < array.length; i++) {
     sum += array[i];
     }
     return sum;
}
console.log(sumOfNum())
