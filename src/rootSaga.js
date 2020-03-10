import { takeEvery } from 'redux-saga/effects';
import { fetchUserRequest, fetchUserRequestRegistr, fetchUserSaga, fetchUserRegistrSaga } from './moduls/fetchUser';
import { fetchCardRequest, fetchCardSaga } from './moduls/fetchCard';

export default function* rootSaga () {
    yield takeEvery ( fetchUserRequest, fetchUserSaga);
    yield takeEvery ( fetchUserRequestRegistr, fetchUserRegistrSaga);
    yield takeEvery ( fetchCardRequest, fetchCardSaga);


}