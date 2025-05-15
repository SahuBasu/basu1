function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'f88ec36c9428f7179150f8839ccc2716'; // Replace with your real API key   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const weatherHtml = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temp: ${data.main.temp}°C</p>
          <p>☁️ Weather: ${data.weather[0].description}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weatherResult').innerHTML = weatherHtml;
      })
      .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
  