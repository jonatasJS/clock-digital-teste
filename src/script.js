const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

setInterval(() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hh = now.getHours() * 30;
  const mm = now.getMinutes() * 6;
  const ss = now.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  hour.innerHTML = `${(hh / 30) < 10 ? '0' + (hh / 30) : (hh / 30)}`;
  minutes.innerHTML = `${(mm / 6) < 10 ? '0' + (mm / 6) : (mm / 6)}`;
  seconds.innerHTML = `${(ss / 6) < 10 ? '0' + (ss / 6) : (ss / 6)}`;
  ampm.innerHTML = `${hh >= 12 ? 'PM' : 'AM'}`;
}, 1000);
