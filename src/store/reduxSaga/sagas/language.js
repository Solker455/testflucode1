import { put } from 'redux-saga/effects'

export function* languageSaga(state) {
    yield put({ type: 'LOAD_LANGUAGE', language: state.payload })
}
