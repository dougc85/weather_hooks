import './App.css';
import { React, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import FrontSearch from "./components/FrontSearch/FrontSearch";
import MainPage from "./components/MainPage/MainPage";

function App(props) {
  const [userSearch, setUserSearch] = useState('');

  const setRootSearchState = (searchTerms) => {
    setUserSearch(searchTerms);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={routeProps => <FrontSearch {...routeProps} setSearch={setRootSearchState} />} />
        <Route exact path="/search" render={routeProps => <FrontSearch {...routeProps} setSearch={setRootSearchState} />} />
        <Route exact path="/search/:terms" render={routeProps => <MainPage {...routeProps} setSearch={setRootSearchState} userSearch={userSearch} />} />
      </Switch>

    </div>
  )
};

export default App;