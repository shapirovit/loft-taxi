import contextLogin from "./contextLogin";
import addCard from "./addCard";
import currentUser from "./currentUser";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  contextLogin,
  addCard,
  currentUser
});

export default reducerApp;