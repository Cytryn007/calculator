var buttons;
var screen;
var reset;
var calc;

buttons = document.querySelectorAll(".calculator button.can-show-on-screen");
reset = document.getElementById("reset");
screen = document.querySelector(".calculator .screen");
calc = document.getElementById("calc");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){
      if (screen.innerText.length > 10) {
        return;
      }
      if (e.target.innerText == "X" ||
      e.target.innerText == "+" ||
      e.target.innerText == "-" ||
      e.target.innerText == "÷") {
        return screen.innerText += " " + e.target.innerText;
      }
      screen.innerText += e.target.innerText;
    });
};

reset.addEventListener("click", function(){
    screen.innerText = "";
});

calc.addEventListener("click",function(){
    var a = screen.innerText.split(" ");
    var result = parseInt(a[0]);
    for (var i = 1; i < a.length; i++) {
        var char = a[i].substring(0, 1);
        var number = parseInt(a[i].substring(1));

        switch (char) {
            case "+" : 
                result = result + number;
                break;
            case "X" :
                result = result * number;
                break;
            case "÷" :
                result = result / number;
                break;
            case "-" : 
                result = result - number;
                break;
        }
        
    }
    screen.innerText = result;
});
