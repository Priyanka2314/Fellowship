//UC 1 pincode validation for 6 digit number
let pinCodeRegex=RegExp('^[0-9]{6}$');

function pinCodeValidation(pincode){
    if(pinCodeRegex.test(pincode)){
        console.log(pincode+" is valid");
    }
    else throw "Invalid PINCode";
}
try{
    let user_input = require('readline-sync');
    let pincode = user_input.question("Please enter the pin code");
    pinCodeValidation(pincode);
    console.log(pincode);
}catch(e){
    console.log(e);
}