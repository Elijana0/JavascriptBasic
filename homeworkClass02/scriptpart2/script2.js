let year=parseInt(prompt("Enter a year"));
console.log(year);

let zodiak=(`${year-4}`) % 12;
console.log(zodiak);

switch(zodiak){
    case 0 :
        console.log("Your year in Chinese Zodiac calendar is Rat");
        alert("Your year in Chinese Zodiac calendar is Rat");
        break;
    case 1 :
        console.log("Your year in Chinese Zodiac calendar is Ox");
        alert("Your year in Chinese Zodiac calendar is Ox");
        break;
    case 2 :
        console.log("Your year in Chinese Zodiac calendar is Tiger");
        alert("Your year in Chinese Zodiac calendar is Tiger");
        break;
    case 3 :
        console.log("Your year in Chinese Zodiac calendar is Rabbit");
        alert("Your year in Chinese Zodiac calendar is Rabbit");
        break;
    case 4 :
        console.log("Your year in Chinese Zodiac calendar is Dragon");
        alert("Your year in Chinese Zodiac calendar is Dragon")
        break;
    case 5 :
        console.log("Your year in Chinese Zodiac calendar is Snake");
        alert("Your year in Chinese Zodiac calendar is Snake");
        break;
    case 6 :
        console.log("Your year in Chinese Zodiac calendar is Horse");
        alert("Your year in Chinese Zodiac calendar is Horse");
        break;
    case 7 :
        console.log("Your year in Chinese Zodiac calendar is Goat");
        alert("Your year in Chinese Zodiac calendar is Goat");
        break;
    case 8 :
        console.log("Your year in Chinese Zodiac calendar is Monkey");
        alert("Your year in Chinese Zodiac calendar is Monkey");
        break;
    case 9 :
        console.log("Your year in Chinese Zodiac calendar is Rooster");
        alert("Your year in Chinese Zodiac calendar is Rooster");
        break;
    case 10 :
        console.log("Your year in Chinese Zodiac calendar is Dog");
        alert("Your year in Chinese Zodiac calendar is Dog");
        break;
    case 11 :
        console.log("Your year in Chinese Zodiac calendar is Pig");
        alert("Your year in Chinese Zodiac calendar is Pig");
    default :
        console.log("Invalid entry")      
}