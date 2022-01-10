
const dog = parseInt(prompt("Enter your dog's age"));
console.log(dog);


function years(){
    let result=dog*7;
     return result;
}

console.log(`Your dog's age in human years is: ${years()} ,${years()} is the calculated age`);
alert(`Your dog have ${years()} human years.`);

function dogYears(){
    let sum= `${years()}`/7
    return sum;
}

console.log(`Human years calculated in dog years: ${dogYears()}`)