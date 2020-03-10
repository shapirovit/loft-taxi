import { currentUser as currentUserAction } from "./actions";

import { handleActions } from 'redux-actions';

let initialState = "";

const currentUser = handleActions({
    [currentUserAction]: (_state, action) => action.payload
}, initialState);

export default currentUser;