import * as actionTypes from "./actionTypes";

export const setGameData = obj => {
    localStorage.setItem('pokerGameData', JSON.stringify(obj));

    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_GAME_DATA,
            payload: obj
        })
    }
};

export const goToSummaryPage = bool => {

    return (dispatch) => {
        dispatch({
            type: actionTypes.GO_TO_SUMMARY_PAGE,
            payload: bool
        })
    }
};





