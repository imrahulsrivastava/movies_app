import React from "react";
import { useState, useEffect } from "react";
import { ApiUrl } from "./context";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios({
        baseURL: url,
      });
      const data = res.data;

      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setShowError({ show: false, msg: "" });
        setMovies(data);
      } else {
        setShowError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let clearOutTimer = setTimeout(() => {
      getMovies(`${ApiUrl}&i=${id}`);
    }, 800);
    return () => clearTimeout(clearOutTimer);
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movies.Poster} alt=""></img>
          </figure>

          <div className="card-content">
            <p className="title">{movies.Title}</p>

            <p className="card-text"> {movies.Released}</p>
            <p className="card-text">{movies.Genre}</p>
            <p className="card-text">{movies.imdbRating} / 10</p>
            <p className="card-text">{movies.Country}</p>
            <NavLink to="/" className="back-btn">
              Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
