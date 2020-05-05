import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CashOut from "../CashOut";
import UpdatePlayer from "../UpdatePlayer";
import { Fade } from "react-reveal";
import './style.scss';

export default function PlayersUpdate(props) {
    const { gameData } = props;
    const [cashOut, setCashOut] = useState(false);

    return (
        <div className={'update_players_wrapper'}>
            <div className={'update_players_nav'}>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button
                        className={`${!cashOut ? 'selected' : 'not_selected'}`}
                        onClick={() => setCashOut(false)}
                    >
                        update
                    </Button>
                    <Button
                        className={`${cashOut ? 'selected' : 'not_selected'}`}
                        onClick={() => setCashOut(true)}
                    >
                        cash out
                    </Button>
                </ButtonGroup>
            </div>
            {cashOut
                ?   <Fade bottom><CashOut gameData={gameData}/></Fade>
                :   <Fade bottom><UpdatePlayer gameData={gameData}/></Fade>}
        </div>
    );
}
