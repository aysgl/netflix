import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getSearchMovie = (query) => (dispatch) => {
    axios.get(`/search/movie?query=${query}`, options)
        .then(res => dispatch({
            type: actionTypes.SEARCHS,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.SEARCH_ERROR }));
}