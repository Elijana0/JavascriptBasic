const dog = parseInt(prompt("Enter your dog's age"));
console.log(dog);


function years(){
    let result=dog*7;
     return result;
}
let res = dog/7;
console.log("Your dog's age in human years is:")
console.log(years())


console.log("Human years calculated in dog years:")
console.log(res);
