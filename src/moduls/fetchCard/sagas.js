import { call, put } from 'redux-saga/effects';
import { postCard } from "./api";
import { fetchCardSuccess, fetchCardFailure } from "./actions";
import { fetchAddressRequest } from "../fetchAddress";
import { statusCard } from "../statusCard";

export function* fetchCardSaga (action) {
    try {
        const resultCard = yield call (postCard, action.payload);
        console.log("resultCard=", resultCard);
        yield put(fetchCardSuccess(resultCard));
        if (resultCard.success === true) {
            yield put(statusCard({ ...action.payload, status: resultCard.success}));
            localStorage["statusCard"] = JSON.stringify({ ...action.payload, status: resultCard.success});
            yield put(fetchAddressRequest());            
        }
    } catch (error) {
        yield put(fetchCardFailure(error));
    }
}