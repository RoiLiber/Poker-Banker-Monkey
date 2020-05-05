import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from './components/Home';
import GamePage from "./components/GamePage/GamePage";
import { setGameData } from "./actions/mainActions";
import './App.scss';

export default function App() {
    const dispatch = useDispatch();
    const gameDataFetch = localStorage.getItem('pokerGameData');
    const gameDataFetched = JSON.parse(gameDataFetch);

    useEffect(() => {
        if (gameDataFetched) {
            dispatch(setGameData(gameDataFetched));
        }
    }, []);
    const gameData = useSelector(state => state.mainReducer.gameData);

    return (
        <div className="App">
            <Header className="App-header"/>
            <Fragment>
                {gameData === null
                ?   <Home/>
                :   <GamePage gameData={gameData}/>}
            </Fragment>
        </div>
    );
}
