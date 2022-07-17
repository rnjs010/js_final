
const API_KEY = "46a74745e1fc8fd3f703d7e5cd42711e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:nth-child(3)");
      const maxminTemp = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}°`
      weather.innerText = `${data.weather[0].main}`;
      maxminTemp.innerText = `Max:${data.main.temp_max}° / Min:${data.main.temp_min}°`
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);