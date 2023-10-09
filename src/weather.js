import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const key = "03e65095fab3164d4c532d20cea11db2";

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherData();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="todo-input"
          type="text"
          value={city}
          onChange={handleCityChange}
        />
        <button className="todo-button" type="submit">
          Search
        </button>
      </form>
      {weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>Country -- {weather.sys.country}</p>
          <p>Wind Speed -- {weather.wind.speed} m/s</p>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
