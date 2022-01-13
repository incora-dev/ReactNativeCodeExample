import { all } from 'redux-saga/effects';
import profileSaga from './modules/Profile/profile.sagas';

export default function* rootSaga() {
  yield all([profileSaga()]);
}
