import React, { useState } from 'react';
import GameRatio from "../../components/GameRatio";
import GamePlayers from "../../components/GamePlayers";
import './style.scss';

export default function NewGamePage() {
    const [ratioData, setRatioData] = useState();

    function saveGameRatio(ratioConfig) {
        setRatioData(ratioConfig)
    }

    return (
        <div className={'new_game_wrapper'}>
            {!ratioData
            ?   <GameRatio saveGameRatio={saveGameRatio}/>
            :   <GamePlayers ratioData={ratioData}/>}
        </div>
    )
}
