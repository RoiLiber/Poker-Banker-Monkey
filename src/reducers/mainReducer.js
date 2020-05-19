import * as actionTypes from "../actions/actionTypes";

const initialState = {
    gameData: null,
    summaryPage: true
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
        case actionTypes.SET_NEW_GAME: {
            const payload = action.payload;

            return {
                ...state,
                gameData: payload,
                summaryPage: true
            };
        }
        default:
            return state;
    }
};

export default mainReducer;
