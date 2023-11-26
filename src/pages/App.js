import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../redux/actions/genreAction";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import "../scss/style.scss";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres("movie"));
  }, [dispatch]);

  return (
    <div className="container">
      <Hero type="movie" />
      <div className="movielist">
        {state.isGenresLoading ? (
          <Loading />
        ) : state.isGenresError ? (
          <p>Hata oluştu</p>
        ) : (
          state?.genres.map((genre) => (
            <MovieList key={genre.id} genre={genre} type="movie" />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
