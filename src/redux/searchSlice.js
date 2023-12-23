import { createSlice } from '@reduxjs/toolkit';
import { options } from "../constants/contants";
import axios from 'axios';

const initialState = {
    search: [],
    isSearchLoading: true,
    isSearchError: false,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getSearchMovie = (query) => (dispatch) => {
    dispatch(searchLoading())
    axios.get(`/search/movie?query=${query}`, options)
        .then(res => dispatch(setSearch(res.data.results)))
        .catch((err) => dispatch(searchError(err)));
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchLoading: (state) => {
            state.isSearchLoading = true;
            state.isSearchError = false;
        },
        searchError: (state) => {
            state.isSearchLoading = false;
            state.isSearchError = true;
        },
        setSearch: (state, action) => {
            state.isSearchLoading = false;
            state.isSearchError = false;
            state.search = action.payload;
        },
    },
});

export const { searchLoading, searchError, setSearch } = searchSlice.actions;
export default searchSlice.reducer;
