const fetchBtn = document.getElementById("fetch-btn");
const weatherDiv = document.querySelector(".forecast-div");

const fetchWeatherHandler = () => {
  if (!navigator.geolocation) {
    weatherDiv.innerHTML = "<h3> Geolocation not supported by browser</h3>";
  }
  // Gtting the current geolcation
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const latitute = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apikey = "baab6fc34783819d5fb1c2750e0c70a6";
      // coonstruct the apiUrl with the
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&exclude={part}&appid=${apikey}&units=metric`;

      // Fetching weather data from the apiURL
      const response = await fetch(apiURL);
      const data = await response.json();
      document.querySelector(".temp-value").textContent = data.main.temp;
      document.querySelector(".point").textContent = data.name;
      document.querySelector(".des").textContent = data.weather[0].description;
      // const weatherInfo = `<h1> Weather Info</h1>
      // <p> Temperature:${data.main.temp}</p>`;
      // weatherDiv.innerHTML = weatherInfo;
      // fetching the  location
      //  <p> Location :${data.main.l}</p>`;
      // weatherDiv.innerHTML = weatherInfo;

      console.log(data);
    },
    (error) => {
      weatherDiv.innerHTML = `<h3> Error getting geolocation: ${error.message}</h3>`;
    }
  );
};
fetchBtn.addEventListener("click", fetchWeatherHandler);
