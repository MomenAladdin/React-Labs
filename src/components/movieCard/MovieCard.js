import { Link } from "react-router-dom";
import "./MovieCard.css";
import { addMovie, deleteMovie } from "../../Redux/Actions/FavMovieAction";
import { useDispatch, useSelector } from "react-redux";

function MovieCard(props) {
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.favMovies);

  const title = props.title || "No Title";
  const releaseDate = props.releaseDate || "Unknown Release Date";
  const content = props.content || "No Description";
  const poster = props.poster || "default_poster_path";
  const bgImg = props.bgImg || "default_bg_path";

  const isFavorite = favMovies.some((movie) => movie.id === props.movie.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteMovie(props.movie));
    } else {
      dispatch(addMovie(props.movie));
    }
  };
  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section ">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt="jj"
            />
            <Link to={props.url} className="link">
              <h1>{title}</h1>
            </Link>

            <h4>
              {releaseDate.substr(0, 4)}, {props.lang}
            </h4>
          </div>
          <div className="movie_desc">
            <p className="text">{content.substring(0, 150)}...</p>
            <div className="d-flex justify-content-around">
              <div className="text-white d-flex ">
                <span className="fw-bold fs-4">
                  IMDB : {props.vote.toFixed(1)}
                </span>
              </div>
              <div className="d-flex">
                <button className="btn fs-2  " onClick={() => toggleFavorite()}>
                  <i
                    className={`fa-${isFavorite ? "solid" : "regular"} fa-star`}
                    style={{ color: "#FFD43B" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="blur_back  "
            src={`https://image.tmdb.org/t/p/w500/${bgImg}`}
            alt="jj"
          />
        </div>
      </div>
    </>
  );
}

export default MovieCard;
