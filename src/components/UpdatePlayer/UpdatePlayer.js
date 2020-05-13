import React, { useState } from 'react';
import Select from "../UI/Select";
import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import Input from "../UI/Input";
import { toUpper, capitalize } from 'lodash';
import MainButton from "../UI/MainButton";
import  { setGameData, goToSummaryPage } from "../../actions/mainActions";
import './style.scss';

export default function UpdatePlayer(props) {
    const { gameData } = props;
    const dispatch = useDispatch();
    const { playersStatusList } = gameData;
    const [selectedPlayer, setSelectedPlayer] = useState('New Player');
    const [newPlayerName, setNewSelectedPlayerName] = useState('');
    const [buyAmount, setBuyAmount] = useState('');
    const filteredList = playersStatusList.filter(player => { return player.status === 'ACTIVE' });
    const playersList = filteredList.map(player => {
        return player.name
    });

    function selectPlayer(e) {
        const { value } = e.target;

        setSelectedPlayer(value)
    }

    function handleChange(e) {
        const { name, value } = e.target;

        name === 'amount' ? setBuyAmount(value) : setNewSelectedPlayerName(value);
    }

    function updatePlayerBuy() {
        const newPlayer = newPlayerName
            ?   {
                name: newPlayerName,
                playerBuyInAmount: buyAmount,
                playerChipsAmount: (Number(buyAmount) * Number(gameData.gameRatio)),
                status: 'ACTIVE'
            }
            :   null;
        const newPlayersList = playersStatusList.map(player => {
            if (player.name !== selectedPlayer) {
                return player
            } else {
                return {
                    name: selectedPlayer,
                    playerBuyInAmount: Number(player.playerBuyInAmount) + Number(buyAmount),
                    playerChipsAmount: Number(player.playerChipsAmount) + (Number(buyAmount) * Number(gameData.gameRatio)),
                    status: 'ACTIVE'
                }
            }
        });
        const setPlayerList = newPlayer ? [...newPlayersList, newPlayer] : [...newPlayersList];
        const updatedData = {
            ...gameData,
            playersStatusList: setPlayerList
        };

        dispatch(setGameData(updatedData));
        dispatch(goToSummaryPage(false));
    }

    function updateButton() {
        return <MainButton
            name={newPlayerName ? `Welcome ${newPlayerName}` : `${capitalize(selectedPlayer)} is Back`}
            onClick={() => updatePlayerBuy()}
        />
    }

    return (
        <div className={'update_player_wrapper'}>
            <p>Choose a Player to Update or Add one</p>
            <span>Select a Player</span>
            <Select
                name={'update'}
                value={selectedPlayer}
                onChange={selectPlayer}
                list={playersList}
                defaultItem={'New Player'}
            />
            {selectedPlayer && <div className={'player_update'}>
                {selectedPlayer === 'New Player' && <Fade bottom>
                    <p>Set {selectedPlayer} Name</p>
                    <Input
                        type={'text'}
                        name={'new player'}
                        placeholder={'Player Name'}
                        value={newPlayerName}
                        icon={<i className={"fas fa-user"}/>}
                        onChange={handleChange}
                    />
                </Fade>}
                <Fade bottom>
                    <p>Add {capitalize(selectedPlayer)} Buy amount</p>
                    <Input
                        type={'text'}
                        name={'amount'}
                        placeholder={'Buy Amount'}
                        value={buyAmount}
                        icon={<i className={"fas fa-dollar-sign"}/>}
                        onChange={handleChange}
                    />
                </Fade>
                <Fade bottom>
                    {selectedPlayer === 'NEW PLAYER'
                        ? (buyAmount && newPlayerName) && updateButton()
                        : buyAmount && updateButton()}
                </Fade>
            </div>}
        </div>
    );
}
