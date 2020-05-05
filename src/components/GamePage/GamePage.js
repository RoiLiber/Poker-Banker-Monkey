import React from 'react';
import { Fade } from 'react-reveal';
import { useSelector, useDispatch } from "react-redux";
import Summary from "../Summary";
import PlayersUpdate from '../PlayersUpdate';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { goToSummaryPage } from '../../actions/mainActions';
import './style.scss';

export default function Home(props) {
    const { gameData } = props;
    const dispatch = useDispatch();
    const { playersStatusList } = gameData;
    const summaryPage = useSelector(state => state.mainReducer.summaryPage);
    const gameOver = Boolean(playersStatusList.find(player => { return player.status === 'ACTIVE' }));

    return (
        <div className={'game_page_wrapper'}>
            <div className={'game_page_nav'}>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button
                        className={`${!summaryPage ? 'selected' : 'not_selected'}`}
                        onClick={() => dispatch(goToSummaryPage(false))}
                    >
                        summary
                    </Button>
                    <Button
                        className={`${!gameOver ? 'disabled' : summaryPage ? 'selected' : 'not_selected'}`}
                        onClick={() => dispatch(goToSummaryPage(true))}
                        disabled={!gameOver}
                    >
                        players update
                    </Button>
                </ButtonGroup>
            </div>
            {summaryPage
                ? <PlayersUpdate gameData={gameData}/>
                : <Fade bottom><Summary gameData={gameData}/></Fade>
            }
        </div>
    )
}
