import React from 'react';
import monkeyLogo from '../../assets/icon/gold monkey.png';
import logoMonkey from '../../assets/icon/gold monkey 2.png';
import './style.scss';

export default function Header() {
    return (
        <div className={'header'}>
            <img alt={'monkey logo'} src={monkeyLogo} className={'monkey_logo'}/>
            <span>Poker Banker Monkey</span>
            <img alt={'monkey logo'} src={logoMonkey}/>
        </div>
    )
}
