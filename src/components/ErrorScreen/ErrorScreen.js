import { React } from 'react';
import './ErrorScreen.css';

function ErrorScreen(props) {

    const { userSearch, urlSearch, countries } = props;

    //Defensive - error page works even if user types into URL directly
    const searchTerm = (userSearch === 'tue8fmcn234-7#') ?
        urlSearch :
        userSearch;

    return (
        <div className="ErrorScreen">
            <h2 className="ErrorScreen-heading">
                No results found for '{searchTerm}'
            </h2>
            <p className="ErrorScreen-directions">Double check the following:</p>
            <ul className="ErrorScreen-guidelines">
                <li className="ErrorScreen-guidelines-guideline">US City, State - Abbreviate State Name
                    <span className="ErrorScreen-guidelines-guideline-example">Example: New York, <span className="highlight">NY</span></span>
                </li>
                <li className="ErrorScreen-guidelines-guideline">All words spelled correctly?</li>
                <li className="ErrorScreen-guidelines-guideline">When searching by country, spelling must match one of the following EXACTLY:</li>
            </ul>
            <ul className="ErrorScreen-countries">
                {countries.map(country => {
                    return (<li className="ErrorScreen-countries-country" key={country}>{country.replaceAll('+', '  ')}</li>);
                })}
            </ul>

        </div>
    )
}

export default ErrorScreen;

