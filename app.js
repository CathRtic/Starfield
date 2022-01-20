const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "Q6LCLptEevXBK9pvwj1GeEsPbM4mmv6ywTmfw0Nc";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})