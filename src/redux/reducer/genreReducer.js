import { actionTypes } from "../actionTypes";

const initialState = {
    genres: [],
    isGenresLoading: true,
    isGenresError: false,
}

const genreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GENRE_LOADING:
            return { ...state, isGenresLoading: true, isGenresError: false };

        case actionTypes.GENRE_ERROR:
            return { ...state, isGenresLoading: false, isGenresError: true };

        case actionTypes.GENRES:
            return { ...state, isGenresLoading: false, isGenresError: false, genres: payload };

        default:
            return state;
    }
}

export default genreReducer;
