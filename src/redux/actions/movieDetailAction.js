import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getMovieDetails = (id) => (dispatch) => {
    dispatch({ type: actionTypes.MOVIE_DETAIL_LOADING });

    axios.get(`/movie/${id}`, options)
        .then(res => dispatch({
            type: actionTypes.MOVIE_DETAILS,
            payload: res.data
        }))
        .catch(() => dispatch({ type: actionTypes.MOVIE_DETAIL_ERROR }));
}