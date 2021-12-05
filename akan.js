//formula to determine day of birth

//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// CC - is the century digits. For example 1989 has CC = 19
//YY - is the Year digits (1989 has YY = 89)
//MM -  is the Month
//DD - is the Day of the month 
//mod - is the modulus function ( % )

let dayOfWeekIndex = Math.floor((((Number(selectedYear.slice(0,2))/4)-2*Number(selectedYear.slice(0,2))-1)+
  ((5*Number(selectedYear.slice(2,4))/4))+((26*(y+1)/10))+x)%7);

//Arrays for Male and Female Akan names and the days of the week
let daysOfWeek = [
"SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"
];

let maleAkanNames = [
"KWASI", "KWADWO", "KWABENA", "KWAKU", "YAW", "KOFI", "KWAME"
];

let femaleAkanNames = [
"AKOSUA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"
];

//Getting the index value for selecting the array items
let index;
if (dayOfWeekIndex == 0){
index = 6;
} else {
index = dayOfWeekIndex - 1;
}
console.log(index);


let text;
if (gen == "Male") {
text = "Which means that You were born on a " + daysOfWeek[index] + " and your Akan name is " + maleAkanNames[index];
} 
else if (gen == "Female") {
text = "Which means that You were born on a " + daysOfWeek[index] + " and your Akan name is " + femaleAkanNames[index];
} 
else {
text = "Input not valid. You entered an invalid day or month, please try again";
}
document.getElementById("result").innerHTML = text;



