import { actionTypes } from "../actionTypes";

const initialState = {
    tvDetails: [],
    isTvDetailLoading: true,
    isTvDetailError: false
}

const tvDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.TV_DETAIL_LOADING:
            return { ...state, isTvDetailLoading: true, isTvDetailError: false };

        case actionTypes.TV_DETAIL_ERROR:
            return { ...state, isTvDetailLoading: false, isTvDetailError: true };

        case actionTypes.TV_DETAILS:
            return { ...state, isTvDetailLoading: false, isTvDetailError: false, tvDetails: payload };

        default:
            return state;
    }
}

export default tvDetailReducer;
