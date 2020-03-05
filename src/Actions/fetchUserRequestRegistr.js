const FETCH_USER_REQUEST_REGISTR = "FETCH_USER_REQUEST_REGISTR";

const fetchUserRequestRegistr = (user) => ({
    type: FETCH_USER_REQUEST_REGISTR,
    payload: user
});

export default fetchUserRequestRegistr;