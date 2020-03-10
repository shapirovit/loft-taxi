import { 
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
    fetchCardOut } from "./actions";

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initState = {
    isFetching: false,
    isFetched: false,
    status: {},
    error: null
};

const isFetching = handleActions({
    [fetchCardRequest]: () => true,
    [fetchCardSuccess]: () => false,
    [fetchCardFailure]: () => false,
    [fetchCardOut]: () => false,
}, initState.isFetching);

const isFetched = handleActions({
    [fetchCardRequest]: () => false,
    [fetchCardFailure]: () => true,
    [fetchCardSuccess]: () => true,
    [fetchCardOut]: () => false,
}, initState.isFetched);

const status = handleActions({
    [fetchCardSuccess]: (_state, action) => action.payload,
    [fetchCardOut]: () => { return {} },
}, initState.status);

const error = handleActions({
    [fetchCardFailure]: (_state, action) => action.payload,
    [fetchCardOut]: () => null,
}, initState.error);

const fetchCard = combineReducers ({
    isFetching,
    isFetched,
    status,
    error
})

export default fetchCard;