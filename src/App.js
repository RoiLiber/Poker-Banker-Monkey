import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import NewGamePage from './containers/NewGamePage';
import GamePage from "./containers/GamePage/GamePage";
import { setGameData } from "./actions/mainActions";
import Profile from "./containers/Profile";
import { ROUTES } from './consts';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

export default function App() {
    const dispatch = useDispatch();
    const gameDataFetch = localStorage.getItem('pokerGameData');
    const gameDataFetched = JSON.parse(gameDataFetch);
    const gameData = useSelector(state => state.mainReducer.gameData);

    console.log('me again')

    useEffect(() => {
        if (gameDataFetched) {
            dispatch(setGameData(gameDataFetched));
        }
    }, []);

    return (
        <Router>
        <div className="App">
            <Header className="App-header" gameData={gameDataFetched}/>
            <Switch>
                <Route exect path={ROUTES.profile} component={Profile} />
                <Route exect path={ROUTES.liveGame} component={() => (gameData !== null || gameDataFetched !== null) ? <GamePage gameData={gameDataFetched}/> : <Redirect to={ROUTES.newGame}/>}/>
                <Route exect path={ROUTES.newGame} component={NewGamePage}/>
                <Route exect path="/" render={() => gameDataFetched !== null ? <Redirect to={ROUTES.liveGame}/> : <Redirect to={ROUTES.newGame}/>}/>
            </Switch>
        </div>
        </Router>
    );
}
