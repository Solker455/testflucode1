import { takeEvery, put, call } from 'redux-saga/effects'
import { apiLogin, apiRegister, getUsers } from '../../api/api';

export function* getUsersSaga(state) {
    const data = yield call(getUsers, state.payload.perPage, state.payload.page)
    yield put({ type: 'LOADING_USERS' })
    yield put({ type: 'LOAD_USERS', users: data.data })
    yield put({ type: 'LOADING_USERS' })
}
export function* loginSaga(state) {
    yield put({ type: 'LOADING_LOGIN' })
    const data = yield call(apiLogin, state.payload.email, state.payload.password)
    if (data.status === 200) {
        yield put({ type: 'LOAD_TOKIN', token: data.data.token })
        yield put({ type: 'LOADING_LOGIN' })
    } else {
        yield put({ type: 'ERROR_LOGIN' })
    }
}
export function* registerSaga(state) {
    yield put({ type: 'LOADING_LOGIN' })
    const data = yield call(apiRegister, state.payload.email, state.payload.password)
    if (data.status === 200) {
        yield put({ type: 'LOAD_TOKIN', token: data.data.token })
        yield put({ type: 'LOADING_LOGIN' })
    } else {
        yield put({ type: 'ERROR_LOGIN' })
    }
}

export function* watchSaga() {
    yield takeEvery('GET_USERS', getUsersSaga);
    yield takeEvery('SET_REGISTER', registerSaga);
    yield takeEvery('SET_LOGIN', loginSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}