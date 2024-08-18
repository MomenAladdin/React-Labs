const INITIAL_STATE = {
  favMoviesNum: 0,
  movies: [],
  favMovies: [],
  lang: [],
};

export default function FavMovieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_FAV_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "FAV_MOVIE_COUNT":
      return {
        ...state,
        favMoviesNum: action.payload,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
        favMoviesNum: state.favMoviesNum + 1,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
        favMoviesNum: state.favMoviesNum - 1,
      };
    case "SET_MOVIES_LANG":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
