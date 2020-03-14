import { statusOrder as statusOrderAction } from "./actions";

import { handleActions } from 'redux-actions';


let initialState = JSON.parse(localStorage["statusOrder"] || '{"status":false}');

const statusOrder = handleActions(
    {
    [statusOrderAction]: (state, action) => action.payload
    },
    initialState,
);

export default statusOrder;