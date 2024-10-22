/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const [location, setLocation] = useState("Belgrade");
  const { weatherData, loading, error } = useWeather(location);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Weather App</h1>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter city"
          className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>
      <main className="text-center bg-white p-6 rounded-lg shadow-lg">
        {loading && <p className="text-gray-700">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {weatherData && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              {weatherData.location.name}, {weatherData.location.country}
            </h2>
            <p className="text-lg text-gray-600">
              Temperature: {weatherData.current.temp_c}°C
            </p>
            <p className="text-lg text-gray-600">
              Condition: {weatherData.current.condition.text}
            </p>
            <img
              src={weatherData.current.condition.icon}
              alt="Weather icon"
              className="mx-auto my-4"
            />
            <p className="text-lg text-gray-600">
              Humidity: {weatherData.current.humidity}%
            </p>
            <p className="text-lg text-gray-600">
              Wind Speed: {weatherData.current.wind_kph} kph
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
