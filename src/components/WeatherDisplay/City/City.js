import { React } from 'react';
import './City.css';

function City(props) {

    const { city, country, statename } = props.locData;

    const capitalize = (city) => {
        const cityArray = city.split(' ');

        const newCityArray = cityArray.map(word => (
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ))
        return newCityArray.join(' ');
    }

    const generateName = () => {

        let finalLocation = '';

        finalLocation += capitalize(city) + ', '

        if (country === "United States of America") {
            //Add the state
            finalLocation += statename + ', ';
        }

        finalLocation += country;

        return finalLocation;
    }

    return (
        <p className="City">{generateName()}</p>
    )
}

export default City;