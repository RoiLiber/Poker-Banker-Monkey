import * as actionTypes from "../actions/actionTypes";

const initialState = {
    gameData: null,
    summaryPage: false
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAME_DATA: {
            const gameData = action.payload;

            return {
                ...state,
                gameData
            };
        }
        case actionTypes.GO_TO_SUMMARY_PAGE: {
            const summaryPage = action.payload;

            return {
                ...state,
                summaryPage
            };
        }
        default:
            return state;
    }
};

export default mainReducer;
