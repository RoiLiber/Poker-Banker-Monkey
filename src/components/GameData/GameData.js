import React from 'react';
import './style.scss';

export default function GameData(props) {
    const { ratioData } = props;

    return (
        <div className={'game_data_wrapper'}>
            <p>Game Data</p>
            <span>Game Ratio: $1 = {ratioData.gameRatio} Chips</span>
            <span>Game Buy-In Amount: ${ratioData.gameBuyInAmount}</span>
            <span>Game Chips Amount: {ratioData.gameChipsAmount}</span>
        </div>
    )
}
