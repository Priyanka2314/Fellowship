//UseCase1
const IS_ABSENT=0;
let empcheck= Math.floor(Math.random() * 10) % 2;
if(empcheck == IS_ABSENT)
console.log("UC1 - Employee is Absent");
else
console.log("UC1 - Employee is Present");
