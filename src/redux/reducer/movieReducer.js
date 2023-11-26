import { actionTypes } from "../actionTypes";

const initialState = {
    movies: [],
    isMoviesLoading: true,
    isMoviesError: false,
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.MOVIE_LOADING:
            return { ...state, isMoviesLoading: true, isMoviesError: false };

        case actionTypes.MOVIE_ERROR:
            return { ...state, isMoviesLoading: false, isMoviesError: true };

        case actionTypes.MOVIES:
            return { ...state, isMoviesLoading: false, isMoviesError: false, movies: payload };

        default:
            return state;
    }
}

export default movieReducer;
