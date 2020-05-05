import React, { useState } from 'react';
import GameRatio from "../GameRatio";
import GamePlayers from "../GamePlayers";
import './style.scss';

export default function Home() {
    const [ratioData, setRatioData] = useState();

    function saveGameRatio(ratioConfig) {
        setRatioData(ratioConfig)
    }

    return (
        <div className={'home'}>
            {!ratioData
            ?   <GameRatio saveGameRatio={saveGameRatio}/>
            :   <GamePlayers ratioData={ratioData}/>}
        </div>
    )
}
