"use static";
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
 
}
var photos = new Array(); 
var photoindex = 0; 
//populate the photos[] array 
photos[0]="1.jpg"; 
photos[1]="2.jpg"; 
photos[2]="3.jpg"; 
//move backward, by one, within the photos array 

function backward() 
	{ 
		if (photoindex > 0) 
			{ 
				document.images.p.src = photos[--photoindex]; 
			} 
	} 
//move forward, by one, within the photos array 
function forward() 
	{ 
		if (photoindex < photos.length-1) 
			{ 
				document.images.p.src = photos[++photoindex]; 
			} 
	} 
//go to a particular photo within the photos array 
function goto(n) 
	{ 
		if (n < photos.length && n >= 0) 
			{ 
				photoindex = n; 
				document.images.p.src = photos[photoindex]; 
			} 
	} 