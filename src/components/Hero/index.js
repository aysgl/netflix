import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import { baseImageUrl } from '../../constants/contants';
import { actionTypes } from '../../redux/actionTypes';
import { getPopularMovie } from '../../redux/actions/movieAction';
import { getPopularTv } from '../../redux/actions/tvAction';
import { addToMyWatchlist } from '../../redux/actions/watchlistAction';

const Hero = ({ type }) => {
    const state = useSelector(store => type === 'movie' ? store.movie : store.tv);
    const dispatch = useDispatch();
    const randomIndex = Math.floor(Math.random() * (type === 'movie' ? (state?.movies?.length || 0) : (state?.tv?.length || 0)));
    const random = type === 'movie' ? state.movies?.[randomIndex] : state?.tv?.[randomIndex];

    useEffect(() => {
        dispatch({ type: actionTypes[type.toUpperCase() + '_LOADING'] });
        dispatch(type === 'movie' ? getPopularMovie() : getPopularTv());
    }, [dispatch, type]);

    const handleAddToWatchlist = () => {
        dispatch(addToMyWatchlist(20699615));
    };

    return (
        <>
            {state?.isMoviesLoading || state?.isTvLoading || !random ?
                <Loading />
                :
                <div className='row d-flex align-items-center vh-100'>
                    <div className='col-xl-4 col-lg-6 mb-5'>
                        <h1 className='display-1 lh-1'>{random?.title?.length || random?.name?.length > 20
                            ? random?.title?.slice(0, 18).concat("...") || random?.name?.slice(0, 18).concat("...")
                            : random?.title || random?.name
                        } <span className='display-6'>{random?.vote_average?.toFixed(1)}</span></h1>
                        <p className=''>{random?.overview?.length > 200 ? random?.overview?.slice(0, 200).concat("...") : random?.overview}</p>

                        <Link className='btn btn-light me-2' to={`/${type}/${random?.id}`}>Play</Link>
                        <button className='btn btn-secondary' onClick={() => handleAddToWatchlist()}>+ My List</button>
                    </div>
                    <div className='img'>
                        <div className='overlay'></div>
                        <img className='w-100' src={`${baseImageUrl.concat(random?.backdrop_path)}`} alt={random?.title} />
                    </div>
                </div>
            }
        </>
    );
};

export default Hero;
