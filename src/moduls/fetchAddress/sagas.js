import { call, put } from 'redux-saga/effects';
import { getAddress } from "./api";
import { fetchAddressSuccess, fetchAddressFailure } from "./actions";

export function* fetchAddressSaga () {
    try {
        const resultAddress = yield call (getAddress);
        console.log("resultAddress=", resultAddress);
        yield put(fetchAddressSuccess(resultAddress.addresses));
        localStorage["Addresses"] = JSON.stringify(resultAddress.addresses);
    } catch (error) {
        yield put(fetchAddressFailure(error));
    }
}