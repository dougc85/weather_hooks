import { React, useState } from 'react';
import './WeatherDisplay.css';
import City from './City/City';
import DateInfo from './DateInfo/DateInfo';
import Temp from './Temp/Temp';
import Conditions from './Conditions/Conditions';
import Forecast from './Forecast/Forecast';

function WeatherDisplay(props) {

    const { weatherData, locData, currentPic } = props;
    const { current, daily, timezone_offset } = weatherData;

    let dt = (current.dt + timezone_offset) * 1000;
    let day = (new Date(dt)).getUTCDay();
    const [units, setUnits] = useState('f');

    const changeUnitsToC = () => {
        setUnits('c');
    }

    const changeUnitsToF = () => {
        setUnits('f');
    }

    const convertFtoC = (temp) => {
        return Math.round((temp - 32) / 1.8000);
    }

    return (
        <div className="WeatherDisplay">
            <City locData={locData} />
            <div className="WeatherDisplay-today">
                <DateInfo dt={dt} day={day} />
                <Conditions units={units} weather={current.weather[0]} currentPic={currentPic} />
                <Temp units={units} changeUnitsToC={changeUnitsToC} changeUnitsToF={changeUnitsToF} convertFtoC={convertFtoC} temp={current.temp} feels={current.feels_like} />
            </div>
            <Forecast daily={daily} units={units} day={day} convertFtoC={convertFtoC} />
        </div>
    )
}

export default WeatherDisplay;