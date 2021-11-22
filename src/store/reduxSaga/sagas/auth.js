import { put, call } from 'redux-saga/effects'
import { apiLogin, apiRegister } from '../../../api/api';

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
