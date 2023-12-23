import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    similars: [],
    isSimilarLoading: true,
    isSimilarError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getSimilarMovies = (id) => (dispatch) => {
    dispatch(similarLoading());

    axios.get(`/movie/${id}/similar`, options)
        .then(res => dispatch(setSimilars(res.data.results)))
        .catch(() => dispatch(similarError()));
}

export const getSimilarTv = (id) => (dispatch) => {
    dispatch(similarLoading());

    axios.get(`/tv/${id}/similar`, options)
        .then(res => dispatch(setSimilars(res.data.results)))
        .catch(() => dispatch(similarError()));
}


const similarSlice = createSlice({
    name: 'similar',
    initialState,
    reducers: {
        similarLoading: (state) => {
            state.isSimilarLoading = true;
            state.isSimilarError = false;
        },
        similarError: (state) => {
            state.isSimilarLoading = false;
            state.isSimilarError = true;
        },
        setSimilars: (state, action) => {
            state.isSimilarLoading = false;
            state.isSimilarError = false;
            state.similars = action.payload;
        },
    },
});

export const { similarLoading, similarError, setSimilars } = similarSlice.actions;
export default similarSlice.reducer;
