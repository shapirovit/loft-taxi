// let initialState = {status: false};
let initialState = {status: true};

export default function statusCard (state = initialState, action) {
    switch (action.type) {
    case "STATUS_CARD":
        return action.payload;
    default:
        return state;
    }
}