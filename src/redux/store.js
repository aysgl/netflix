import { applyMiddleware, createStore, combineReducers } from 'redux'
import movieReducer from './reducer/movieReducer'
import watchlistReducer from './reducer/watchlistReducer'
import movieDetailReducer from "./reducer/movieDetailReducer"
import similarReducer from "./reducer/similarReducer"
import genreReducer from "./reducer/genreReducer"
import tvReducer from "./reducer/tvReducer"
import tvDetailReducer from "./reducer/tvDetailReducer"
import thunk from 'redux-thunk';
import searchReducer from './reducer/searchReducer'

const rootReducer = combineReducers({
    movie: movieReducer,
    movieDetail: movieDetailReducer,
    tv: tvReducer,
    tvDetail: tvDetailReducer,
    genres: genreReducer,
    similar: similarReducer,
    watchlist: watchlistReducer,
    search: searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
