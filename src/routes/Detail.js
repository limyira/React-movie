import Movies from "../components/Movies";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} />
      <br />
      <span>Rating: {movie.rating} / 10</span>
      <br />
      <span>Genres: {movie.genres}</span>
      <br />
      <a href={movie.url}>Watch now!</a>
      <p>{movie.description_full}</p>
    </div>
  );
}
export default Detail;
