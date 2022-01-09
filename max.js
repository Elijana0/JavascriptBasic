const num = [25, 33, 3, 44, 123, 99];


function max(input) {
    if (toString.call(input) !=="[num]");
    //return false;
return Math.max.apply(null, input);
}
console.log(`Max number is ${max(num)}`)



function min(input) {
    if (toString.call(input) !== "[num]");
    //return false;
return Math.min.apply(null, input);
}
console.log(`Min number is ${min(num)}`)



function sumOfNumbers() {
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum = max(num) + min(num);
    }
    return sum;
}
console.log(`Sum of max and min is ${sumOfNumbers()}`)













