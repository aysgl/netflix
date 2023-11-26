import axios from "axios"
import { options } from "../../constants/contants";
import { actionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getTvDetails = (id) => (dispatch) => {
    dispatch({ type: actionTypes.TV_DETAIL_LOADING });

    axios.get(`/tv/${id}`, options)
        .then(res => dispatch({
            type: actionTypes.TV_DETAILS,
            payload: res.data
        }))
        .catch(() => dispatch({ type: actionTypes.TV_DETAIL_ERROR }));
}