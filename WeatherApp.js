const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector(".icon");

async function getWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e11d7e1bfc6d72e0b3e674c73fe5571f&&units=metric`
  );
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await res.json();
    document.querySelector(".celcius").innerHTML =
      Math.round(data.main.temp) + "°c";

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".humidityp").innerHTML =
      Math.round(data.main.humidity) + "%";

    document.querySelector(".winds").innerHTML =
      Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == "Clouds") {
      image.src = "./../Weatherimages/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      image.src = "./../Weatherimages/rain.png";
    } else if (data.weather[0].main == "Clear") {
      image.src = "./../Weatherimages/clear.png";
    } else if (data.weather[0].main == "Mist") {
      image.src = "./../Weatherimages/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      image.src = "./../Weatherimages/drizzle.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => getWeather(searchInput.value));
