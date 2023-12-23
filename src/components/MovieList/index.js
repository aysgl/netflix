import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseImageUrl, options } from '../../constants/contants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const MovieList = ({ genre, type }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`discover/${type}?sort_by=popularity.desc&with_genres=${genre.id}`, options)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));
    }, [genre.id, type]);

    const option = {
        perPage: type === "movie" ? 6 : 4,
        autoplay: true,
        interval: 8000,
        pagination: false,
        drag: 'free',
        perMove: 1,
        lazyLoad: 'nearby',
        breakpoints: {
            breakpoints: {
                992: {
                    perPage: 4,
                },
                768: {
                    perPage: 3,
                },
                576: {
                    perPage: 2,
                },
            },
        }
    }

    return (
        <div className='list' >
            <h2>{genre.name}</h2>
            <Splide options={option}>
                {movies && movies.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <Link to={`/${type}/${movie.id}`}>
                            <img
                                className='img-fluid'
                                src={baseImageUrl.concat(type === 'movie' ? movie?.poster_path : movie?.backdrop_path)}
                                alt={movie ? movie.title : 'Image'}
                            />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div >
    );
};

export default MovieList;
