import Clock from "./Components/Clock";
import Card from "./Components/Cards"
import React, { useState } from "react";
import { toTitleCase, dateBuilder } from './Utils/Converters.js';
import WebFont from 'webfontloader';


const api = {
  key: "af103c190cd36ff3f3fb1e0c135a2ee1",
  base: "https://api.openweathermap.org/data/2.5/"
}

WebFont.load({
  google: {
    families: ['Varela Round', 'Lato']
  }
});

function App() {
  const [query, setQuery] = useState('');
  const [weatherCurrent, setWeatherCurrent] = useState({});
  const [weatherDaily, setWeatherDaily] = useState({});

  const search = evt => {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeatherCurrent(result);
        if (result.cod === 200){
          let notify = document.getElementById("err");
          notify.style.display = "none";
          fetch(`${api.base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&units=imperial&appid=${api.key}`)
            .then(res2 => res2.json())
            .then(result2 => {
              setWeatherDaily(result2);
              setQuery('');
            })
        } else {
          let notify = document.getElementById("err");
          notify.innerHTML = "Please enter a valid city name";
          notify.style.display = "block";
        }
      });
  }

  return (
    <div className={(typeof weatherCurrent.main != "undefined") ? `App ${weatherCurrent.weather[0].main}` : 'App'}>
      <main>
      <center><div id="err"></div></center>
        <div className="current">
          <center><Clock /></center>
          <div className="date">
            <center>
              {dateBuilder(new Date())}
            </center>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group">
            <input role="search"
              type="search"
              className="form-control"
              placeholder="Search"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={(evt) => { if (evt.key === "Enter") { search() } }}
              aria-label="Search"
              aria-describedby="search-addon" />
            <button type="button" className="btn" onClick={search}>Search</button>
          </div>
        </div>
        {(typeof weatherCurrent.main != "undefined") ? (
          <div>
            <div className='current'>
              <div className='location'>
                <center>
                  {weatherCurrent.name}, {weatherCurrent.sys.country}
                </center>
              </div>
              <div className='current-temp'>
                <center>{Math.round(weatherCurrent.main.temp)}&#176;F</center>
              </div>
              <div className='current-description'>
                <center>{toTitleCase(weatherCurrent.weather[0].description)}</center>
                <div className='icon'>
                  <center><img src={`http://openweathermap.org/img/w/${weatherCurrent.weather[0].icon}.png`} alt="" /></center>
                </div>
              </div>
              <center>
                <div className="current-box">
                  <div id="conditions-info">Current Conditions</div>
                  <div className="current-info">
                    <div className="feels">
                      <span id="current-conditions">
                        {Math.round(weatherCurrent.main.feels_like)}&#176;F
                      </span>
                      <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                      <span id="current-conditions">
                        {Math.round(weatherCurrent.main.humidity)}%
                      </span>
                      <p>Humidity</p>
                    </div>
                    <div className="wind">
                      <span id="current-conditions">
                        {Math.round(weatherCurrent.wind.speed)} mph
                      </span>
                      <p>Wind</p>
                    </div>
                  </div>
                </div>
              </center>
              <div>
              </div>
            </div>
            <div id="conditions-info">
              <center><span id="xl-font">5 Day Forecast</span></center>
            </div>

          </div>
        ) : null}
      </main>
      {(typeof weatherCurrent.main != "undefined") ? (
        <Card weatherCurrent={weatherCurrent} weatherDaily={weatherDaily} />
      ) : null}
    </div>

  );

}


export default App;

