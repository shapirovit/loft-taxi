import { createActions } from 'redux-actions';

export const {
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
    fetchCardOut
    } = createActions(
    'FETCH_CARD_REQUEST',
    'FETCH_CARD_SUCCESS',
    'FETCH_CARD_FAILURE',
    'FETCH_CARD_OUT');

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

export const {
    statusLogin,
    statusCard,
    } = createActions(
    'STATUS_LOGIN',
    'STATUS_CARD');

export const {
    activePage,
    currentUser,
    } = createActions(
    'ACTIVE_PAGE',
    'CURRENT_USER');

