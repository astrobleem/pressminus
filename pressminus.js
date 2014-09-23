// ==UserScript==
// @name        I'm not going to press that.
// @namespace   http://userscripts.org
// @description Press Plus? Press Minus.
// @include    https://*.ppjol.com/*
// @version     1
// @grant       none
// ==/UserScript==


var input=document.createElement("input");
input.type="button";
input.value="PRESS MINUS";
input.onclick = showAlert;
document.body.appendChild(input); 

function showAlert()
{   
var theFirstThing = document.getElementById('pp-outer');
theFirstThing.parentNode.removeChild(theFirstThing);  
}
