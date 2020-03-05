const initState = {
    isFetching: false,
    isFetched: false,
    status: {},
    error: null
};

const fetchCard = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_CARD_REQUEST":
            return {
                ...state,
                isFetching: true,
                isFetched: false,
            }
        case "FETCH_CARD_SUCCESS":
            return {
                ...state,
                isFetched: true,
                isFetching: false,
                status: action.payload
            }
        case "FETCH_CARD_FAILURE":
            return {
                ...state,
                isFetched: true,
                isFetching: false,
                error: action.error
            }
        case "FETCH_CARD_OUT":
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

export default fetchCard;