const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');


searchBtn.addEventListener('click', () => {
    const cityName = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0c56b865b836c63dadf70642331613a7`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Description: ${description}`;
        })
        .catch(error => {
            weatherInfo.innerHTML = 'Error fetching weather data.';
        });
});