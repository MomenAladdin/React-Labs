import FavMovieReducer from "./Reducers/FavMovieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const myStore = createStore(
  FavMovieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default myStore;
