import React from "react";
import {toTitleCase} from '../Utils/Converters.js';

const TextForCards = (props) => {
    const { daily } = props
    return (
        <div>
            <div className="forecast-description">
                <p>{toTitleCase(daily.weather[0].description)}</p>
            </div>
            <div className="five-day-forecast">
                <div>
                    <center>
                        <span id="daily-conditions-info">{Math.round(daily.temp.max)}&#176;F</span>
                        <div>High</div>
                    </center>
                </div>
                <div>
                    <center>
                    <span id="daily-conditions-info">{Math.round(daily.temp.min)}&#176;F</span>
                        <div>Low</div>
                    </center>
                </div>
                <div>
                    <center>
                    <span id="daily-conditions-info">{Math.round(daily.humidity)}%</span>
                        <div>Humidity</div>
                    </center>
                </div>
                <div>
                    <center>
                    <span id="daily-conditions-info">{Math.round(daily.wind_speed)} mph</span>
                        <div>Wind</div>
                    </center>
                </div>
            </div>
        </div>

    )
}

export default TextForCards;