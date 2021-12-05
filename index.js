//code for year of birth drop down
window.onload = function () {
  var birthYear = document.getElementById("year");
  var currentYear = (new Date()).getFullYear();
  for (var i = 1940; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      birthYear.appendChild(option);
  }
};

//formula to determine day of the of the week of birth
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// CC - is the century digits. For example 1989 has CC = 19
//YY - is the Year digits (1989 has YY = 89)
//MM -  is the Month
//DD - is the Day of the month 
//mod - is the modulus function ( % )


function myFunction() {   

// Get the value of the input fields  
let x = document.getElementById("day").value;
let y = document.getElementById("month").value;
var selectedYear = document.getElementById("year");
var z = selectedYear.options[selectedYear.selectedIndex].value;
console.log(z);


var genderInput = document.getElementsByName("gender");
var gen = "";
for (var i = 0; i < genderInput.length; i++) {
  if (genderInput[i].checked) {
    gen = (genderInput[i].value);
    }
}

// If x is Not a Number or less than one or greater than 31
// If y is Not a Number or less than one or greater than 12
  
let text;
if ((isNaN(x) || x < 1 || x > 31) || (isNaN(y) || y < 1 || y> 12)){
    text = "Input not valid. You entered an invalid day or month, please try again";
  } 
else if (gen== "Male") {
    text = " You are a  " + (gen) + " And Your Birthdate is " + ((x)+"/"+ (y) + "/" +(z));
  }
else if (gen== "Female") {
    text = " You are a  " + (gen) + " And Your Birthdate is " + (x)+"/"+ (y) + "/" +(z);
  }
  document.getElementById("print").innerHTML = text;

//Arrays for Male and Female Akan names and the days of the week
var daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var maleAkanNames = ["KWASI", "KWADWO", "KWABENA", "KWAKU", "YAW", "KOFI", "KWAME"];
var femaleAkanNames = ["AKOSUA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"];

console.log(daysOfWeek);
console.log(maleAkanNames);
console.log(femaleAkanNames);

let dob = ((z)+"-"+ (y) + "-" +(x));
console.log(dob);

const d = new Date(dob);
let day = d.getDay();

let texts;
if (gen == "Male" ) {
   texts ="Which means that You were born on a " + daysOfWeek[parseInt(day)] + " and your Akan name is " + maleAkanNames[day];
 } 
else if (gen == "Female" ) {
   texts="Which means that You were born on a " + daysOfWeek[day] + " and your Akan name is " + femaleAkanNames[day];
 } 
else {
   texts="Input not valid. You entered an invalid day or month, please try again";
}
document.getElementById("result").innerHTML = texts;
}

function refreshPage(){
  window.location.reload();
} 
