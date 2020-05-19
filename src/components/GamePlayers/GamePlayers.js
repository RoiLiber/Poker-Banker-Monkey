import React, { useState, Fragment } from 'react';
import { compose } from 'redux';
import { Fade } from 'react-reveal';
import { useDispatch } from "react-redux";
import MainButton from "../UI/Buttons/MainButton";
import Input from '../UI/Input';
import { setGameData } from "../../actions/mainActions";
import './style.scss';
import GameData from "../GameData";
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../consts';

function GamePlayers(props) {
    const { ratioData } = props;
    const dispatch = useDispatch();
    const [playersList, setPlayersList] = useState([]);
    const [player, setPlayer] = useState('');

    function handleChange(e) {
        const { value } = e.target;

        setPlayer(value)
    }

    function addPlayer() {
        playersList.push(player);
        setPlayer('')
    }

    function saveGameData() {
        const gameRatio = ratioData.gameRatio;
        const gameBuyInAmount = ratioData.gameBuyInAmount;
        const gameChipsAmount = ratioData.gameChipsAmount;

        const playersStatusList = playersList.map(name => {
            return {
                name,
                playerBuyInAmount: gameBuyInAmount,
                playerChipsAmount: gameChipsAmount,
                status: 'ACTIVE'
            }
        });
        const dataConfig = {
            playersStatusList,
            gameRatio,
            gameBuyInAmount,
            gameChipsAmount
        };
        dispatch(setGameData(dataConfig))
    }

    return (
        <div className={'game_players_wrapper'}>
            <GameData ratioData={ratioData}/>
            <p>Set the Players Names</p>
            {playersList.length > 0 && <Fragment>
                <Fade left><span>Players list</span></Fade>
                <div className={'players_list'}>
                    {playersList.map((name, index) => {
                        return <Fade key={index}>
                            <div className={'player_name'}>
                                <span>{index + 1}.</span>
                                <i className="fas fa-user"/>
                                <span>{name}</span>
                            </div>
                        </Fade>
                    })}
                </div>
            </Fragment>}
            <div className={'add_player'}>
                <Input
                    type={'text'}
                    placeholder={'Add Player'}
                    name={'player'}
                    value={player}
                    icon={<i className="fas fa-user"/>}
                    onChange={handleChange}
                />
                {player && <i className="far fa-plus-square" onClick={() => addPlayer()}/>}
            </div>

            {playersList.length > 1 && <Link to={ROUTES.liveGame}>
                <Fade><MainButton name="All In" onClick={() => saveGameData()}/></Fade>
            </Link>}
        </div>
    )
}

export default compose(withRouter)(GamePlayers)
