const initState = {
    isFetching: false,
    isFetched: false,
    status: {},
    error: null
};

const fetchUser = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_USER_REQUEST":
            return {
                ...state,
                isFetching: true,
                isFetched: false,
            }
        case "FETCH_USER_REQUEST_REGISTR":
            return {
                ...state,
                isFetching: true,
                isFetched: false,
            }
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                isFetched: true,
                isFetching: false,
                status: action.payload
            }
        case "FETCH_USER_FAILURE":
            return {
                ...state,
                isFetched: true,
                isFetching: false,
                error: action.error
            }
        case "FETCH_USER_OUT":
            return {
                ...state,
                isFetched: false,
                isFetching: false,
                status: {},
                error: null
            }
        default: return state;
    }
}

export default fetchUser;