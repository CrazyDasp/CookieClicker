let cookie = document.getElementById("cookie");

let clickerCounter = document.getElementById("clicker__counter");

clickerCounter.textContent = 0

cookie.onclick = () => {
  clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
  
  cookie.width += 50;
  cookie.heigh += 50;
  
  setTimeout(() => {
    cookie.width -= 50;
    cookie.heigh -= 50;
  }, 100);
};

let clickPerSecond = document.getElementById("clickPerSecond");

let timeCounter = 0;

if (cookie.onclick) {
  let timeCounter = 0;
  
  setInterval (() => {
    timeCounter++;
  
    clickPerSecond.textContent = Number(clickerCounter.textContent) / Number(timeCounter);
  
  clickPerSecond.textContent = (Number(clickPerSecond.textContent)).toFixed(2);
}, 1000);
};