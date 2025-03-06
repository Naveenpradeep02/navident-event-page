const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetedDate = new Date("May 1 ,2025 22:30:00").getTime();
const timer = () => {
  const CurrentDate = new Date().getTime();
  const distance = targetedDate - CurrentDate;

  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;

  if (distance < 0) {
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
  }
};

timer();
setInterval(timer, 1000);
