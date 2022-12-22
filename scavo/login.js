var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = documentnt.querySelector("body");

btnSignin.addEventListener("click", function() {
    body.className = "sign-in-js";
})
btnSignup.addEventListener("click", function() {
    body.className = "sign-up-js";
})