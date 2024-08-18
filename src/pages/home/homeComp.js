import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import "./home.css";
import MovieCard from "./../../components/movieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getFavMovies } from "../../Redux/Actions/FavMovieAction";
import { LanguageContext } from "../../Context/LanguageContext";

function HomeComp() {
  // const [movies, setMovies] = useState([]);
  const movies = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(4);
  const [moviesPerPage] = useState(5);
  const { langCont, setLangCont } = useContext(LanguageContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=51264cd8a87672fdc6697791642b8a3d&page=${currentPage}`
  //     )
  //     .then((res) => {
  //       setMovies(res.data.results);
  //     })
  //     .catch((err) => console.log(err));
  // }, [currentPage]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(currentPage, langCont));
  }, [currentPage, langCont, dispatch]);

  const pageChange = (newPage) => {
    scrollToTop();
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {movies.slice(0, moviesPerPage).map((movie) => (
        <div key={movie.id}>
          <MovieCard
            title={movie.title}
            poster={movie.poster_path}
            bgImg={movie.backdrop_path}
            content={movie.overview}
            releaseDate={movie.release_date}
            lang={movie.original_language}
            vote={movie.vote_average}
            url={`/movieDetails/${movie.id}`}
            movie={movie}
          />
        </div>
      ))}
      <div className="pagination-controls">
        <button
          onClick={() => pageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn bg-light"
        >
          Previous
        </button>
        <span className="p-3 text-white fs-5">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn bg-light"
          onClick={() => pageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default HomeComp;
