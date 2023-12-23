import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { baseImageUrl } from '../constants/contants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getSimilarTv } from '../redux/similarSlice';
import { getTvDetails } from '../redux/tvDetailSlice';
import Loading from '../components/Loading';

const TVDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const state = useSelector((store) => ({
        tvDetail: store.tvDetail,
        similar: store.similar,
    }));

    useEffect(() => {
        dispatch(getTvDetails(id));
        dispatch(getSimilarTv(id))
    }, [dispatch, id]);

    const option = {
        perPage: 4,
        autoplay: true,
        interval: 8000,
        pagination: false,
        drag: 'free',
        perMove: 1,
        lazyLoad: 'nearby',
        breakpoints: {
            992: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
        }
    }

    return (
        <div>
            {state?.tvDetail?.isTvDetailLoading && state?.similar?.isSimilarLoading ? (
                <Loading />
            ) : state?.tvDetail?.isTvDetailError && state?.similar?.isSimilarError ? (
                <p>Error loading tv details</p>
            ) : (
                <div className='container mt-5 pt-5'>
                    <div className='row g-0'>
                        <div className='col-md-5'>
                            <div className='play'>
                                <img className='img-fluid' src={`${baseImageUrl.concat(state?.tvDetail?.tvDetails?.poster_path)}`} alt='' />

                                <Link target='_blank' to={state?.tvDetail?.tvDetails?.homepage} className='btn btn-danger'><svg fill='white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg></Link>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-6'>
                            <p className='display-2 d-flex justify-content-between align-items-end'>
                                <span>{state?.tvDetail?.tvDetails?.name}</span>
                                <span className='h2 d-flex align-items-center'>
                                    {state?.tvDetail?.tvDetails?.vote_average !== undefined && (
                                        <>
                                            {state?.tvDetail?.tvDetails?.vote_average.toFixed(1)}
                                            <svg className='ms-2' fill='yellow' xmlns="http://www.w3.org/2000/svg" height=".6em" viewBox="0 0 576 512">
                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </p>
                            <p className='text-secondary'>
                                {state?.tvDetail?.tvDetails?.first_air_date?.slice(0, 4)} | {state?.tv?.tv.adult > true ? "12+" : "18+"}
                            </p>
                            <p className=''>{state?.tvDetail?.tvDetails?.overview}</p>
                            <div className='text-secondary'>{state?.tvDetail?.tvDetails?.genres?.map(i => <span className='me-2' key={i.id}>{i.name}</span>)}</div>
                            <div>
                                <span>Author: </span>
                                {state?.tvDetail?.tvDetails.created_by.map(i => i.name)}
                            </div>


                            <p className='display-6 pt-5'>Similar</p>
                            <Splide options={option}>
                                {state?.similar.similars?.filter(i => i.poster_path === null ? "" : i.poster_path).map((movie) => (
                                    <SplideSlide key={movie.id}>
                                        <img className='img-fluid'
                                            src={baseImageUrl.concat(movie?.poster_path)}
                                            alt={movie.title}
                                        />
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TVDetail;
