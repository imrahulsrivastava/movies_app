import React from "react";
import { appContext } from "./context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movies, isLoading } = useContext(appContext);

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movies.map((movie, i) => {
            const { imdbID, Poster, Title } = movie;
            const movieTitle = Title.substring(0, 20);

            return (
              <NavLink to={`movies/${imdbID}`} key={i}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieTitle.length >= 20
                        ? `${movieTitle}...`
                        : movieTitle}
                    </h2>
                    <img src={Poster} alt={imdbID}></img>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
