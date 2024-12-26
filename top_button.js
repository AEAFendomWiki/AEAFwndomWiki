// script.js

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

var button = document.getElementById("scrollToTopBtn");

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

button.style.display = "block";

} else 

button.style.display = "block";

}

}

document.getElementById('scrollToTopBtn').addEventListener('click', function(){

window.scrollTo({top: 0, behavior: 'smooth'});

};

 
