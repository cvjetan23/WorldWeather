import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'

// Definicija interfejsa WeatherData
interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}

function App() {
  const [count, setCount] = useState(0)
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [city, setCity] = useState('Belgrade')

  const API_KEY = 'YOUR_API_KEY'

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get<WeatherData>(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: API_KEY,
            q: city,
            aqi: 'no'
          }
        });
        setWeather(response.data)
      } catch (error) {
        console.error('Greška prilikom preuzimanja vremenske prognoze:', error);
      }
    }

    fetchWeather()
  }, [city])

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="weather">
        <h2>Vremenska prognoza za: {city}</h2>
        {weather ? (
          <>
            <p>Temperatura: {weather.current.temp_c}°C</p>
            <p>Opis: {weather.current.condition.text}</p>
          </>
        ) : (
          <p>Učitavanje vremenske prognoze...</p>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
