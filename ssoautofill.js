//Autofills and submit login form for FAU SSO

var SSO_username = "SSOUsername";
var SSO_password = "SSOPassword";

function SSOLogin(){
    document.getElementById("username").value = SSO_username;
    document.querySelectorAll('[name="j_password"]')[0].value = SSO_password;
}

function SSOClick(){
    document.getElementsByClassName('btn btn-default pull-left')[0].click();
}

SSOLogin();
SSOClick();
