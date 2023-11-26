import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getGenres = (type) => (dispatch) => {
    dispatch({ type: actionTypes.GENRE_LOADING });

    axios.get(`/genre/${type}/list`, options)
        .then(res => dispatch({
            type: actionTypes.GENRES,
            payload: res.data.genres
        }))
        .catch(() => dispatch({ type: actionTypes.GENRE_ERROR }));
}
