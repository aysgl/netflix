import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import watchlistReducer from './watchlistSlice';
import movieDetailReducer from './movieDetailSlice';
import similarReducer from './similarSlice';
import genreReducer from './genreSlice';
import tvReducer from './tvSlice';
import tvDetailReducer from './tvDetailSlice';
import searchReducer from './searchSlice';

const rootReducer = {
    movie: movieReducer,
    movieDetail: movieDetailReducer,
    tv: tvReducer,
    tvDetail: tvDetailReducer,
    genres: genreReducer,
    similar: similarReducer,
    watchlist: watchlistReducer,
    search: searchReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
