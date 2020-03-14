import { createActions } from 'redux-actions';

export const {
    fetchAddressRequest,
    fetchAddressSuccess,
    fetchAddressFailure,
    } = createActions(
    'FETCH_ADDRESS_REQUEST',
    'FETCH_ADDRESS_SUCCESS',
    'FETCH_ADDRESS_FAILURE');