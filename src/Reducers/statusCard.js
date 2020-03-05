// let initialState = {status: false};
// let initialState = {status: true};
let initialState = ( JSON.parse(localStorage["statusCard"] || "{}" ) || {status: false} );

export default function statusCard (state = initialState, action) {
    switch (action.type) {
    case "STATUS_CARD":
        return action.payload;
    default:
        return state;
    }
}