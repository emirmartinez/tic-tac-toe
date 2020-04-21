var change = true;
var winner = false;

// EVENT LISTENER
var clickEventListener = function (location) {
  if (change === true) {
    document.getElementById(location).innerHTML = "X";
    change = false;
    rules("X")
  } else if (change === false) {
    document.getElementById(location).innerHTML = "O";
    change = true;
    rules("O")
  }
};

// BUTTON DIV
var buttonHide = function () {
  var btnDiv = document.getElementById('button');
  if(winner === true) {
    btnDiv.style.display = "none"
  } else {
    btnDiv.style.display = "block"
  }
}


// GAME RULES
var rules = function (user) {
  if (document.getElementById('main').rows[0].cells[0].innerHTML === user &&
  document.getElementById('main').rows[0].cells[1].innerHTML === user &&
  document.getElementById('main').rows[0].cells[2].innerHTML === user) {
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[1].cells[0].innerHTML === user &&
  document.getElementById('main').rows[1].cells[1].innerHTML === user &&
  document.getElementById('main').rows[1].cells[2].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[2].cells[0].innerHTML === user &&
  document.getElementById('main').rows[2].cells[1].innerHTML === user &&
  document.getElementById('main').rows[2].cells[2].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[0].cells[0].innerHTML === user &&
  document.getElementById('main').rows[1].cells[0].innerHTML === user &&
  document.getElementById('main').rows[2].cells[0].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[0].cells[1].innerHTML === user &&
  document.getElementById('main').rows[1].cells[1].innerHTML === user &&
  document.getElementById('main').rows[2].cells[1].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[0].cells[2].innerHTML === user &&
  document.getElementById('main').rows[1].cells[2].innerHTML === user &&
  document.getElementById('main').rows[2].cells[2].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[0].cells[0].innerHTML === user &&
  document.getElementById('main').rows[1].cells[1].innerHTML === user &&
  document.getElementById('main').rows[2].cells[2].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
  else if(document.getElementById('main').rows[0].cells[2].innerHTML === user &&
  document.getElementById('main').rows[1].cells[1].innerHTML === user &&
  document.getElementById('main').rows[2].cells[0].innerHTML === user){
    setTimeout(function(){ alert("The winner is " + user); }, 200);
    var winner = true;
    buttonHide()
  }
}






