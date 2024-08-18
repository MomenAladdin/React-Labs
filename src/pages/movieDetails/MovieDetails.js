import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import DetailsCard from "../../components/movieDetailCard/detailCard";

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const movieId = useParams();
  console.log(movieId.id);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=51264cd8a87672fdc6697791642b8a3d`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  return (
    <>
      <h1 className="text-white fs-2 fw-bold">{movie.title}</h1>
      <DetailsCard
        title={movie.title}
        poster={movie.poster_path}
        bgImg={movie.backdrop_path}
        content={movie.overview}
        releaseDate={movie.release_date}
        lang={movie.original_language}
        vote={movie.vote_average}
      />
    </>
  );
}

export default MovieDetails;
