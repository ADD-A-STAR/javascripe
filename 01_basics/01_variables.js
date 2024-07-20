const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail="ad@ad.com"
accountPassword="21212121"
accountCity="kolkata"

console.log(accountId);


/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail , accountPassword, accountCity , accountState])

