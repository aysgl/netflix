import { actionTypes } from "../actionTypes";

const initialState = {
    myWatchlist: [],
    isWatchlistLoading: true,
    isWatchlistError: false
}

const watchlistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.MY_WATCHLIST_LOADING:
            return { ...state, isWatchlistLoading: true, isWatchlistError: false };

        case actionTypes.MY_WATCHLIST_ERROR:
            return { ...state, isWatchlistLoading: true, isWatchlistError: false };

        case actionTypes.MY_WATCHLIST:
            return { ...state, isWatchlistLoading: false, isWatchlistError: false, myWatchlist: payload };

        default:
            return state;
    }
}

export default watchlistReducer;
