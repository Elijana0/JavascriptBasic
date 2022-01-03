function greeting(firstName, lastName){
    console.log(`Have a nice day ${firstName} ${lastName}`);
    console.log(`Happy New Year ${firstName} ${lastName}`);
}
greeting("Tanja", "Stojanovska");
greeting("Bojan", "Damchevski");


const x = 15;
const y = 100;

console.log(x>y); //Boolean
console.log(x<y);  //Boolean
console.log(x!=y); //Boolean
console.log(x+y);  //Math operator
console.log(y%x); //Math operator
console.log(x*y);  

console.log("15".length);
console.log("15+100"); //String
console.log("15" + 100);  //String
console.log("Have" + "a" + "nice"+"day"); //String
console.log("Dog".startsWith("C"));
console.log("SEDC".indexOf("D"));


console.log("z's value is 15", z);