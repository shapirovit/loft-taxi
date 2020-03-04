const FETCH_CARD_REQUEST = "FETCH_CARD_REQUEST";
const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS";
const FETCH_CARD_FAILURE = "FETCH_CARD_FAILURE";
const FETCH_CARD_OUT = "FETCH_CARD_OUT";

export const fetchCardRequest = (card) => ({
    type: FETCH_CARD_REQUEST,
    payload: card
});

export const fetchCardSuccess = payload => ({
    type: FETCH_CARD_SUCCESS,
    payload
});

export const fetchCardFailure = error => ({
    type: FETCH_CARD_FAILURE,
    error
});

export const fetchCardOut = () => ({
    type: FETCH_CARD_OUT,
});