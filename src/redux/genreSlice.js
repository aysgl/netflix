import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    genres: [],
    isGenresLoading: true,
    isGenresError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getGenres = (type) => async (dispatch) => {
    dispatch(genreLoading());
    axios.get(`/genre/${type}/list`, options)
        .then((res) => dispatch(setGenres(res.data.genres)))
        .catch((err) => dispatch(genreError(err)))
}

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        genreLoading: (state) => {
            state.isGenresLoading = true;
            state.isGenresError = false;
        },
        genreError: (state) => {
            state.isGenresLoading = false;
            state.isGenresError = true;
        },
        setGenres: (state, action) => {
            state.isGenresLoading = false;
            state.isGenresError = false;
            state.genres = action.payload;
        },
    }
});

export const { genreLoading, genreError, setGenres } = genreSlice.actions;
export default genreSlice.reducer;
