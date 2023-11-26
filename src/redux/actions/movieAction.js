import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getPopularMovie = () => (dispatch) => {
    axios.get(`/movie/popular`, options)
        .then(res => dispatch({
            type: actionTypes.MOVIES,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.MOVIE_ERROR }));
}