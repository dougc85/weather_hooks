import { React } from 'react';
import './Forecast.css';
import Day from './Day/Day';

function Forecast(props) {

    const { daily, day, units, convertFtoC } = props;

    const dayArray = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ]

    const sevenDayArray = daily.slice(1, 8);

    return (
        <div className="Forecast">
            <h3 className="Forecast-heading">7 Day Forecast</h3>
            <div className="Forecast-days">
                {sevenDayArray.map((dayData, idx) => {
                    const currentDayId = (day + idx + 1) % 7;
                    const currentDay = dayArray[currentDayId];
                    return (
                        <Day data={dayData} dayOfWeek={currentDay} key={currentDay} units={units} convertFtoC={convertFtoC} />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Forecast;