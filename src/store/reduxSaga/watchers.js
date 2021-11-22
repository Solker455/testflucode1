import { takeEvery } from 'redux-saga/effects'
import { loginSaga, registerSaga } from './sagas/auth';
import { getUsersSaga } from './sagas/users';


function* watchSaga() {
    yield takeEvery('GET_USERS', getUsersSaga);
    yield takeEvery('SET_REGISTER', registerSaga);
    yield takeEvery('SET_LOGIN', loginSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}