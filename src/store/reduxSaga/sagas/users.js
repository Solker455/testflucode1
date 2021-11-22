import { put, call } from 'redux-saga/effects'
import { getUsers } from '../../../api/api';

export function* getUsersSaga(state) {
    const data = yield call(getUsers, state.payload.perPage, state.payload.page)
    yield put({ type: 'LOADING_USERS' })
    yield put({ type: 'LOAD_USERS', users: data.data })
    yield put({ type: 'LOADING_USERS' })
}