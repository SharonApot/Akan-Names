//code for year of birth drop down
window.onload = function () {
  var year = document.getElementById("year");
  var currentYear = (new Date()).getFullYear();
  for (var i = 1940; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      year.appendChild(option);
  }
};

function myFunction() {
  // Get the value of the input fields
  let x = document.getElementById("day").value;
  let y = document.getElementById("month").value;
  var select = document.getElementById("year");
  var z = select.options[select.selectedIndex].value;
  console.log(z);
  
  // If x is Not a Number or less than one or greater than 31
  // If y is Not a Number or less than one or greater than 12
  // If z is Not a Number or less than one thousand nine hundred or greater than Two thousand and Twenty One
  
  let text;
  if ((isNaN(x) || x < 1 || x > 31) || (isNaN(y) || y < 1 || y> 12) || (isNaN(z) || z> 2021)){
    text = "Input not valid. Enter digits";
  } else {
    text = "Your Birthdate is " + (x)+"/"+ (y) + "/" +(z);
  }
  document.getElementById("print").innerHTML = text;
}



