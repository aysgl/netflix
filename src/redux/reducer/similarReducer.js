import { actionTypes } from "../actionTypes";

const initialState = {
    similars: [],
    isSimilarLoading: true,
    isSimilarError: false,
}

const similarReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SIMILAR_LOADING:
            return { ...state, isSimilarLoading: true, isSimilarError: false };

        case actionTypes.SIMILAR_ERROR:
            return { ...state, isSimilarLoading: true, isSimilarError: false };

        case actionTypes.SIMILARS:
            return { ...state, isSimilarLoading: false, isSimilarError: false, similars: payload };

        default:
            return state;
    }
}

export default similarReducer;
