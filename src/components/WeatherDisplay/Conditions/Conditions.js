import { React } from 'react';
import './Conditions.css';

function Conditions(props) {
    const { weather, currentPic } = props;
    const { main, description } = weather;
    return (
        <div className="Conditions">
            <p className="Conditions-main">{main}</p>
            <img className="Conditions-icon" src={currentPic} alt={'current weather icon'}></img>
            <p className="Conditions-description">{description}</p>
        </div>
    )
}

export default Conditions;