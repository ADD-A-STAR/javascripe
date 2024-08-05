// array

const myArr = [ 0 , 1 , 2 , 3, 4, 5]
const myHeroes = ["shaktimann" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);
console.log(myArr[1]);

// Array Methods


//myArr.push(6) // insert element at the end 
//myArr.push(7) 
//myArr.pop() // remove element from the end
//console.log(myArr);


//myArr.unshift(9) // insert element at the start
//myArr.shift()  // remove element from the start
//console.log(myArr);


console.log(myArr.includes(9)); // determines whether a array contains a particular element , returns value in boolean
console.log(myArr.indexOf(9)); // returns the index value of an element

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof  newArr);// value of myArr and newArr will remain same but the difference will be in typeof

// slice , splice - imp for interview 

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.slice(1,3)
console.log(myn2);








