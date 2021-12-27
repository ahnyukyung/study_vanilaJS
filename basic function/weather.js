navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "a62d2936ac06ca7a0d5881335e6d2746";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log("you live", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      //   console.log(data.name, data.weather[0].main, data.weather[0].description, data.main.temp);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("can't find your location");
}
