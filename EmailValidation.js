/**
 * email format : abc.xyz@bridgelabz..co.in
 * UC1 validating firt part of the email i.e. abc
 * UC2 validating second part of the email pattern
 * UC3 validating third part .co in email
 */
const user_input = require('readline-sync');
let emailRegEx = RegExp("^[a-z]{3,}");
let emailRegEx2 = RegExp("^[a-z]{3,}[@][a-z]{2,}$");
let emailRegEx3 = RegExp("^[a-z]{3,}[@][a-z]{2,}[.][a-z]{2}$");

function emailVaildation(email){
    if(emailRegEx3.test(email)){
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