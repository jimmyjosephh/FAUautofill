//Autofills and submit login form for FAU SSO

var CONFIG = require('./config.json')
var SSO_username = CONFIG.SSOUsername;
var SSO_password = CONFIG.SSOPassword;

function SSOLogin(){
    document.getElementById("username").value = SSO_username;
    document.querySelectorAll('[name="j_password"]')[0].value = SSO_password;
}

function SSOClick(){
    document.getElementsByClassName('btn btn-default pull-left')[0].click();
}

SSOLogin();
SSOClick();