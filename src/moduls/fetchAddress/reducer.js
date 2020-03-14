import { 
    fetchAddressRequest,
    fetchAddressSuccess,
    fetchAddressFailure} from "./actions";

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initState = {
    isFetching: false,
    isFetched: false,
    addresses: JSON.parse(localStorage["Addresses"] || '[]'),
    error: null
};

const isFetching = handleActions({
    [fetchAddressRequest]: () => true,
    [fetchAddressSuccess]: () => false,
    [fetchAddressFailure]: () => false,
}, initState.isFetching);

const isFetched = handleActions({
    [fetchAddressRequest]: () => false,
    [fetchAddressFailure]: () => true,
    [fetchAddressSuccess]: () => true,
}, initState.isFetched);

const addresses = handleActions({
    [fetchAddressRequest]: () => [],
    [fetchAddressSuccess]: (_state, action) => action.payload,
}, initState.addresses);

const error = handleActions({
    [fetchAddressFailure]: (_state, action) => action.payload,
}, initState.error);

const fetchAddress = combineReducers ({
    isFetching,
    isFetched,
    addresses,
    error
})

export default fetchAddress;