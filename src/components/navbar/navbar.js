import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
// import axios from "axios";
import { fetchMovies } from "../../Redux/Actions/FavMovieAction";

function NavbarComp() {
  const dispatch = useDispatch();
  const { langCont, setLangCont } = useContext(LanguageContext);
  let favMoviesNumber = useSelector((state) => state.favMoviesNum);

  const changeLanguage = async (lang) => {
    setLangCont(lang);
    dispatch(fetchMovies(1, lang));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5 ">
      <Link className="navbar-brand" to="/">
        Moon Movies
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="favourites">
              Favourites ({favMoviesNumber === 0 ? "0" : favMoviesNumber})
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link bg-warning text-dark "
              onClick={() => changeLanguage(langCont === "en" ? "ar" : "en")}
            >
              Lang
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComp;
