/*
see https://github.com/mohammed-Emad/i_see
*/

//replace logo//
var linkedinLogo = document.getElementsByClassName("global-nav__logo")[0]; //get class//
//set new image//
document.querySelector(".global-nav__logo.global-nav__logo").src = "https://raw.githubusercontent.com/mohammed-Emad/i_see/main/media/img/linkedin_logo.png";


//remove span text//
var linkedinSpan = document.getElementsByClassName("t-14 global-nav__logo-hoverable")[0];
linkedinSpan.parentElement.removeChild(linkedinSpan);
