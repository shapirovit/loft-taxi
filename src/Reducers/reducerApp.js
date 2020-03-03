import statusLogin from "./statusLogin";
import addCard from "./addCard";
import currentUser from "./currentUser";
import fetchUser from "./fetchUser";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  statusLogin,
  addCard,
  currentUser,
  fetchUser,
});

export default reducerApp;