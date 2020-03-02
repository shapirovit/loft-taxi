import contextLogin from "./contextLogin";
import addCard from "./addCard";
import currentUser from "./currentUser";
import fetchUser from "./fetchUser";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  contextLogin,
  addCard,
  currentUser,
  fetchUser,
});

export default reducerApp;