import { actionTypes } from "../actionTypes";

const initialState = {
    search: [],
    isSearchLoading: true,
    isSearchError: false,
}

const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SEARCH_LOADING:
            return { ...state, isSearchLoading: true, isSearchError: false };

        case actionTypes.SEARCH_ERROR:
            return { ...state, isSearchLoading: false, isSearchError: true };

        case actionTypes.SEARCHS:
            return { ...state, isSearchLoading: false, isSearchError: false, search: payload };

        default:
            return state;
    }
}

export default searchReducer;
