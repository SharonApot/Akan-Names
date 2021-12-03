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
    text = "Input not valid. Enter correct day and Month";
  } else {
    text = " You are a  " + (gen) + " And Your Birthdate is " + (x)+"/"+ (y) + "/" +(z);
  }
  document.getElementById("print").innerHTML = text;
}



