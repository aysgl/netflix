import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    tv: [],
    isTvLoading: true,
    isTvError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getPopularTv = () => (dispatch) => {
    dispatch(tvLoading())
    axios.get(`/trending/tv/day`, options)
        .then(res => dispatch(setTv(res.data.results)))
        .catch(() => dispatch(tvError()));
}

const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        tvLoading: (state) => {
            state.isTvLoading = true;
            state.isTvError = false;
        },
        tvError: (state) => {
            state.isTvLoading = false;
            state.isTvError = true;
        },
        setTv: (state, action) => {
            state.isTvLoading = false;
            state.isTvError = false;
            state.tv = action.payload;
        },
    },
});

export const { tvLoading, tvError, setTv } = tvSlice.actions;
export default tvSlice.reducer;
