import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    tvDetails: [],
    isTvDetailLoading: true,
    isTvDetailError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getTvDetails = (id) => (dispatch) => {
    dispatch(tvDetailLoading());

    axios.get(`/tv/${id}`, options)
        .then(res => dispatch(setTvDetails(res.data)))
        .catch(() => dispatch(tvDetailError()));
}

const tvDetailSlice = createSlice({
    name: 'tvDetail',
    initialState,
    reducers: {
        tvDetailLoading: (state) => {
            state.isTvDetailLoading = true;
            state.isTvDetailError = false;
        },
        tvDetailError: (state) => {
            state.isTvDetailLoading = false;
            state.isTvDetailError = true;
        },
        setTvDetails: (state, action) => {
            state.isTvDetailLoading = false;
            state.isTvDetailError = false;
            state.tvDetails = action.payload;
        },
    },
});

export const { tvDetailLoading, tvDetailError, setTvDetails } = tvDetailSlice.actions;
export default tvDetailSlice.reducer;
