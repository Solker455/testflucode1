import { takeEvery } from 'redux-saga/effects'
import { loginSaga, registerSaga } from './sagas/auth';
import { getUsersSaga } from './sagas/users';
import { languageSaga } from './sagas/language';


function* watchSaga() {
    yield takeEvery('GET_USERS', getUsersSaga);
    yield takeEvery('SET_REGISTER', registerSaga);
    yield takeEvery('SET_LOGIN', loginSaga);
    yield takeEvery('SET_LANGUAGE', languageSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}