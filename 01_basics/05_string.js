const name = "aditya"
const repoCount = 7

// console.log(name + repoCount + "value" );

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`aditya-patel-com`)

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);
// slice kae andhar he negative value use kar sakte hae

const newStringOne = " aditya "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim starting space aur ending space ko remove kar deta hae

const url = "https://aditya.com/aditya%20patel"

console.log(url.replace('%20','-'));

console.log(url.includes('aditya'));
console.log(url.includes('star'));

console.log(gameName.split(`-`));