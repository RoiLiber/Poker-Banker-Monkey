import React from 'react';
import './style.scss';

export default function Summary(props) {
    const { gameData } = props;
    const { gameRatio, playersStatusList } = gameData;

    function calcTotalBuyInAmount() {
        let totalBuyInAmount = 0;

        playersStatusList.map(player => {
            return totalBuyInAmount = totalBuyInAmount + Number(player.playerBuyInAmount);
        });
        return totalBuyInAmount
    }
    function calcTotalChipsAmount() {
        let totalChipsAmount = 0;

        playersStatusList.map(player => {
            return totalChipsAmount = totalChipsAmount + Number(player.playerChipsAmount);
        });
        return totalChipsAmount
    }

    function calcTotalCashRegister() {
        const cashOutPlayersList = playersStatusList.filter(player => player.status === 'CASH_OUT');
        const cashOutPlayersWithMoney = cashOutPlayersList.filter(player => player.playerChipsAmount !== '0');
        let totalBuyInAmount = calcTotalBuyInAmount();

        cashOutPlayersWithMoney.map(player => {
            return totalBuyInAmount = totalBuyInAmount - calcPlayerBalance(player.playerBuyInAmount, player.playerChipsAmount)
        });
        return totalBuyInAmount
    }

    function calcPlayerBalance(buyInAmount, ChipsAmount) {
       return ChipsAmount === `0` ? buyInAmount * -1 : ChipsAmount / gameRatio;
    }

    return (
        <div className={'summary_wrapper'}>
            <div className={'table'}>
                <span>Name</span>
                <span>Buy-In Amount</span>
                <span>Chips Amount</span>
                <span>Balance</span>
            </div>
            {playersStatusList.map((player, index) => {
                const name = player.name;
                const playerBuyInAmount = player.playerBuyInAmount;
                const playerChipsAmount = player.playerChipsAmount;
                const status = player.status;
                const isActive = status === 'ACTIVE';
                const balance = isActive ? '---' : calcPlayerBalance(playerBuyInAmount, playerChipsAmount);


                return <div key={index} className={'player_line'}>
                    <span className={`${status === 'CASH_OUT' && 'cash_out'}`}>{name}</span>
                    <span className={`${status === 'CASH_OUT' && 'cash_out'}`}>${playerBuyInAmount}</span>
                    <span className={`${status === 'CASH_OUT' && 'cash_out'}`}>{playerChipsAmount}</span>
                    <span className={`balance ${balance < 0 && 'negative'}`}>{!isActive && '$'}{balance}</span>
                </div>
            })}
            <div className={'table_total'}>
                <span>Total</span>
                <span>${calcTotalBuyInAmount()}</span>
                <span>{calcTotalChipsAmount()}</span>
                <span>${calcTotalCashRegister()}</span>
            </div>
            <p>Game Data</p>
            <span>Game Ratio: $1 = {gameRatio} Chips</span>
            <span>Game Buy-In Amount: ${gameData.gameBuyInAmount}</span>
            <span>Game Chips Amount: {gameData.gameChipsAmount}</span>
        </div>
    );
}
