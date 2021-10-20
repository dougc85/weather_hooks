import { React } from 'react';
import './DateInfo.css';

function DateInfo(props) {

    const { day, dt } = props;

    const getDayOfWeek = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[day];
    }

    const getCurrentTime = () => {
        const date = new Date(dt);
        let hours = date.getUTCHours();
        let minutes = date.getUTCMinutes().toString();
        let ampm = 'am';

        if (minutes.length === 1) {
            minutes = '0'.concat(minutes);
        }

        if (hours === 0) {
            hours = 12;
        } else if (hours === 12) {
            ampm = 'pm';
        } else if (hours > 12) {
            hours -= 12;
            ampm = 'pm';
        }

        return (hours + ':' + minutes + ' ' + ampm);
    }

    return (
        <div className="DateInfo">
            <p className="DateInfo-day">{getDayOfWeek()}</p>
            <p className="DateInfo-time">{getCurrentTime()}</p>
        </div>
    )
}

export default DateInfo;