const API_KEY = "b316c980441d737b14db685d96bfe1f5";

navigator.geolocation.getCurrentPosition(onGeoSucceed, onGeoFail);

function onGeoSucceed(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].description);
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}`;
    });
}

function onGeoFail() {
  alert("위치를 찾을 수 없습니다. 날씨 정보가 없습니다.");
}
