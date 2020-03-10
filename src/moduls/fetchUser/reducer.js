import { 
    fetchUserRequest,
    fetchUserRequestRegistr,
    fetchUserSuccess,
    fetchUserFailure,
    fetchUserOut } from "./actions";

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initState = {
    isFetching: false,
    isFetched: false,
    status: {},
    error: null
};

const isFetching = handleActions({
    [fetchUserRequest]: () => true,
    [fetchUserRequestRegistr]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false,
    [fetchUserOut]: () => false,
}, initState.isFetching);

const isFetched = handleActions({
    [fetchUserRequest]: () => false,
    [fetchUserRequestRegistr]: () => false,
    [fetchUserFailure]: () => true,
    [fetchUserSuccess]: () => true,
    [fetchUserOut]: () => false,
}, initState.isFetched);

const status = handleActions({
    [fetchUserSuccess]: (_state, action) => action.payload,
    [fetchUserOut]: () => { return {} },
}, initState.status);

const error = handleActions({
    [fetchUserFailure]: (_state, action) => action.payload,
    [fetchUserOut]: () => null,
}, initState.error);

const fetchUser = combineReducers ({
    isFetching,
    isFetched,
    status,
    error
})

export default fetchUser;