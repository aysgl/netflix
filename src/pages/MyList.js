import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../redux/actionTypes';
import Loading from "../components/Loading";
// import { getMyWatchlist } from '../redux/actions/watchlistAction';

const MyList = () => {
    const state = useSelector((store) => store.watchlistReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getMyWatchlist(20699615));
    }, [dispatch]);

    return (
        <div className='container pt-5 mt-5'>
            {state?.isWatchlistLoading ? (
                <Loading />
            ) : state?.isWatchlistError ? (
                <p>Error loading watchlist</p>
            ) : (
                <div>
                    <h1 className='display-6'>MyList</h1>
                    {state?.myWatchlist.length === 0 ? (
                        <p>Your watchlist is empty.</p>
                    ) : (
                        <ul>
                            {state?.myWatchlist.map((movie) => (
                                <li key={movie.id}>{movie.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyList;
