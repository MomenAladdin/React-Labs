import axios from "axios";
// eslint-disable-next-line no-undef
export const FavMovieAcion = (payload) => {
  return {
    type: "FAV_MOVIE_COUNT",
    payload,
  };
};

export const addMovie = (payload) => {
  return {
    type: "ADD_MOVIE",
    payload,
  };
};

export const deleteMovie = (payload) => {
  return {
    type: "DELETE_MOVIE",
    payload,
  };
};

export const getFavMovies = (currentPage) => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=51264cd8a87672fdc6697791642b8a3d&page=${currentPage}`
    )
    .then((res) => {
      dispatch({
        type: "GET_FAV_MOVIES",
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchMovies = (page, language) => (dispatch) => {
  return axios
    .get(
      `
https://api.themoviedb.org/3/movie/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=${language}&page=${page}`
    )
    .then((res) => {
      console.log(res);

      dispatch({
        type: "SET_MOVIES_LANG",
        payload: res.data.results,
      });
    });
};
