const num1=parseInt(prompt("Enter first number"));
console.log(num1);

const num2=parseInt(prompt("Enter second number"));
console.log(num2);

const num3=parseInt(prompt("Enter third number"));
console.log(num3);

const num4=parseInt(prompt("Enter fourth number"));
console.log(num4);

const num5=parseInt(prompt("Enter fifth number"));
console.log(num5);

let maximum;


if(num1 >= num2 && num1 >= num3 && num1>=num4 && num1>=num5){
    maximum = num1;
}
else if (num2 >= num1 && num2 >= num3 && num2>=num4 && num2>=num5){
    maximum = num2;
}
else if(num3 >=num1 && num3>=num2 && num3>=num4 && num3>=num5){
    maximum = num3;
}
else if(num4>=num1 && num4>=num2 && num4>=num3 && num4>=num5){
    maximum = num4
}
else {
    num5 = maximum;
}

console.log("The maximum number is " + maximum);
alert("The maximum number is " + maximum);