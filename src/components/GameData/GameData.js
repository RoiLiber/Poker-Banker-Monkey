import React from 'react';
import './style.scss';

export default function GameData(props) {
    const { ratioData } = props;
    const gameDataFetch = localStorage.getItem('pokerGameData');
    const gameDataFetched = JSON.parse(gameDataFetch);

    return (
        <div className={'game_data_wrapper'}>
            <p>Game Data</p>
            <span>Game Ratio: $1 = {gameDataFetched ? gameDataFetched.gameRatio : ratioData.gameRatio} Chips</span>
            <span>Game Buy-In Amount: ${gameDataFetched ? gameDataFetched.gameBuyInAmount : ratioData.gameBuyInAmount}</span>
            <span>Game Chips Amount: {gameDataFetched ? gameDataFetched.gameChipsAmount : ratioData.gameChipsAmount}</span>
        </div>
    )
}
