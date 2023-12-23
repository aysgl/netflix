import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    movieDetails: [],
    isDetailLoading: true,
    isDetailError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getMovieDetails = (id) => (dispatch) => {
    dispatch(movieDetailLoading());

    axios.get(`/movie/${id}`, options)
        .then(res => dispatch(setMovieDetails(res.data)))
        .catch(() => dispatch(movieDetailError()));
}

const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {
        movieDetailLoading: (state) => {
            state.isDetailLoading = true;
            state.isDetailError = false;
        },
        movieDetailError: (state) => {
            state.isDetailLoading = false;
            state.isDetailError = true;
        },
        setMovieDetails: (state, action) => {
            state.isDetailLoading = false;
            state.isDetailError = false;
            state.movieDetails = action.payload;
        },
    },
});

export const { movieDetailLoading, movieDetailError, setMovieDetails } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
