var min = 0;
var sec = 0;
var timer;
let stopwatch = document.querySelector("p");

function start() {
  timer = setInterval(starting, 1000);
}

function starting() {
  sec++;
  stopwatch.innerText = (min < 10 ? ("0" + min) : min) + ":" + (sec < 10 ? ("0" + sec) : sec);
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
  }
}

function stop() {
  clearInterval(timer);
}

function reset() {
  min = 0;
  sec = 0;
  clearInterval(timer);
  stopwatch.innerText = (min < 10 ? ("0" + min) : min) + ":" + (sec < 10 ? ("0" + sec) : sec);
}