import { takeEvery, put, call } from 'redux-saga/effects'
import { apiLogin, apiRegister, getUsers } from '../../api/api';

export function* getUsersSaga(state) {
    const data = yield call(getUsers, state.payload.perPage, state.payload.page)
    yield put({ type: 'LOAD_USERS', users: data.data })
}
export function* loginSaga(state) {
    const data = yield call(apiLogin, state.payload.email, state.payload.password)
    yield put({ type: 'LOAD_TOKIN', token: data.data.token })
}
export function* registerSaga(state) {
    const data = yield call(apiRegister, state.payload.email, state.payload.password)
    yield put({ type: 'LOAD_TOKIN', token: data.data.token })
}

export function* watchSaga() {
    yield takeEvery('GET_USERS', getUsersSaga);
    yield takeEvery('SET_REGISTER', registerSaga);
    yield takeEvery('SET_LOGIN', loginSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}