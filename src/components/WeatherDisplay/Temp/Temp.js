import { React } from 'react';
import './Temp.css';

function Temp(props) {
    let { temp, feels } = props;
    const { units, convertFtoC, changeUnitsToC, changeUnitsToF } = props;

    if (units === 'c') {
        temp = convertFtoC(temp);
        feels = convertFtoC(feels);
    }

    const buttonText = units === 'f' ? 'Change to ºc' : 'Change to ºf';
    const buttonAction = units === 'f' ? changeUnitsToC : changeUnitsToF;

    return (
        <div className="Temp">
            <div className="Temp-container">
                <p className="Temp-current">{Math.round(temp)}º {units}</p>
                <p className="Temp-feels">feels like {Math.round(feels)}º {units}</p>
            </div>
            <button className="Temp-change-units" onClick={buttonAction}>{buttonText}</button>
        </div>
    )
}

export default Temp;