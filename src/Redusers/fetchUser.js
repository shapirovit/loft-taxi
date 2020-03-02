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
        default: return state;
    }
}

export default fetchUser;