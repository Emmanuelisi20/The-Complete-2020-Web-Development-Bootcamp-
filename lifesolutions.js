function lifeInWeeks(age)
{

var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;

console.log("you have" + days + "days," + weeks + "weeks," + months + "months, left");

}

lifeInWeeks(22);

