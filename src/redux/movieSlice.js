import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    movies: [],
    isMoviesLoading: true,
    isMoviesError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getPopularMovie = () => (dispatch) => {
    dispatch(movieLoading())
    axios.get(`/movie/popular`, options)
        .then(res => dispatch(setMovies(res.data.results)))
        .catch(() => dispatch(movieError()));
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        movieLoading: (state) => {
            state.isMoviesLoading = true;
            state.isMoviesError = false;
        },
        movieError: (state) => {
            state.isMoviesLoading = false;
            state.isMoviesError = true;
        },
        setMovies: (state, action) => {
            state.isMoviesLoading = false;
            state.isMoviesError = false;
            state.movies = action.payload;
        },
    },
});

export const { movieLoading, movieError, setMovies } = movieSlice.actions;
export default movieSlice.reducer;
