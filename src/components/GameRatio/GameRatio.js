import React, { useEffect, useState } from 'react';
import MainButton from "../UI/Buttons/MainButton";
import chipIcon from '../../assets/icon/chip12.png';
import Input from '../UI/Input';
import Card from "../Card";
import './style.scss';

export default function GameRatio(props) {
    const { saveGameRatio } = props;
    const [radio, setRadio] = useState('amount');
    const [buyInAmount, setBuyInAmount] = useState('');
    const [chipsAmount, setChipsAmount] = useState('');
    const [ratio, setRatio] = useState('');
    const [ShowRatioSetButton, setShowRatioButton] = useState(false);

    function toggleRadio(type) {
        setRadio(type);
        setBuyInAmount('');
        setChipsAmount('');
        setRatio('');
        setShowRatioButton(false)
    }

    useEffect(() => {
        if ((buyInAmount && chipsAmount) || (buyInAmount && ratio)) {
            setShowRatioButton(true)
        }
    }, [buyInAmount, chipsAmount, ratio]);

    function setGameRatio() {
        const gameRatio = radio === 'amount' ? chipsAmount / buyInAmount : ratio;
        const gameChipsAmount = radio === 'amount' ? chipsAmount : buyInAmount * ratio;
        const dataConfig = {
            gameRatio,
            gameChipsAmount,
            gameBuyInAmount: buyInAmount
        };

        saveGameRatio(dataConfig)
    }

    function handleChange(e) {
        const { name, value } = e.target;

        if (!value) {
            setShowRatioButton(false)
        }

        switch (name) {
            case 'setBuyInAmount': {
                setBuyInAmount(value);
                break
            }
            case 'setChipsAmount': {
                setChipsAmount(value);
                break
            }
            case 'setRatio': {
                setRatio(value);
                break
            }
            default: {
                break
            }
        }
    }

    return (
        <div className={'game_ratio_wrapper'}>
            <p>Set the player buy-in by the chips ratio</p>
            <p>or by the chips amount</p>
            <div className={'ratio_cards_wrapper'}>
                <Card
                    name={'ace'}
                    onClick={radio === 'amount' ? () => {} : toggleRadio}
                    type={'amount'}
                    selected={radio === 'amount'}
                    children={
                        <div className={'card_children'}>
                            <span>Chips Amount</span>
                        </div>
                    }
                    cardInputs={
                        <div className={'card_inputs'}>
                            <Input
                                type={'number'}
                                placeholder={'set amount'}
                                name={'setBuyInAmount'}
                                value={buyInAmount}
                                line={'buy-in amount'}
                                icon={<i className="fas fa-dollar-sign"/>}
                                onChange={handleChange}
                            />
                            <Input
                                type={'number'}
                                placeholder={'set amount'}
                                name={'setChipsAmount'}
                                value={chipsAmount}
                                line={'chip amount'}
                                icon={<img alt={'chip icon'} style={{ width: '20px' }} src={chipIcon}/>}
                                onChange={handleChange}
                            />
                        </div>
                    }
                />
                {!ShowRatioSetButton && <p>OR</p>}
                {ShowRatioSetButton && <MainButton name="All In" onClick={() => setGameRatio()}/>}
                <Card
                    name={'king'}
                    onClick={radio === 'ratio' ? () => {} : toggleRadio}
                    type={'ratio'}
                    selected={radio === 'ratio'}
                    children={
                        <div className={'card_children'}>
                            <span>Ratio</span>
                        </div>
                    }
                    cardInputs={
                        <div className={'card_inputs'}>
                            <Input
                                type={'number'}
                                placeholder={'set amount'}
                                name={'setBuyInAmount'}
                                value={buyInAmount}
                                line={'buy-in amount'}
                                icon={<i className="fas fa-dollar-sign"/>}
                                onChange={handleChange}
                            />
                            <Input
                                type={'number'}
                                placeholder={'set chips ratio'}
                                name={'setRatio'}
                                value={ratio}
                                line={`$1 = "chips"`}
                                icon={<img alt={'chip icon'} style={{ width: '20px' }} src={chipIcon}/>}
                                onChange={handleChange}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    )
}
