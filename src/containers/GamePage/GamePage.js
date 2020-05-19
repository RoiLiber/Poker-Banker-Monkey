import React from 'react';
import { Fade } from 'react-reveal';
import { useSelector } from "react-redux";
import Summary from "../../components/Summary";
import ManagePlayers from '../../components/ManagePlayers';
import './style.scss';

export default function Home(props) {
    const { gameData } = props;
    const { playersStatusList } = gameData;
    const summaryPage = useSelector(state => state.mainReducer.summaryPage);
    const gameOver = Boolean(playersStatusList.find(player => { return player.status === 'ACTIVE' }));

    return (
        <div className={'game_page_wrapper'}>
            {summaryPage
                ? <Fade bottom><Summary gameData={gameData}/></Fade>
                : <ManagePlayers gameData={gameData}/>
            }
        </div>
    )
}
