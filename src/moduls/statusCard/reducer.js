import { statusCard as statusCardAction } from "./actions";
import { handleActions } from 'redux-actions';

let initialState = JSON.parse(localStorage["statusCard"] || '{"status":false}' );

const statusCard = handleActions({
    [statusCardAction]: (_state, action) => action.payload
}, initialState);

export default statusCard;

