import contextLogin from "./contextLogin";
import contextCard from "./contextCard";
import currentUser from "./currentUser";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  contextLogin,
  contextCard,
  currentUser
});

export default reducerApp;