"use static";
//Utilizing the $ function to load and change the value from a specific I.D
var $ = function (id) {
    return document.getElementById(id);
}
var checkout = function () {
  window.location.href='checkout.html'
}
var signup = function () {
  window.location.href='signup.html'
}
var login = function () {
  alert("You must Sign up before Log In!")
}
window.onload = function () {
     $("checkout").onclick = checkout;
     $("log").onclick = login;
     $("signup").onclick = signup;

//Autosliding the Images   
  var imageNode = $("p");
  var slidesNode = $("imagess"); 
  var slides = slidesNode.getElementsByTagName("img");
  var image, imageCounter = 0;
  var  timer = setInterval(
        function () { 
            imageCounter = (imageCounter + 1) % slides.length;
            image = slides[imageCounter];
            imageNode.src = image.src;
        },
        2500);
}
  var photos = new Array(); 
  var photoindex = 0; 

//populate the photos[] array 
  photos[0]="1.jpg"; 
  photos[1]="2.jpg"; 
  photos[2]="3.jpg";

//go to a particular photo within the photos array 
function goto(n) 
	{ 
		if (n < photos.length && n >= 0) 
			{ 
				photoindex = n; 
				document.images.p.src = photos[photoindex]; 
			} 
	} 