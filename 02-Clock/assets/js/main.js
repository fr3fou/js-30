let secondsHand = document.querySelector('.second-hand');
let minutesHand = document.querySelector('.min-hand');
let hoursHand = document.querySelector('.hour-hand');

let time = new Date();

let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

function updateTime() {
  let secDeg = 0;
  let minDeg = 0;
  let hourDeg = 0;

  seconds++;
  secDeg += seconds * 6; // one second = 6deg

  minutes = seconds % 60 == 0 ? minutes + 1 : minutes;
  minDeg += minutes * 6 + (seconds / 60) * 6; // one minute = 6deg

  hours = minutes % 60 == 0 ? hours + 1 : hours;
  hourDeg += hours * 30 + (minutes / 60) * 30; // one hour = 30deg

  secondsHand.style.transform = `rotate(${secDeg}deg)`;
  minutesHand.style.transform = `rotate(${minDeg}deg)`;
  hoursHand.style.transform = `rotate(${hourDeg}deg)`;
}

updateTime();
setInterval(updateTime, 1000);
