import statusLogin from "./moduls/statusLogin";
import statusCard from "./moduls/statusCard";
import currentUser from "./moduls/currentUser";
import fetchUser from "./moduls/fetchUser";
import fetchCard from "./moduls/fetchCard";
import fetchAddress from "./moduls/fetchAddress";
import fetchRoute from "./moduls/fetchRoute";
import statusOrder from "./moduls/statusOrder";
import { combineReducers } from 'redux';

const reducerApp = combineReducers({
  statusLogin,
  statusCard,
  currentUser,
  fetchUser,
  fetchCard,
  fetchAddress,
  fetchRoute,
  statusOrder
});

export default reducerApp;