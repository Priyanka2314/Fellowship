//UseCase1 IF Else condition
/*{
const IS_ABSENT=0;
let empcheck= Math.floor(Math.random() * 10) % 2;
if(empcheck == IS_ABSENT)
console.log("UC1 - Employee is Absent. Existing the program");
else
console.log("UC1 - Employee is Present");
}
*/

//refracting the UC2 Switch Case code for UC3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
  
  function getWorkingHours(empCheck){
  switch(empCheck){
      case IS_PART_TIME:
          return PART_TIME_HOURS;
      case IS_FULL_TIME:
        return FULL_TIME_HOURS; 
      default :
      return 0;
    }
}
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  let empWage=empHrs * WAGE_PER_HOUR;
  console.log("Hours "+empHrs + " Emp Wage: "+ empWage);





