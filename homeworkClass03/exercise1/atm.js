let money=parseInt(prompt("How much money you want?"));
console.log(money)


if(money > 10000) {
    alert("You can buy a scooter");
}else if(money > 1300) {
    alert("You can have a nice dinner");
}else if(money > 900) {
    alert("Eat a cake");
}else if(money > 500) {
    alert("Drink a coffee");
}else if(money > 100) {
    alert("Water is good for your health");
}else{
    alert("Sorry, you don't have enough money");
}



let result = 10000 - money ;
console.log(result)