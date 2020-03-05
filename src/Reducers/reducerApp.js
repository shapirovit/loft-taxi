import statusLogin from "./statusLogin";
import activePage from "./activePage";
import statusCard from "./statusCard";
import currentUser from "./currentUser";
import fetchUser from "./fetchUser";
import fetchCard from "./fetchCard";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  statusLogin,
  statusCard,
  activePage,
  currentUser,
  fetchUser,
  fetchCard,
});

export default reducerApp;