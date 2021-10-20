import { React } from 'react';
import "./FrontSearch.css";
import Searchbox from '../Searchbox/Searchbox'
import Header from '../Header/Header'

function FrontSearch(props) {

    const { setSearch, history } = props;

    return (
        <div className="FrontSearch">
            <Header setSearch={setSearch} />
            <div className='FrontSearch-main'>
                <form autoComplete="off" className="FrontSearch-formbox">
                    <div className="centering-ut">
                        <Searchbox history={history} setSearch={setSearch} />
                        <label className="FrontSearch-directions" htmlFor="weather-search">
                            <p>Please enter one of the following:</p>
                            <ul className="FrontSearch-options">
                                <li className="FrontSearch-options-option">
                                    <span className="FrontSearch-options-option-direction">City</span>
                                    <span className="FrontSearch-options-option-example">Paris</span>
                                </li>
                                <li className="FrontSearch-options-option">
                                    <span className="FrontSearch-options-option-direction">City, Country</span>
                                    <span className="FrontSearch-options-option-example">Beijing, China</span>
                                </li>
                                <li className="FrontSearch-options-option">
                                    <span className="FrontSearch-options-option-direction">City, State<span className="us-only">(US Only)</span></span>
                                    <span className="FrontSearch-options-option-example">Long Beach, CA</span>
                                </li>
                                <li className="FrontSearch-options-option">
                                    <span className="FrontSearch-options-option-direction">5-digit Zip Code<span className="us-only">(US Only)</span></span>
                                    <span className="FrontSearch-options-option-example">20510</span>
                                </li>
                            </ul>
                        </label>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default FrontSearch;