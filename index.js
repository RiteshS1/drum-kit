var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    // var audio =  new Audio('sounds//crash.mp3');
    // audio.play();
  });
}

document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// WE CAN USE THIS ALSO BUT SAARE BUTTONS PR HOJAYEGA NA YE TO CZ WE ARE USING TAGNAME
//document.addEventListener('click', function (x) {
//     if (x.target.tagName === 'BUTTON') {
//       alert('i got clicked');
//     }
//   });

document.querySelector(".info").addEventListener("click",function showSteps() {
  var stepsDiv = document.getElementById('steps');
  if (stepsDiv.style.display === 'none') {
      stepsDiv.style.display = 'block';
  } else {
      stepsDiv.style.display = 'none';
  }
})


function makeSound(key){

    switch (key) {
        case "w":
          var tom1 = new Audio("sounds//tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          var tom2 = new Audio("sounds//tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds//tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds//tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var crash = new Audio("sounds//crash.mp3");
          crash.play();
          break;
        case "k":
          var kick = new Audio("sounds//kick-bass.mp3");
          kick.play();
          break;
  
        case "l":
          var snare = new Audio("sounds//snare.mp3");
          snare.play();
          break;
        default:
          console.log(buttonInnerHTML);
          break;
      }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
  
};

