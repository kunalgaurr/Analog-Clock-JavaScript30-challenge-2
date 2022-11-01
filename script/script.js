const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  //   SECONDS HAND
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //   MINS HAND
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  //   HOURS HAND
  const hours = now.getHours();
  const hoursDegrees = (hours / 60) * 360 + (mins / 60) * 30 + 90;

  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
