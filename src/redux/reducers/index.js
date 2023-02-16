import { combineReducers } from "redux";
import {auth_reducer, movies_reducer, shows_reducer, tickets_reducer, users_reducer} from "./theatre-reducer";

export default combineReducers({

  auth: auth_reducer,
  users: users_reducer,
  shows: shows_reducer,
  movies: movies_reducer,
  tickets: tickets_reducer,

});
