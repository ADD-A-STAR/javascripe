// Dates

let  myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); // imp for interview


//let myCreatedDate = new Date(2023 , 0 , 23)
//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2023 , 0 , 23, 5 ,3)
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2024-08-04") // this format  not followed in india // yy-mm-dd
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("04-08-2024") // dd-mm-yy this format followed widely in india
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp); // time se time nikalna mushkil hae
//console.log(myCreatedDate.getTime());// date object hae toh usse time nikal sakte hae
//console.log(myCreatedDate.getSeconds());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default' ,{
     weekday:"long",
     
}) // customize format of line 7





