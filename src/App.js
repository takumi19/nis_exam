import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({})
  // const [location, setLocation] = useState('')

  useEffect(() => {
    console.log('working');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=1dc9873efb539b8e39e2bf584f6f0578`
    axios.get(apiUrl).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="top">
            <p>{data.name}</p>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="desc">
            <p>{data.weather[0].main}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p>{data.wind.speed.toFixed()} м/с</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
