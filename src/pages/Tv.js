import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../redux/actions/genreAction";
import { actionTypes } from "../redux/actionTypes";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import "../scss/style.scss";

function Tv() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres("tv"));
  }, [dispatch]);

  return (
    <div className="container">
      <Hero type="tv" />
      <div className="movielist">
        {state.isGenresLoading ? (
          <Loading />
        ) : state.isGenresError ? (
          <p>Hata oluştu</p>
        ) : (
          state?.genres.map((genre) => (
            <MovieList key={genre.id} genre={genre} type="tv" />
          ))
        )}
      </div>
    </div>
  );
}

export default Tv;
