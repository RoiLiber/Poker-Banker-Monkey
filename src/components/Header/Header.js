import React, {useEffect, useState} from 'react';
import monkeyLogo from '../../assets/icon/gold monkey.png';
import logoMonkey from '../../assets/icon/gold monkey 2.png';
import Button from '@material-ui/core/Button';
import { Slide } from "react-reveal";
import './style.scss';
import { setNewGame, goToSummaryPage } from "../../actions/mainActions";
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ROUTES } from "../../consts";
import { compose } from "redux";

function Header(props) {
    const { gameData } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toggleArrow, setToggleArrow] = useState(false);
    const dispatch = useDispatch();

    function newGame() {
        setIsMenuOpen(false);
        dispatch(setNewGame())
    }

    function summaryPage(bool) {
        setIsMenuOpen(false);
        dispatch(goToSummaryPage(bool))
    }

    function menuButtonClick() {
        setTimeout(() => {
            setToggleArrow(!toggleArrow)
        }, isMenuOpen ? 200 : 3500);
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className={'header'}>
            <img alt={'monkey logo'} src={monkeyLogo} className={'monkey_logo'}/>
            <span>Poker Monkeys</span>
            <img alt={'monkey logo'} src={logoMonkey}/>
            <Slide top>
                {gameData !== null && <div className={'live_game_nav'}>
                    <span className={'nav_animation'}/>
                    <div className={'game_nav'}>
                        <Link to={ROUTES.liveGame}>
                            <Button onClick={() => summaryPage(false)}>Manage</Button>
                        </Link>
                        <Link to={ROUTES.liveGame}>
                            <Button onClick={() => summaryPage(true)}>summary</Button>
                        </Link>
                    </div>
                    <Link to={ROUTES.liveGame}>
                        <span className="pulse"/>
                        <span onClick={() => summaryPage(true)}>Live Game</span>
                    </Link>
                </div>}
            </Slide>
            <div className={'game_menu_nav_wrapper'}>
                <Slide left><i
                    className={`fas ${toggleArrow ? 'fa-chevron-left': 'fa-chevron-right'}`}
                    onClick={() => menuButtonClick()}
                /></Slide>
                {isMenuOpen && <Slide left duration={2500}><div className={'game_menu'}>
                    <Link to={ROUTES.profile}>
                        <Button onClick={() => setIsMenuOpen(false)}>Profile</Button>
                    </Link>
                    <Link to={ROUTES.newGame}>
                        <Button onClick={() => newGame()}>New Game</Button>
                    </Link>
                </div></Slide>}
                <span/>
            </div>
        </div>
    )
}

export default compose(withRouter)(Header)
