import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Types, signInSuccess, signFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
    yield put(signInSuccess('adb', 'jhonw'));
}

export default all([
    takeLatest(Types.SIGN_IN_REQUEST, signIn),
]);
