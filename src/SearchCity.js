import React, { useState } from "react";
import axios from "axios";

export default function SearchCity() {
  let [city, setCity] = useState(null);
  let [cityInput, setCityInput] = useState(null);
  let [reply, setReply] = useState(null);
  let [weatherDetails, setWeatherDetails] = useState({});

  function displayWeatherDetails(response) {
    setReply(true);
    setCityInput(`${city}`);
    setWeatherDetails({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "17ad6e67aa629189f73b053634668b20";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherDetails);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <button type="Submit">Search </button>
    </form>
  );

  if (reply) {
    return (
      <div>
        {form}
        <h1>{cityInput}</h1>
        <ul>
          <h2>{weatherDetails.description}</h2>
          <li>Temperature: {Math.round(weatherDetails.temperature)}°C</li>
          <li>Humidity: {weatherDetails.humidity}%</li>
          <li>Feels like: {Math.round(weatherDetails.feels_like)}°C</li>
          <li>Wind: {weatherDetails.wind} km/h</li>

          <li>
            <img src={weatherDetails.icon} alt="#" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
    
  }
}
