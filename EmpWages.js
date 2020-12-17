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

const NUM_OF_WORKING_DAYS= 20;
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map(); //UC 8 & UC 9
let empDailyHrsMap = new Map; //UC9
let empDailyHrsAndWageArr = new Array(); //UC 10

function calcDailyWage(empHrs){
 return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
 totalWorkingDays++;
 let empCheck = Math.floor(Math.random() * 10) % 3;
 let empHrs =getWorkingHours(empCheck);
 totalEmpHrs +=empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
  empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs)); //for UC 8 and Uc9
  empDailyHrsMap.set(totalWorkingDays,empHrs); // UC 9
   
 empDailyHrsAndWageArr.push(      //UC 10
     {
       dayNum:totalWorkingDays,
       dailyHours:empHrs,
       dailyWage:calcDailyWage(empHrs),
       toString(){
           return '\nDay' + this.dayNum + '=> Working Hours is ' + this.dailyHours + ' And Wage Earned =' + this.dailyWage
       },

     });
 
}

let empWage=calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days : "+ totalWorkingDays + " Total Hours:  "+totalEmpHrs + " Emp Wage: "+ empWage);

//Array Helper Functions
//UC 7A - Calc total Wage using Array forEach TRAVERSAL Or reduce method
let totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
    console.log("UC7A- Total Days:"+totalWorkingDays+ " Total Hrs: "+totalEmpHrs+ " Emp Wage: "+totalEmpWage);

    function totalWages(totalWage,dailyWage){
        return totalEmpWage + dailyWage;
    }

    console.log("UC7A- Emp Wage reduce with reduce: "+empDailyWageArr.reduce(totalWages,0));

    //UC 7B - Show the Day along with Daily Wage using Array map helper function
    let dailycntr =0;
    function mapDayWithWage(dailyWage){
        dailycntr++;
        return dailycntr + "=" + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("UC7B - Daily Wage MAp");
    console.log(mapDayWithWageArr);

    //UC 7C - Show Days when Full Time wage of 160 were earned
    function fulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }

    let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
    console.log(fullDayWageArr);

    //UC 7D -  Find the first occurence when Full Time Wage was earned using find function
    function findFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC 7D - First time Fulltime wage was earned on Day :"+ mapDayWithWageArr.find(findFulltimeWage));

    //UC 7E - Check if Every Element  of FullTime Wage is truly holding Full time wage
    function isAllFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC 7E - Check All Element have Full time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));

    //UC 7F -Check if there is any Part Time Wage
    function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80");
    }
    console.log("UC 7F - Check if Any Part Time Wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

    //UC 7G - Find the number of days Employees Worked
    function totalDaysWorked(numOfDays,dailyWage){
        if(dailyWage > 0)
        return numOfDays + 1;
        return numOfDays;
    }
    console.log("UC 7G - Number of Days Emp Worked:" + empDailyWageArr.reduce(totalDaysWorked,0));

    //UC 8 - Storing Daily Wage in a Map
    console.log(empDailyWageMap);
    console.log("UC 8 - Emp Wage Map totalHrs:"+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC 9A Arrow Functions

const findTotal = (totalVal,dailyVal) => {
    return totalVal + dailyVal;
}
let totalHrs = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                  .reduce(findTotal,0);
                  console.log("UC9A - Emp Wage with Arrow: "+ "Total Hrs: "+totalHrs + " Total Wages: "+totalSalary);
//UC 9B

let nonWorkingDays = new Array();
let partWorkingfDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key) => {
    if(value==8)
    fullWorkingDays.push("key: "+key);
    else if (value == 4)
    partWorkingfDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingfDays);
console.log("NOn Working Days: "+nonWorkingDays);


// UC 10 Object Creation

console.log("UC 10 showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);

//UC 10A  to UC 11D Using Object Functions along with Arrow Functions

let totalWage = empDailyHrsAndWageArr
                   .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                   .reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);
let totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours,dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);
console.log("UC 11A Total Hours :" + totalHours+ " Total Wages: "+totalWage);

process.stdout.write("UC 11B Logging Full Work Days ");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingfDaysStrArr =empDailyHrsAndWageArr
                              .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                              .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartWorkingDaysString "+ partWorkingfDaysStrArr);

let nonWorkingDayNum = empDailyHrsAndWageArr
                              .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                              .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums: "+nonWorkingDayNum);