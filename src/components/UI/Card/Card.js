import React from 'react';
import king from '../../../assets/img/king.jpg';
import ace from '../../../assets/img/ace.png';
import { Fade } from 'react-reveal';
import './style.scss';

export default function Card(props) {
    const { type, onClick, name, selected, children, cardInputs } = props;

    return (
        <div className={`card_wrapper ${selected && 'selected'}`} onClick={() => onClick(type)}>
            <img src={name === 'ace' ? ace : king}/>
            {children}
            {selected && <Fade deley={1500}>{cardInputs}</Fade>}
        </div>
    )
}
