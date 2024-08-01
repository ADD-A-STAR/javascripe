  // Primitive

  // 7 types  : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3456789007635667788485647n



  //  Reference (Non primitive)

  // Array , Objects , Functions 

  const heros =  ["shaktiman", "nagraj", "doga"];
  let myObj = {
    name:"aditya",
    age:22,
  }

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction); 
// function ka typeof ko  object function kehte hae
console.log(heros);
console.log(scoreValue);
// sare non primitive type hae inka jo return trype hae woh object he aata hae
