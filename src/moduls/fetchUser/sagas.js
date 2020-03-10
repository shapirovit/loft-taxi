import { call, put } from 'redux-saga/effects';
import { getUser } from "./api";
import { fetchUserSuccess, fetchUserFailure } from "./actions";
import { statusLogin } from "../statusLogin";

export function* fetchUserSaga (action) {
    try {
        const resultUser = yield call (getUser, action.payload, "auth");
        console.log("resultUser=", resultUser);
        yield put(fetchUserSuccess(resultUser));
        if (resultUser.success === true) {
            yield put(statusLogin({status: true, token: resultUser.token}));
            localStorage["statusLogin"] = JSON.stringify({ status: true, token: resultUser.token });
        }
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}

export function* fetchUserRegistrSaga (action) {
    try {
        const resultUser = yield call (getUser, action.payload, "register");
        console.log("resultUserRegistr=", resultUser);
        yield put(fetchUserSuccess(resultUser));
        if (resultUser.success === true) {
            yield put(statusLogin({status: true, token: resultUser.token}));
            localStorage["statusLogin"] = JSON.stringify({ status: true, token: resultUser.token });
        }
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}