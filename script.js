function loadJSON(path, api, success, error) {
document.getElementById("response").innerHTML = "loading...";
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    success(JSON.parse(xhr.responseText), successMsg, setError);
  }
});

xhr.open("GET", path);
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", api);
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
}

function myData(Data, success, error) {
   var count = 0-1;
   Array.from({length: Data.length}, () => {
      count += 1;
      if (document.getElementById("username").value === Data[count].username & document.getElementById("password").value === Data[count].password) {
         success("Hello " + Data[count].name + "!");
      } else {
         error("incorrect username and/or password");
      }
   })
}

function setError(type) {
   document.getElementById("login").style.display = "none";
   document.getElementById("signup").style.display = "none";
   document.getElementById("response").innerHTML = type;
   document.getElementById("back").style.display = "block";
}

function setJSON(path, api, data, success, error) {
    document.getElementById("response").innerHTML = "loading...";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        success("data sent");
      }
    });
    
    xhr.open("POST", path);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", api);
    xhr.setRequestHeader("cache-control", "no-cache");
    
    xhr.send(data);
}

function successMsg(type) {
   document.getElementById("login").style.display = "none";
   document.getElementById("signup").style.display = "none";
   document.getElementById("response").innerHTML = type;
   document.getElementById("back").style.display = "block";
}


// loadJSON("https://zball-ec41.restdb.io/rest/username", "6228c7c7dced170e8c83a0b8", myData, setError);

// setJSON("https://zball-ec41.restdb.io/rest/username", "6228c7c7dced170e8c83a0b8", JSON.stringify({"username": "bobmcbob", "password": "bob", "name": "sean"}), successMsg, setError);

document.getElementById("submit").onclick = function() {
   loadJSON(`https://zball-ec41.restdb.io/rest/username`, "6228c7c7dced170e8c83a0b8", myData, setError);
}

document.getElementById("submit2").onclick = function() {
   loadJSON("https://zball-ec41.restdb.io/rest/username", "6228c7c7dced170e8c83a0b8", testIfAvailable, setError);
}

function testIfAvailable(Data, success, error) {
   var count = 0-1;
   var taken = false
   Array.from({length: Data.length}, () => {
      count += 1;
      if (document.getElementById("username2").value === Data[count].username) {
         error("Sorry, but that username is taken.");
         taken = true;
      }
   })
   if (taken === false) {
      setJSON("https://zball-ec41.restdb.io/rest/username", "6228c7c7dced170e8c83a0b8", JSON.stringify({"username": document.getElementById("username2").value, "password": document.getElementById("password2").value, "name": document.getElementById("name").value}), successMsg, setError);
   }
}

function showLogin() {
   document.querySelector("#sub").style.display = "none";
   document.querySelector("#lib").style.display = "none";
   document.getElementById("login").style.display = "block";
}

function showSignUp() {
   document.querySelector("#sub").style.display = "none";
   document.querySelector("#lib").style.display = "none";
   document.getElementById("signup").style.display = "block";
}

