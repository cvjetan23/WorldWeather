import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const [location, setLocation] = useState("Belgrade");
  const { weatherData, loading, error } = useWeather(location);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter city"
        />
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && (
          <div>
            <h2>
              {weatherData.location.name}, {weatherData.location.country}
            </h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt="Weather icon" />
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
