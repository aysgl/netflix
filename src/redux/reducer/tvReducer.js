import { actionTypes } from "../actionTypes";

const initialState = {
    tv: [],
    isTvLoading: true,
    isTvError: false,
}

const tvReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.TV_LOADING:
            return { ...state, isTvLoading: true, isTvError: false };

        case actionTypes.TV_ERROR:
            return { ...state, isTvLoading: false, isTvError: true };

        case actionTypes.TV:
            return { ...state, isTvLoading: false, isTvError: false, tv: payload };

        default:
            return state;
    }
}

export default tvReducer;
