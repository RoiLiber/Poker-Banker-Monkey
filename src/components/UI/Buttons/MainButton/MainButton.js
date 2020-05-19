import React from 'react';
import Button from "@material-ui/core/Button";
import './style.scss';
import { Fade } from "react-reveal";

export default function InputWithIcon(props) {
    const { onClick, name } = props;

    return (
        <div className={'button_wrapper'}>
            <Fade>
                <Button onClick={() => onClick()}>{name}</Button>
            </Fade>
        </div>
    )
}
