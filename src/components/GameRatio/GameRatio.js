import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MainButton from "../UI/MainButton";
import chipIcon from '../../assets/icon/chip12.png';
import Input from '../UI/Input';
import './style.scss';

export default function GameRatio(props) {
    const { saveGameRatio } = props;
    const [radio, setRadio] = useState('amount');
    const [buyInAmount, setBuyInAmount] = useState('');
    const [chipsAmount, setChipsAmount] = useState('');
    const [ratio, setRatio] = useState('');
    const [ShowRatioSetButton, setShowRatioButton] = useState(false);

    function toggleRadio(event) {
        setRadio(event.target.value);
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
            <RadioGroup row className={'radio_head_line'} aria-label="gender" name="gender1" value={radio} onChange={toggleRadio}>
                <FormControlLabel value="amount" control={<Radio checked={radio === 'amount'} />} label="Chips Amount" />
                <FormControlLabel value="ratio" control={<Radio checked={radio === 'ratio'} />} label="Ratio" labelPlacement="end"/>
            </RadioGroup>
            {radio === 'amount'
            ?   <Fade left><div className={'amount_wrapper'}>
                    <Input
                        type={'text'}
                        placeholder={'set buy-in amount'}
                        name={'setBuyInAmount'}
                        value={buyInAmount}
                        line={'buy-in amount'}
                        icon={<i className="fas fa-dollar-sign"/>}
                        onChange={handleChange}
                    />
                    <Input
                        type={'text'}
                        placeholder={'set chips amount'}
                        name={'setChipsAmount'}
                        value={chipsAmount}
                        line={'chip amount'}
                        icon={<img alt={'chip icon'} style={{ width: '20px' }} src={chipIcon}/>}
                        onChange={handleChange}
                    />
                </div></Fade>
            :   <div className={'amount_wrapper'}>
                    <Input
                        type={'text'}
                        placeholder={'set buy-in amount'}
                        name={'setBuyInAmount'}
                        value={buyInAmount}
                        line={'buy-in amount'}
                        icon={<i className="fas fa-dollar-sign"/>}
                        onChange={handleChange}
                    />
                    <Input
                        type={'text'}
                        placeholder={'set the chips ratio'}
                        name={'setRatio'}
                        value={ratio}
                        line={`$1 = "chips"`}
                        icon={<img alt={'chip icon'} style={{ width: '20px' }} src={chipIcon}/>}
                        onChange={handleChange}
                    />
                </div>}
            {ShowRatioSetButton && <Fade>
                <MainButton name="All In" onClick={() => setGameRatio()}/>
            </Fade>}
        </div>
    )
}
