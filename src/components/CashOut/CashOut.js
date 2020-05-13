import React, { useState } from 'react';
import Select from "../UI/Select";
import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import Input from "../UI/Input";
import MainButton from "../UI/MainButton";
import  { setGameData, goToSummaryPage } from "../../actions/mainActions";
import chipIcon from "../../assets/icon/chip12.png";
import './style.scss';

export default function CashOut(props) {
    const { gameData } = props;
    const dispatch = useDispatch();
    const { playersStatusList } = gameData;
    const filteredList = playersStatusList.filter(player => { return player.status === 'ACTIVE' });
    const [selectedPlayer, setSelectedPlayer] = useState(filteredList[0].name);
    const [chipAmount, setChipAmount] = useState('');
    const playersList = filteredList.map(player => {
        return player.name
    });

    function cashOutPlayer(e) {
        const { value } = e.target;
        setSelectedPlayer(value)
    }

    function handleChange(e) {
        const { value } = e.target;
        setChipAmount(value)
    }

    function updatePlayer() {
        const newPlayersList = playersStatusList.map(player => {
            if (player.name !== selectedPlayer) {
                return player
            } else {
                return {
                    name: selectedPlayer,
                    playerBuyInAmount: player.playerBuyInAmount,
                    playerChipsAmount: chipAmount,
                    status: 'CASH_OUT'
                }
            }
        });
        const updatedData = {
            ...gameData,
            playersStatusList: newPlayersList
        };
        dispatch(setGameData(updatedData));
        dispatch(goToSummaryPage(false));
    }

    return (
        <div className={'cash_out_wrapper'}>
            <p>Hope you have some Chips to Cash Out</p>
            <span>Select a Player</span>
            <Select
                value={selectedPlayer}
                onChange={cashOutPlayer}
                list={playersList}
            />
            {selectedPlayer && <div className={'player_cash_out'}>
                <p>how many chips {selectedPlayer} have</p>
                <Fade bottom>
                    <Input
                        type={'text'}
                        placeholder={'Chip Amount'}
                        value={chipAmount}
                        icon={<img alt={'chip icon'} style={{ width: '20px' }} src={chipIcon}/>}
                        onChange={handleChange}
                    />
                </Fade>
                <Fade bottom>
                    {chipAmount && <MainButton name={'cash Out'} onClick={() => updatePlayer()}/>}
                </Fade>
            </div>}
        </div>
    );
}
