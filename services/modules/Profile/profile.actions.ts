import { IUser } from '@app/services/modules/Auth/auth.types';
import {
  IChangeImageSuccess,
  IEditRequestData,
  IPasswordRequestData,
  ProfileActions,
} from '@app/services/modules/Profile/profile.types';
import { createApiAction } from '@app/utils/redux';

export const getProfile = createApiAction<null, IUser>(ProfileActions.GET_PROFILE);
export const editProfile = createApiAction<IEditRequestData, IUser>(ProfileActions.EDIT_PROFILE);
export const changePassword = createApiAction<IPasswordRequestData>(ProfileActions.CHANGE_PASSWORD);
export const changeImage = createApiAction<string, IChangeImageSuccess>(
  ProfileActions.CHANGE_IMAGE,
);
export const sendFCMToken = createApiAction<string, boolean>(ProfileActions.SEND_FCM_TOKEN);
