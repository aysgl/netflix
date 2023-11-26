import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseImageUrl } from '../constants/contants';
import { Link, useParams } from 'react-router-dom';
import { getSearchMovie } from '../redux/actions/searchAction';

const Search = () => {
    const { query } = useParams();
    const state = useSelector(store => store.search)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchMovie(query));
    }, [query, dispatch]);

    return (
        <div className='container pt-5 mt-5'>
            <div className='row search'>
                {state.search
                    .filter((i) => (i.poster_path === null ? '' : i.poster_path))
                    .map((result) => (
                        <Link to={`/movie/${result.id}`} className='col-md-2 mb-4' key={result.id}>
                            <div className='ratio ratio-1x1'>
                                <img className='img-fluid mb-2' src={`${baseImageUrl.concat(result.poster_path)}`} alt='' />
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                {result.title}
                                <span>{result.popularity.toFixed(1)}</span>
                            </div>
                            <p>{result.release_date.slice(0, 4)}</p>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Search;
