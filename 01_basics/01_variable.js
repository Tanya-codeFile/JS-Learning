const accountId = 22;
let account_Username = "tanya@gmail.com";
var account = "tanya";

let username;
// here this is declared but not assigned a value so the variable becomes undefined. 

account_Username = "astha@gmail.com";
account = "astha";

console.table([account_Username, account, username]);

// never use var in javascript as when we make changes in var variable -- all other variables with same name gets change and it throws issue with block scope and functional scope. 
// const does not change


