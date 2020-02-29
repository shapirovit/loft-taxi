let initialState = false;

export default function contextLogin (state = initialState, action) {
    switch (action.type) {
    case "CONTEXT_LOGIN":
        return action.payload;
    default:
        return state;
    }
}