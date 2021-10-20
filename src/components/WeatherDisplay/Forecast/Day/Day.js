import { React } from 'react';
import './Day.css';

function Day(props) {

    const { data, units, convertFtoC, dayOfWeek } = props;
    const { weather, temp } = data;
    let { min, max } = temp;

    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const text = weather[0].main;

    min = (units === 'c') ? convertFtoC(min) : Math.round(min);
    max = (units === 'c') ? convertFtoC(max) : Math.round(max);

    return (
        <div className="Day" key={dayOfWeek} >
            <p className="Day-name">{dayOfWeek}</p>
            <img className="Day-icon" src={icon} alt={text} />
            <p className="Day-temps" >
                <span className="Day-temps-min">{min}º</span>
                <span className="Day-temps-max">{max}º</span>
            </p>
        </div>
    )
}

export default Day;