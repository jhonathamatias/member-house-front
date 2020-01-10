import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Types, signInSuccess, signFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
    try {
        const response = yield call(api.get, '/auth');

        const { token, user } = response.data;

        yield put(signInSuccess(token, user));

        // history.push('/home');
    } catch (error) {
        yield put(signFailure());
    }
}

export default all([
    takeLatest(Types.SIGN_IN_REQUEST, signIn),
]);
