const timer = document.querySelector("h2");
const CHRISTMAS_TIMESTAMP = "1671894000";

function updateTime() {
  let restTime = CHRISTMAS_TIMESTAMP - Math.floor(new Date().getTime() / 1000);

  const day = String(Math.floor(restTime / (3600 * 24))).padStart(2, "0");
  restTime = restTime - day * 24 * 60 * 60;

  const hour = String(Math.floor(restTime / 3600)).padStart(2, "0");
  restTime = restTime - hour * 3600;

  const minute = String(Math.floor(restTime / 60)).padStart(2, "0");
  restTime = restTime - minute * 60;

  const second = String(restTime).padStart(2, "0");

  timer.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

updateTime();
setInterval(updateTime, 1000);
