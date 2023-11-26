import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getSimilarMovies = (id) => (dispatch) => {
    dispatch({ type: actionTypes.SIMILAR_LOADING });

    axios.get(`/movie/${id}/similar`, options)
        .then(res => dispatch({
            type: actionTypes.SIMILARS,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.SIMILAR_ERROR }));
}

export const getSimilarTv = (id) => (dispatch) => {
    dispatch({ type: actionTypes.SIMILAR_LOADING });

    axios.get(`/tv/${id}/similar`, options)
        .then(res => dispatch({
            type: actionTypes.SIMILARS,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.SIMILAR_ERROR }));
}
