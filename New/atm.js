let money=parseInt(prompt("How much money you want?"));
console.log(money);

let result = 20000 - money ;
console.log(`You have ${result} left`);




if(money <=20000) {
    alert(`You withdrawn ${money} dollars`)
    alert(`You have ${result} left`);
}else if(money < 1300) {
    alert(`You withdrawn ${money} dollars`)
    alert(`You have ${result} left`);
}else if(money < 900) {
    alert(`You withdrawn ${money} dollars`)
    alert(`You have ${result} left`);
}else if(money < 500) {
    alert(`You withdrawn ${money} dollars`)
    alert(`You have ${result} left`);
}else if(money < 100) {
    alert(`You withdrawn ${money} dollars`)
    alert(`You have ${result} left`);
}else{
    alert("Sorry, you don't have enough money");
    alert(`You have ${result} left`);
}


