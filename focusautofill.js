//Autofills and submit login form for FAU Focus Software

var username = "focusUsername";
var password = "focusPassword";

function focusLogin(){
    document.getElementById("username-input").value = username;
    document.querySelectorAll('input')[1].value = password;
}

function focusClick(){
    document.getElementsByClassName("ui large orange button form-button")[0].click();
}
/*
function attendanceClick(){
    document.getElementsByClassName('check-in-button focus-button')[0].click();
}
*/

focusLogin();
focusClick();

//setTimeout(attendanceClick, 4000);
