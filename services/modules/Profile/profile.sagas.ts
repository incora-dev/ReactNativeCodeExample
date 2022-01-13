import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, takeLatest } from 'typed-redux-saga/macro';
import { ProfileApi } from '@app/services/index.api';
import { ProfileActions, RequestAction } from '@app/services/modules/Profile/profile.types';
import { requestAction } from '@app/utils/helpers/StoreHelpers';
import * as AuthActions from '../Auth/auth.actions';
import * as Actions from './profile.actions';

function* fetchProfile() {
  try {
    const { data } = yield* call(ProfileApi.getProfile);
    AsyncStorage.setItem('user', JSON.stringify(data));
    yield* put(Actions.getProfile.success(data));
    yield* put(AuthActions.login.success({ user: data }));
  } catch (e) {
    yield* put(Actions.getProfile.failure(e.data));
  }
}

function* fetchEditProfile(action: RequestAction<ProfileActions.EDIT_PROFILE>) {
  try {
    if (action.payload.profileImage) {
      yield* call(ProfileApi.changeImage, action.payload.profileImage);
    }

    const { data } = yield* call(ProfileApi.editProfile, action.payload);

    AsyncStorage.setItem('user', JSON.stringify(data));
    yield* put(Actions.editProfile.success(data));
  } catch (e) {
    yield* put(Actions.editProfile.failure(e.data));
  }
}
function* fetchPassword(action: RequestAction<ProfileActions.CHANGE_PASSWORD>) {
  try {
    const { data } = yield* call(ProfileApi.changePassword, action.payload);
    if (!data) {
      yield* put(Actions.changePassword.failure('Incorect Old Password'));
    } else {
      yield* put(Actions.changePassword.success());
    }
  } catch (e) {
    yield* put(Actions.changePassword.failure(e.message));
  }
}

function* sendFCMToken(action: RequestAction<ProfileActions.SEND_FCM_TOKEN>) {
  try {
    const token = action.payload;
    const { data: result } = yield* call(ProfileApi.sendFCMToken, token);

    if (!result) {
      yield* put(Actions.sendFCMToken.failure('Cannot send FCM token'));
    } else {
      yield* put(Actions.sendFCMToken.success());

      AsyncStorage.setItem('fcmToken', token);
    }
  } catch (e) {
    yield* put(Actions.sendFCMToken.failure(e.message));
  }
}

function* fetchImage(action: RequestAction<ProfileActions.CHANGE_IMAGE>) {
  try {
    const {
      data: { newImage },
    } = yield* call(ProfileApi.changeImage, action.payload);
    yield* put(Actions.changeImage.success({ newImage }));
  } catch (e) {
    yield* put(Actions.changeImage.failure(e.data));
  }
}

function* profileSaga() {
  yield takeLatest(requestAction(ProfileActions.GET_PROFILE), fetchProfile);
  yield takeLatest(requestAction(ProfileActions.EDIT_PROFILE), fetchEditProfile);
  yield takeLatest(requestAction(ProfileActions.CHANGE_PASSWORD), fetchPassword);
  yield takeLatest(requestAction(ProfileActions.CHANGE_IMAGE), fetchImage);
  yield takeLatest(requestAction(ProfileActions.SEND_FCM_TOKEN), sendFCMToken);
}

export default profileSaga;
