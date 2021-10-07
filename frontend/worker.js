
function newUser() {
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Username").value;
  var req = new XMLHttpRequest();
  var x = document.getElementById("Username").value;
  document.getElementById("container").innerHTML = "You wrote: " + x;
  req.open("POST", "http://54.183.187.3");
  req.send();
}
/*
var req = new XMLHttpRequest();
req.timeout = 800;

req.onreadystatechange = function() {
    console.log("onreadystatechange");
    console.log("ReadyState: " + req.readyState);
    console.log("Response status: " + req.status);
}
req.onerror = function(error) {
    console.log("onerror: " + error);
}
req.onabort = function() {
    console.log("onabort");
}
req.ontimeout = function() {
    console.log("ontimeout");
}

req.open("GET", "http://192.168.1.36&quot;);
req.send();



//////#

fetch("https://ipinfo.io/json")

  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.ip);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
  
*/
