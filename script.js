//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

/*This variable will track the number of times the button was clicked.*/
var clickCount = 0; 

var motivateButton = document.getElementById("motivateButton");

motivateButton.addEventListener("click", sendMotivation);

function sendMotivation(){
  clickCount += 1;
  if (clickCount == 1){
    sendMotivation1(); 
  }
  if (clickCount == 2){
    sendMotivation2(); 
  }
  if (clickCount == 3){
    sendMotivation3();
    resetClickCount();
  }
}

function sendMotivation1(){
  alert("Deep breaths. You got this.");
}

function sendMotivation2(){
  alert("Be nice to people. We're all trying our best.");   
}

function sendMotivation3(){
  alert("I'm proud of the progress you're making. No matter how small.");
}

function resetClickCount(){
  clickCount = 0; 
}
