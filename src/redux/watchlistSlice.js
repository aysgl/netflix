import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    myWatchlist: [],
    isWatchlistLoading: true,
    isWatchlistError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const addToMyWatchlist = (accountId) => (dispatch) => {
    dispatch(watchlistLoading());

    axios.post(`/account/${accountId}/watchlist`, options)
        .then(res => dispatch(setWatchlist(res.data.results)))
        .catch(() => dispatch(watchlistError()));
}

export const getMyWatchlistTv = (accountId) => (dispatch) => {
    dispatch(watchlistLoading());

    axios.post(`/account/${accountId}/watchlist/tv`, options)
        .then(res => dispatch(setWatchlist(res.data.results)))
        .catch(() => dispatch(watchlistError()));
}

export const getMyWatchlistMovies = (accountId) => (dispatch) => {
    dispatch(watchlistLoading());

    axios.post(`/account/${accountId}/watchlist/movies`, options)
        .then(res => dispatch(setWatchlist(res.data.results)))
        .catch(() => dispatch(watchlistError()));
}

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        watchlistLoading: (state) => {
            state.isWatchlistLoading = true;
            state.isWatchlistError = false;
        },
        watchlistError: (state) => {
            state.isWatchlistLoading = false;
            state.isWatchlistError = true;
        },
        setWatchlist: (state, action) => {
            state.isWatchlistLoading = false;
            state.isWatchlistError = false;
            state.myWatchlist = action.payload;
        },
    },
});

export const { watchlistLoading, watchlistError, setWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
