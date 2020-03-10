import { createActions } from 'redux-actions';

export const {
    fetchUserRequest,
    fetchUserRequestRegistr,
    fetchUserSuccess,
    fetchUserFailure,
    fetchUserOut
    } = createActions(
    'FETCH_USER_REQUEST',
    'FETCH_USER_REQUEST_REGISTR',
    'FETCH_USER_SUCCESS',
    'FETCH_USER_FAILURE',
    'FETCH_USER_OUT');