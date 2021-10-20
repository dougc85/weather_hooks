import { React } from 'react';
import './Header.css';
import cloudyImg from '../../images/cloudy.png';
import Searchbox from '../Searchbox/Searchbox';

function Header(props) {

    const { history, searchbar, setSearch, setLoading, getData } = props;

    return (
        <header className="Header">
            <div className="Header-titlebox" onClick={() => { history.push(`/`) }}>
                <h1 className="Header-title">International Weather Information</h1>
                <img className="Header-cloudyImg" src={cloudyImg} alt="icon" />
            </div>
            {(searchbar === 'true') && (
                <form autoComplete='off'>
                    <Searchbox little='true' history={history} setSearch={setSearch} setLoading={setLoading} getData={getData} />
                </form>
            )}
        </header>
    )
}

export default Header;