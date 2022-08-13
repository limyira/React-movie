import React from "react";
import { useState, useEffect } from "react";
import Movies from "../components/Movies";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <h1>
      {loading ? "now loading" : "Movie list"}
      <div>
        {movies.map((movie) => (
          <Movies
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </div>
    </h1>
  );
};

export default Home;
