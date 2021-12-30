let year = parseInt(prompt("Enter a year"));
console.log(year);

let zodiac = (`${year - 4}`) % 12;
console.log(zodiac);
alert(`${zodiac}`)


if (zodiac < 1) {
	alert("Your year in Chinese Zodiac calendar is Rat");
}else if(zodiac <2 ) {
	alert("Your year in Chinese Zodiac calendar is Ox");
}else if(zodiac < 3 ) {
	alert("Your year in Chinese Zodiac calendar is Tiger");
}else if(zodiac < 4 ) {
	alert("Your year in Chinese Zodiac calendar is Rabbit");
}else if(zodiac < 5 ) {
	alert("Your year in Chinese Zodiac calendar is Dragon");
}else if(zodiac <6 ){
	alert("Your year in Chinese Zodiac calendar is Snake");
}else if(zodiac <7 ){
	alert("Your year in Chinese Zodiac calendar is Horse");
}else if(zodiac < 8 ){
	alert("Your year in Chinese Zodiac calendar is Goat");
}else if(zodiac < 9 ) {
	alert("Your year in Chinese Zodiac calendar is Monkey");
}else if(zodiac < 10 ) {
	alert("Your year in Chinese Zodiac calendar is Rooster");
}else if ( zodiac < 11 ) {
	alert("Your year in Chinese Zodiac calendar is Dog");
}else{
	alert("Your year in Chinese Zodiac calendar is Pig");}
