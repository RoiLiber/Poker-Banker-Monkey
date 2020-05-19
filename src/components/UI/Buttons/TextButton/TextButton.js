import React from 'react';
import Button from "@material-ui/core/Button";
import './style.scss';

export default function InputWithIcon(props) {
    const { onClick, name } = props;

    return (
        <div className={'text_button_wrapper'}>
            <Button onClick={() => onClick()}>{name}</Button>
        </div>
    )
}
