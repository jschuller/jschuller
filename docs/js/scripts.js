var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,c,b,e){if(c){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in b||(b[d]={});b=b[d]}a=a[a.length-1];e=b[a];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};$jscomp.polyfill("Object.is",function(a){return a?a:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(a,b){var c=this;c instanceof String&&(c=String(c));var d=c.length;b=b||0;for(0>b&&(b=Math.max(b+d,0));b<d;b++){var f=c[b];if(f===a||Object.is(f,a))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(a,c,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,b){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,b||0)}},"es6","es3");var mainLink=document.getElementById("main-link");
mainLink.style.display="none";var scrollLimit=550,scrollRange=100,isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},intersected="#skils"===window.location.hash||isMobile(),barIntersected="#experience"===window.location.hash,options={root:document.querySelector("#scrollArea"),rootMargin:"0px",threshold:1};
window.addEventListener("DOMContentLoaded",function(){var a=function(){var a=document.body.querySelector("#mainNav");a&&(0===window.scrollY?a.classList.remove("navbar-shrink"):a.classList.add("navbar-shrink"))};a();document.addEventListener("scroll",a);document.body.querySelector("#mainNav")&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:72});var c=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(a){a.addEventListener("click",
function(){"none"!==window.getComputedStyle(c).display&&c.click()})});a=new IntersectionObserver(animateSkilBars,options);var b=new IntersectionObserver(displayExperienceBar,options);a.observe(document.getElementById("skils"));b.observe(document.getElementById("expOdOs"));b.observe(document.getElementById("expOttobock"));b.observe(document.getElementById("expCSGermany"));b.observe(document.getElementById("expCSPorto"));b.observe(document.getElementById("expBitBrain"));b.observe(document.getElementById("expUminho"))});
var displayExperienceBar=function(a){barIntersected&&!a[0].target.className.includes("fadeIn")&&(a[0].target.className+=" fadeIn",a[0].target.style.opacity=1);1>=barIntersected&&barIntersected++},animateBar=function(a,c,b){var e=0,d=setInterval(function(){e>=c?clearInterval(d):(e++,a.style.width=e+"%",a.innerHTML=e+"%")},void 0===b?10:b)},animateSkilBars=function(){1==intersected&&(animateBar(document.getElementById("skilsTypeScript"),97),animateBar(document.getElementById("skilsCCpp"),95),animateBar(document.getElementById("skilsCsh"),
92),animateBar(document.getElementById("skilsDocker"),90),animateBar(document.getElementById("skilsPython"),93),animateBar(document.getElementById("skilsGit"),97),animateBar(document.getElementById("skilsGraphQl"),85),animateBar(document.getElementById("skilsAws"),80));1>=intersected&&intersected++},fade=function(a,c){(a.style.opacity=c)?a.style.removeProperty("display"):a.style.display="none"};
window.onscroll=function(){fade(mainLink,Math.min(Math.max((window.scrollY-scrollLimit+scrollRange)/(2*scrollRange),0),1))};
var submitContactForm=function(){var a=document.getElementById("contactForm");a.classList.add("was-validated");if(a.checkValidity()){a.classList.remove("was-validated");var c=document.getElementById("submitButton");c.innerHTML="Sending...";c.disabled=!0;a=document.getElementById("name").value;var b=document.getElementById("email").value,e=document.getElementById("message").value;a={name:a,email:b,message:e};var d=new XMLHttpRequest;d.open("POST","https://ov6s2qc9d6.execute-api.eu-west-3.amazonaws.com/live",
!0);d.setRequestHeader("Content-Type","application/json");d.onload=function(){200===d.status?(document.getElementById("submitSuccessMessage").classList.remove("d-none"),c.classList.add("d-none")):(alert("Sorry, there was an error sending your message. Please try again later."),c.disabled=!1,c.innerHTML="Send")};d.onerror=function(){alert("Sorry, there was an error sending your message. Please try again later.");c.disabled=!1;c.innerHTML="Send"};d.send(JSON.stringify(a))}};