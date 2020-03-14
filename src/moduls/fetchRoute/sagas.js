import { call, put } from 'redux-saga/effects';
import { getRoute } from "./api";
import { fetchRouteSuccess, fetchRouteFailure } from "./actions";
import { statusOrder } from "../statusOrder";

export function* fetchRouteSaga (action) {
    try {
        console.log("action.payload in RouteSaga=", action.payload);
        const resultRoute = yield call (getRoute, action.payload);
        console.log("resultRoute=", resultRoute);
        yield put(fetchRouteSuccess(resultRoute));
        yield put(statusOrder({status: true}));
        localStorage["Route"] = JSON.stringify(resultRoute);
        localStorage["statusOrder"] = JSON.stringify({status: true});
    } catch (error) {
        yield put(fetchRouteFailure(error));
    }
}