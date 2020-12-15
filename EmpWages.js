const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;  
let empDailyWageMap = new Map(); //UC 8

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

function calcDailyWage(empHrs){
 return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
 totalWorkingDays++;
 let empCheck = Math.floor(Math.random() * 10) % 3;
 let empHrs =getWorkingHours(empCheck);
 totalEmpHrs +=empHrs;
 empDailyWageArr.push(calcDailyWage(empHrs));
 empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs)); //for UC 8 
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

