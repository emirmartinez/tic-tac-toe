var change = true;

var clickEventListener = function (location) {
  if (change === true) {
    document.getElementById(location).innerHTML = "X";
    change = false;
  } else if (change === false) {
    document.getElementById(location).innerHTML = "O";
    change = true;
  }
}


