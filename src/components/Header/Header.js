import React, {useState} from 'react';
import monkeyLogo from '../../assets/icon/gold monkey.png';
import logoMonkey from '../../assets/icon/gold monkey 2.png';
import Button from '@material-ui/core/Button';
import { Slide, Fade } from "react-reveal";
import './style.scss';
import { setNewGame, goToSummaryPage } from "../../actions/mainActions";
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {ROUTES} from "../../consts";
import {compose} from "redux";

function Header(props) {
    const { gameData } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();

    function newGame() {
        setIsMenuOpen(false);
        dispatch(setNewGame())
    }

    function summaryPage(bool) {
        setIsMenuOpen(false);
        dispatch(goToSummaryPage(bool))
    }

    return (
        <div className={'header'}>
            <img alt={'monkey logo'} src={monkeyLogo} className={'monkey_logo'}/>
            <span>Poker Monkeys</span>
            <img alt={'monkey logo'} src={logoMonkey}/>
            <Slide left duration={1500}>
                {gameData !== null && <div className={'live_game_nav'}>
                    <div className={'game_nav'}>
                        <Link to={ROUTES.liveGame}>
                            <Button onClick={() => summaryPage(false)}>Manage</Button>
                        </Link>
                        <Link to={ROUTES.liveGame}>
                            <Button onClick={() => summaryPage(true)}>summary</Button>
                        </Link>
                    </div>
                    <Link to={ROUTES.liveGame}>
                        <span onClick={() => summaryPage(true)}>Live Game</span>
                    </Link>
                </div>}
            </Slide>
            <Fade top>
                {isMenuOpen && <div className={'game_menu'}>
                    {isMenuOpen && <i
                        className={`fas fa-chevron-up`}
                        onClick={() => setIsMenuOpen(false)}
                    />}
                    <Link to={ROUTES.profile}>
                        <Button onClick={() => setIsMenuOpen(false)}>Profile</Button>
                    </Link>
                    <Link to={ROUTES.newGame}>
                        <Button onClick={() => newGame()}>New Game</Button>
                    </Link>
                </div>}
            </Fade>
            {!isMenuOpen && <i
                className={`fas fa-chevron-down`}
                onClick={() => setIsMenuOpen(true)}
            />}
        </div>
    )
}

export default compose(withRouter)(Header)
