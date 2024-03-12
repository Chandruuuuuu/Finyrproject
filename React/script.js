// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3cb53c8c42f2bfb25cbd8ec797c87581&units=metric`;

const searchButton = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

const API_KEY = "3cb53c8c42f2bfb25cbd8ec797c87581"; // Replace with your OpenWeatherMap API key

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
  const cityName = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;
    })
    .catch((error) => {
      console.log("Error:", error);
      weatherInfo.innerHTML = "An error occurred. Please try again.";
    });
}
