let initialState = {status: false};

export default function statusLogin (state = initialState, action) {
    switch (action.type) {
    case "STATUS_LOGIN":
        return action.payload;
    default:
        return state;
    }
}