// let initialState = {status: false};
// let initialState = {status: true, token: "recwZWv2GzEqyfUtg"};
let initialState = ( JSON.parse(localStorage["statusLogin"] || "{}" ) || {status: false} );

export default function statusLogin (state = initialState, action) {
    switch (action.type) {
    case "STATUS_LOGIN":
        return action.payload;
    default:
        return state;
    }
}