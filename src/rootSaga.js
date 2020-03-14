import { takeEvery } from 'redux-saga/effects';
import { fetchUserRequest, fetchUserRequestRegistr, fetchUserSaga, fetchUserRegistrSaga } from './moduls/fetchUser';
import { fetchCardRequest, fetchCardSaga } from './moduls/fetchCard';
import { fetchAddressRequest, fetchAddressSaga } from './moduls/fetchAddress';
import { fetchRouteRequest, fetchRouteSaga } from './moduls/fetchRoute';

export default function* rootSaga () {
    yield takeEvery ( fetchUserRequest, fetchUserSaga);
    yield takeEvery ( fetchUserRequestRegistr, fetchUserRegistrSaga);
    yield takeEvery ( fetchCardRequest, fetchCardSaga);
    yield takeEvery ( fetchAddressRequest, fetchAddressSaga);
    yield takeEvery ( fetchRouteRequest, fetchRouteSaga);
}