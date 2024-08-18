import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";
import logo from "../../assets/emtyList.jpg";
import "./FavComp.css";
function FavComp() {
  const favMovies = useSelector((state) => state.favMovies);

  return (
    <>
      {favMovies.length === 0 && (
        <div className="row  d-flex align-items-center justify-content-center ">
          <h1 className="text-white  d-flex justify-content-center mb-3 ">
            No favorite movies found{" "}
          </h1>
          <img src={logo} className="emptySeats d-flex " alt="empty list" />
        </div>
      )}

      {favMovies.map((movie) => (
        <div key={movie.id} className="d-flex justify-conten-center">
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
    </>
  );
}

export default FavComp;
