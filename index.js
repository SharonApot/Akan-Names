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

//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//where;
//CC - is the century digits. For example 1989 has CC = 19
//YY - is the Year digits (1989 has YY = 89)
//MM - is the Month
//DD - is the Day of the month 
//mod - is the modulus function ( % )


