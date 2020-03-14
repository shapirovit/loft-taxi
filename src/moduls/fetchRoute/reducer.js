import { 
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure} from "./actions";

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initState = {
    isFetching: false,
    isFetched: false,
    Route: JSON.parse(localStorage["Route"] || '[]'),
    error: null
};

const isFetching = handleActions({
    [fetchRouteRequest]: () => true,
    [fetchRouteSuccess]: () => false,
    [fetchRouteFailure]: () => false,
}, initState.isFetching);

const isFetched = handleActions({
    [fetchRouteRequest]: () => false,
    [fetchRouteFailure]: () => true,
    [fetchRouteSuccess]: () => true,
}, initState.isFetched);

const Route = handleActions({
    [fetchRouteRequest]: () => [],
    [fetchRouteSuccess]: (_state, action) => action.payload,
}, initState.Route);

const error = handleActions({
    [fetchRouteFailure]: (_state, action) => action.payload,
}, initState.error);

const fetchRoute = combineReducers ({
    isFetching,
    isFetched,
    Route,
    error
})

export default fetchRoute;