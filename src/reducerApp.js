import statusLogin from "./moduls/statusLogin";
import statusCard from "./moduls/statusCard";
import currentUser from "./moduls/currentUser";
import fetchUser from "./moduls/fetchUser";
import fetchCard from "./moduls/fetchCard";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  statusLogin,
  statusCard,
  currentUser,
  fetchUser,
  fetchCard,
});

export default reducerApp;