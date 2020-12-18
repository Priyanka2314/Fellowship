/**
 * email format : abc.xyz@bridgelabz..co.in
 * UC1 validating firt part of the email i.e. abc
 * 
 */
const user_input = require('readline-sync');
let emailRegEx = RegExp("^[a-z]{3,}");
function emailVaildation(email){
    if(emailRegEx.test(email)){
        console.log(email+" is valid");
        return true;
    }
    else throw "Email format is Invalid "
}
try{
    let email = user_input.question("Please enter email ");
    emailVaildation(email);
}catch(e){
    console.log(e);
}