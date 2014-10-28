var user = 0;
var computer = 0;
var draw = 0;
var winpic;
alert("hello");



var reset = function() {
  document.getElementById("pick").style.display="none";
  document.getElementById("winner").style.display="none";
  user = 0;
  computer = 0;
  draw = 0;
};


var randomChoice = function() {
  console.log(122);
  var num = Math.floor(Math.random() * 3);
  if (num === 0) {
    computerChoice = "water";
  } if (num === 1) {
    computerChoice = "plant";
  } if (num ===2) {
    computerChoice = "fire";
  }
  document.getElementById("computer").style.backgroundImage="url('images/" + computerChoice + ".jpg')";
  return computerChoice;
};

var compare = function(val1,val2) {
  document.getElementById("winner").style.display="block";
  if (val1 === val2) {
    draw += 1;
    document.getElementById("winner").style.display="none";
  } else if ((val1==="water" && val2==="fire") || (val1==="plant" && val2==="water") || (val1==="fire" && val2==="plant")) {
      user +=1;
      winpic = val1;
      document.getElementById("winner").src = val1 + ".jpg";
  } else if ((val1==="water" && val2==="plant") || (val1==="plant" && val2==="fire") || (val1==="fire" && val2==="waterß")) {
      computer +=1;
      winpic = val2;
      document.getElementById("winner").style.backgroundImage = "url('images/" + winpic + ".jpg')";
  }
};
var start = function() {

console.log("hello");
  var choices = document.getElementsByClassName("choice");
  for (var i = 0; i < choices.length; i++) {
    choices[i].onclick = function() {
      document.getElementById("pick").style.backgroundImage = "url('images/" + this.id + ".jpg')";
      document.getElementById("computer").style.display="block";
      compare(this.id,randomChoice());
    };
  }

};
window.onload = start;