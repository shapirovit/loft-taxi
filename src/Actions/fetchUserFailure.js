const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = (user) => ({
    type: FETCH_USER_REQUEST,
    payload: user
});

export const fetchUserSuccess = payload => ({
    type: FETCH_USER_SUCCESS,
    payload
});

export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    error
});

export default fetchUserFailure;