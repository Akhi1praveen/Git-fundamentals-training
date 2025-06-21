function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDeg = (seconds / 60) * 180 - 90;
  const minuteDeg = (minutes / 60) * 180 - 90;
  const hourDeg = ((hours + minutes / 60) / 12) * 180 - 90;

  document.getElementById('secondNeedle').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById('minuteNeedle').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hourNeedle').style.transform = `rotate(${hourDeg}deg)`;

  const digital = now.toLocaleTimeString('en-GB'); // 24h format
  document.getElementById('digitalTime').textContent = digital;
}

setInterval(updateClock, 1000);
updateClock();
