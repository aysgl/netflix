import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getPopularTv = () => (dispatch) => {
    axios.get(`/trending/tv/day`, options)
        .then(res => dispatch({
            type: actionTypes.TV,
            payload: res.data.results
        }))
        .catch(() => dispatch({ type: actionTypes.TV_ERROR }));
}