import { actionTypes } from "../actionTypes";

const initialState = {
    movieDetails: [],
    isDetailLoading: true,
    isDetailError: false
}

const movieDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.MOVIE_DETAIL_LOADING:
            return { ...state, isDetailLoading: true, isDetailError: false };

        case actionTypes.MOVIE_DETAIL_ERROR:
            return { ...state, isDetailLoading: false, isDetailError: true };

        case actionTypes.MOVIE_DETAILS:
            return { ...state, isDetailLoading: false, isDetailError: false, movieDetails: payload };

        default:
            return state;
    }
}

export default movieDetailReducer;
