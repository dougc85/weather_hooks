import { React } from 'react';
import './LoadingScreen.css';
import sun from '../../images/sun.png';

function LoadingScreen() {
    return (
        <div className="LoadingScreen">
            <h2 className="LoadingScreen-heading">Loading</h2>
            <img className="LoadingScreen-sun" src={sun} alt='loading' />
        </div>
    )
}

export default LoadingScreen;