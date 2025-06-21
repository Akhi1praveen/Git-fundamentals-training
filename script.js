function updateClock() {
  const now = new Date();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // Minute needle: 0-12 -> 0 to 180 degrees
  const minuteDeg = (minutes / 60) * 180;
  // Hour needle: 0-12 -> 0 to 180 degrees (plus minute offset)
  const hourDeg = ((hours + minutes / 60) / 12) * 180;

  document.getElementById('minuteNeedle').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hourNeedle').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
