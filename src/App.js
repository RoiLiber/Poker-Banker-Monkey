import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import NewGamePage from './containers/NewGamePage';
import GamePage from "./containers/GamePage/GamePage";
import { setGameData } from "./actions/mainActions";
import Profile from "./containers/Profile";
import { ROUTES } from './consts';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import backImg from './assets/img/poker-back1.jpg';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

export default function App() {
    const dispatch = useDispatch();
    const gameDataFetch = localStorage.getItem('pokerGameData');
    const gameDataFetched = JSON.parse(gameDataFetch);
    const gameData = useSelector(state => state.mainReducer.gameData);

    useEffect(() => {
        if (gameDataFetched) {
            dispatch(setGameData(gameDataFetched));
        }
    }, []);

    return (
        <Router>
            <ParallaxProvider>
                <div className="App">
                    <Header className="App-header" gameData={gameDataFetched}/>
                    <Parallax className="parallax" y={[-60, 60]} tagOuter="figure">
                        <img src={backImg} alt={'background'}/>
                    </Parallax>
                    <Switch>
                        <Route exect path={ROUTES.profile} component={Profile} />
                        <Route exect path={ROUTES.liveGame} component={() => (gameData !== null || gameDataFetched !== null) ? <GamePage gameData={gameDataFetched}/> : <Redirect to={ROUTES.newGame}/>}/>
                        <Route exect path={ROUTES.newGame} component={NewGamePage}/>
                        <Route exect path="/" render={() => gameDataFetched !== null ? <Redirect to={ROUTES.liveGame}/> : <Redirect to={ROUTES.newGame}/>}/>
                    </Switch>
                </div>
            </ParallaxProvider>
        </Router>
    );
}
