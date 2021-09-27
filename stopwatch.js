var min = 0;
var sec = 0;
var timer;
let stopwatch = document.querySelector("p");
let started = false;

function start() {
  if (started === false) {
    timer = setInterval(starting, 1000);
    started = true;
  }
}

function starting() {
  sec++;
  stopwatch.innerText = (min < 10 ? ("0" + min) : min) + ":" + (sec < 10 ? ("0" + sec) : sec);
  if (sec === 60) {
    sec = 0;
    min++;
    stopwatch.innerText = min + ":" + "0" + sec;
  }
  if (min === 60) {
    min = 0;
  }

}

function stop() {
  clearInterval(timer);
  started = false;
}

function reset() {
  min = 0;
  sec = 0;
  clearInterval(timer);
  started = false;
  stopwatch.innerText = (min < 10 ? ("0" + min) : min) + ":" + (sec < 10 ? ("0" + sec) : sec);
}