import { React, Component } from 'react';
import './MainPage.css';
import Header from '../Header/Header';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

class MainPage extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            userSearch: '',
            weatherData: {},
            locData: {},
            currentPic: '',
        }

        this.countryCodes = {
            "afghanistan": "af", "aland+islands": "ax", "albania": "al", "algeria": "dz", "american+samoa": "as", "andorra": "ad", "angola": "ao", "anguilla": "ai", "antarctica": "aq", "antigua+and+barbuda": "ag", "argentina": "ar", "armenia": "am", "aruba": "aw", "australia": "au", "austria": "at", "azerbaijan": "az", "bahamas": "bs", "bahrain": "bh", "bangladesh": "bd", "barbados": "bb", "belarus": "by", "belgium": "be", "belize": "bz", "benin": "bj", "bermuda": "bm", "bhutan": "bt", "bolivia": "bo", "bosnia+and+herzegovina": "ba", "botswana": "bw", "bouvet+island": "bv", "brazil": "br", "british+indian+ocean+territory": "io", "brunei+darussalam": "bn", "bulgaria": "bg", "burkina+faso": "bf", "burundi": "bi", "cambodia": "kh", "cameroon": "cm", "canada": "ca", "cape+verde": "cv", "cayman+islands": "ky", "central+african+republic": "cf", "chad": "td", "chile": "cl", "china": "cn", "christmas+island": "cx", "cocos+(keeling)+islands": "cc", "colombia": "co", "comoros": "km", "congo": "cg", "congo+democratic+republic": "cd", "cook+islands": "ck", "costa+rica": "cr", "cote+divoire": "ci", "croatia": "hr", "cuba": "cu", "cyprus": "cy", "czech+republic": "cz", "denmark": "dk", "djibouti": "dj", "dominica": "dm", "dominican+republic": "do", "ecuador": "ec", "egypt": "eg", "el+salvador": "sv", "equatorial+guinea": "gq", "eritrea": "er", "estonia": "ee", "ethiopia": "et", "falkland+islands+(malvinas)": "fk", "faroe+islands": "fo", "fiji": "fj", "finland": "fi", "france": "fr", "french+guiana": "gf", "french+polynesia": "pf", "french+southern+territories": "tf", "gabon": "ga", "gambia": "gm", "georgia": "ge", "germany": "de", "ghana": "gh", "gibraltar": "gi", "greece": "gr", "greenland": "gl", "grenada": "gd", "guadeloupe": "gp", "guam": "gu", "guatemala": "gt", "guernsey": "gg", "guinea": "gn", "guinea-bissau": "gw", "guyana": "gy", "haiti": "ht", "heard+island+and+mcdonald+islands": "hm", "holy+see+(vatican+city+state)": "va", "honduras": "hn", "hong+kong": "hk", "hungary": "hu", "iceland": "is", "india": "in", "indonesia": "id", "iran+islamic+republic+of": "ir", "iraq": "iq", "ireland": "ie", "isle+of+man": "im", "israel": "il", "italy": "it", "jamaica": "jm", "japan": "jp", "jersey": "je", "jordan": "jo", "kazakhstan": "kz", "kenya": "ke", "kiribati": "ki", "korea": "kr", "north+korea": "kp", "kuwait": "kw", "kyrgyzstan": "kg", "lao+peoples+democratic+republic": "la", "latvia": "lv", "lebanon": "lb", "lesotho": "ls", "liberia": "lr", "libyan+arab+jamahiriya": "ly", "liechtenstein": "li", "lithuania": "lt", "luxembourg": "lu", "macao": "mo", "macedonia": "mk", "madagascar": "mg", "malawi": "mw", "malaysia": "my", "maldives": "mv", "mali": "ml", "malta": "mt", "marshall+islands": "mh", "martinique": "mq", "mauritania": "mr", "mauritius": "mu", "mayotte": "yt", "mexico": "mx", "micronesia+federated+states+of": "fm", "moldova": "md", "monaco": "mc", "mongolia": "mn", "montenegro": "me", "montserrat": "ms", "morocco": "ma", "mozambique": "mz", "myanmar": "mm", "namibia": "na", "nauru": "nr", "nepal": "np", "netherlands": "nl", "netherlands+antilles": "an", "new+caledonia": "nc", "new+zealand": "nz", "nicaragua": "ni", "niger": "ne", "nigeria": "ng", "niue": "nu", "norfolk+island": "nf", "northern+mariana+islands": "mp", "norway": "no", "oman": "om", "pakistan": "pk", "palau": "pw", "palestinian+territory+occupied": "ps", "panama": "pa", "papua+new+guinea": "pg", "paraguay": "py", "peru": "pe", "philippines": "ph", "pitcairn": "pn", "poland": "pl", "portugal": "pt", "puerto+rico": "pr", "qatar": "qa", "reunion": "re", "romania": "ro", "russian+federation": "ru", "rwanda": "rw", "saint+barthelemy": "bl", "saint+helena": "sh", "saint+kitts+and+nevis": "kn", "saint+lucia": "lc", "saint+martin": "mf", "saint+pierre+and+miquelon": "pm", "saint+vincent+and+grenadines": "vc", "samoa": "ws", "san+marino": "sm", "sao+tome+and+principe": "st", "saudi+arabia": "sa", "senegal": "sn", "serbia": "rs", "seychelles": "sc", "sierra+leone": "sl", "singapore": "sg", "slovakia": "sk", "slovenia": "si", "solomon+islands": "sb", "somalia": "so", "south+africa": "za", "south+georgia+and+sandwich+isl": "gs", "spain": "es", "sri+lanka": "lk", "sudan": "sd", "suriname": "sr", "svalbard+and+jan+mayen": "sj", "swaziland": "sz", "sweden": "se", "switzerland": "ch", "syrian+arab+republic": "sy", "taiwan": "tw", "tajikistan": "tj", "tanzania": "tz", "thailand": "th", "timor-leste": "tl", "togo": "tg", "tokelau": "tk", "tonga": "to", "trinidad+and+tobago": "tt", "tunisia": "tn", "turkey": "tr", "turkmenistan": "tm", "turks+and+caicos+islands": "tc", "tuvalu": "tv", "uganda": "ug", "ukraine": "ua", "united+arab+emirates": "ae", "united+kingdom": "gb", "united+states": "us", "united+states+outlying+islands": "um", "uruguay": "uy", "uzbekistan": "uz", "vanuatu": "vu", "venezuela": "ve", "vietnam": "vn", "virgin+islands+british": "vg", "virgin+islands+us": "vi", "wallis+and+futuna": "wf", "western+sahara": "eh", "yemen": "ye", "zambia": "zm", "zimbabwe": "zw"
        };
        this.accessArr = ["2", "9", "a", "7", "f", "f", "3", "b", "0", "8", "6", "d", "7", "2", "7", "e", "c", "d", "f", "0", "5", "a", "a", "1", "e", "3", "2", "7", "f", "4", "f", "6"];
        this.access = this.accessArr.join('');
        this.code = '604947119577549115091x122721';
        this.geoArray = ["6", "0", "4", "9", "4", "7", "1", "1", "9", "5", "7", "7", "5", "4", "9", "1", "1", "5", "0", "9", "1", "x", "1", "2", "2", "7", "2", "1"];
        this.geo = this.geoArray.join('');



        this.getData = this.getData.bind(this);
        this.setLoading = this.setLoading.bind(this);
    }

    async componentDidMount() {
        this._isMounted = true;

        this.getData(this.props.match.params.terms)
    }

    async componentDidUpdate() {
        window.onpopstate = e => {
            if (this._isMounted) {
                this.setState({
                    loading: true,
                })
            }
            this.getData(this.props.match.params.terms)
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async getData(searchedTerms) {
        try {
            const modifiedTerms = this.cleanupSearchTerms(searchedTerms);
            let data;

            if (Number.isInteger(parseInt(modifiedTerms.charAt(0)))) {
                const zip = modifiedTerms.slice(0, 5);
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${this.access}`);
                data = await response.json();
            } else {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${modifiedTerms}&appid=${this.access}`);
                data = await response.json();
            }

            const lat = data.coord.lat;
            const lon = data.coord.lon;
            const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&&appid=${this.access}`);
            const weatherData = await response2.json();
            const response3 = await fetch(`https://geocode.xyz/?locate=${lat},${lon}&json=1&auth=${this.geo}`);
            const locData = await response3.json();
            if (this._isMounted) {
                this.setState({
                    loading: false,
                    error: false,
                    weatherData: weatherData,
                    locData: locData,
                    currentPic: `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`,
                })
            }

        }
        catch (err) {
            if (this._isMounted) {
                this.setState({
                    error: true,
                    loading: false,
                });
            }

        }
    }


    removeCommasandSpaces(terms) {
        let result = "";
        let lastCharSpace = false;
        let lastCharComma = false;

        for (const char of terms) {
            switch (char) {
                case ',':
                    if (!result) {
                        break;
                    }
                    if (lastCharSpace) {
                        result = result.slice(0, -1);
                    }
                    if (!lastCharComma) {
                        lastCharComma = true;
                        lastCharSpace = false;
                        result = result.concat(char);
                    }
                    break;

                case '_':
                    if (lastCharComma) {
                        break;
                    }
                    if (lastCharSpace) {
                        break;
                    }
                    if (!result) {
                        break;
                    }

                    lastCharSpace = true;
                    lastCharComma = false;
                    result = result.concat('+');
                    break;

                default:
                    lastCharComma = false;
                    lastCharSpace = false;
                    result = result.concat(char);
            }
        }
        while (result.charAt(result.length - 1) === '+' || result.charAt(result.length - 1) === ',') {
            result = result.slice(0, -1);
        }
        return result.toLowerCase();
    }

    cleanupSearchTerms(terms) {

        const markRemoved = terms.charAt(terms.length - 1) === '?' ? terms.slice(0, terms.length - 1) : terms;
        const termsArray = this.removeCommasandSpaces(markRemoved).split(',', 2);

        if (termsArray.length === 1) {
            return termsArray[0];
        }

        if (termsArray[1].length === 2) {
            return termsArray[0].concat(`,${termsArray[1]},us`);
        }
        return termsArray[0].concat(`,${this.countryCodes[termsArray[1]]}`);
    }

    makeCountryList() {
        const ulArray = [];
        for (const country in this.countryCodes) {
            ulArray.push(country);
        }
        return ulArray;
    }

    setLoading() {
        if (this._isMounted) {
            this.setState({
                loading: true,
            })
        }
    }

    render() {

        let mainContent;
        if (this.state.loading) {
            mainContent = (<LoadingScreen />);
        } else if (this.state.error) {
            mainContent = (<ErrorScreen countries={this.makeCountryList()} userSearch={this.props.userSearch} setSearch={this.props.setSearch} urlSearch={this.props.match.params.terms} />);
        } else {
            mainContent = (<WeatherDisplay weatherData={this.state.weatherData} locData={this.state.locData} currentPic={this.state.currentPic} />);
        };

        return (
            <div className="MainPage">
                <Header searchbar='true' history={this.props.history} setSearch={this.props.setSearch} setLoading={this.setLoading} getData={this.getData} />
                {mainContent}
            </div>
        )
    }
}

export default MainPage;