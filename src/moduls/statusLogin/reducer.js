import { statusLogin as statusLoginAction } from "./actions";

import { handleActions } from 'redux-actions';


let initialState = JSON.parse(localStorage["statusLogin"] || '{"status":false}');

const statusLogin = handleActions(
    {
    [statusLoginAction]: (state, action) => action.payload
    },
    initialState,
);

export default statusLogin;