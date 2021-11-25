//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
 
//where;

    //CC - is the century digits. For example 1989 has CC = 19
    //YY - is the Year digits (1989 has YY = 89)
    //MM - is the Month
    //DD - is the Day of the month 
    //mod - is the modulus function ( % )

function getInputValue(){
    var dayValue = document.getElementsByName("day").value;
    var monthValue = document.getElementsByName ("month").value;
    var yearvalue = document.getElementsByName ("year").value;
}

function getRadioCheckedValue(){
  
    }
    
//Day of the week (d) = ( ( (cc/4) -2*CC-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) mod 7

var dayOfWeek = d;
d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

var yy= year
var cc = console.log(year.slice(0,1));
var mm = month
var dd = day




 