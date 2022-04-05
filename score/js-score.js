let counter = 0;
let counter2 = 0;
function countingClicks() {
  document.getElementById("counting").innerHTML = ++counter;
  if (counter % 20 == 0){
    counter =0;
  document.getElementById("warning").innerHTML=++counter2;
  const audio =new Audio("mario.mp3");
  audio.play();

    }
}
