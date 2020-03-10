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