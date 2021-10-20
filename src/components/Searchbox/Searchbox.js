import { React, useState } from 'react';
import './Searchbox.css'

function Searchbox(props) {

    const [searchTerms, setSearchTerms] = useState('');
    const { setSearch, little, setLoading, getData, history } = props;

    const handleChange = (event) => {
        setSearchTerms(event.target.value);
    }

    const cleanUpSearchTerms = (terms) => {
        return terms.replaceAll(' ', '_').toLowerCase();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(searchTerms);

        let modifiedSearch = cleanUpSearchTerms(searchTerms);

        if (little === 'true') {
            setLoading();
            getData(modifiedSearch);
        }

        history.push(`/search/${modifiedSearch}`);
    }

    return (
        <div className={little === 'true' ? "Searchbox-little" : "Searchbox"}>
            <input className={little === 'true' ? "Searchbox-input-little" : "Searchbox-input"} value={searchTerms} id="weather-search" type="text" placeholder="How is the weather in..." onChange={handleChange}></input>
            <button className={little === 'true' ? "Searchbox-submit-little" : "Searchbox-submit"} onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default Searchbox;