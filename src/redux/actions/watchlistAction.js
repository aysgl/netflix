import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const addToMyWatchlist = (accountId) => (dispatch) => {
    dispatch({ type: actionTypes.MY_WATCHLIST_LOADING });

    axios.post(`/account/${accountId}/watchlist`, options)
        .then(res => dispatch({
            type: actionTypes.MY_WATCHLIST,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.MY_WATCHLIST_ERROR }));
}

export const getMyWatchlistTv = (accountId) => (dispatch) => {
    dispatch({ type: actionTypes.MY_WATCHLIST_LOADING });

    axios.post(`/account/${accountId}/watchlist/tv`, options)
        .then(res => dispatch({
            type: actionTypes.MY_WATCHLIST,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.MY_WATCHLIST_ERROR }));
}

export const getMyWatchlistMovies = (accountId) => (dispatch) => {
    dispatch({ type: actionTypes.MY_WATCHLIST_LOADING });

    axios.post(`/account/${accountId}/watchlist/movies`, options)
        .then(res => dispatch({
            type: actionTypes.MY_WATCHLIST,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.MY_WATCHLIST_ERROR }));
}