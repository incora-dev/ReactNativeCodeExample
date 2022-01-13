import axiosInstance from '@app/services/interceptor';
import { IUser } from '@app/services/modules/Auth/auth.types';
import {
  Actions,
  ProfileActions,
  IChangeImageSuccess,
} from '@app/services/modules/Profile/profile.types';
import { PickRequestAction } from '@app/types/redux.types';
import { toFormData } from '@app/utils/helpers/general';

type ActionPayload<ActionName> = PickRequestAction<Actions, ActionName>['payload'];

const profileApi = {
  getProfile: () => axiosInstance.get<IUser>('profile'),
  editProfile: (payload: ActionPayload<ProfileActions.EDIT_PROFILE>) =>
    axiosInstance.post<IUser>('/profile', payload),
  changePassword: (payload: ActionPayload<ProfileActions.CHANGE_PASSWORD>) =>
    axiosInstance.post<boolean>('/profile/change-password', payload),
  changeImage: (payload: ActionPayload<ProfileActions.CHANGE_IMAGE>) =>
    axiosInstance.post<IChangeImageSuccess>(
      '/profile/change-image',
      toFormData({ profileImage: { uri: payload, type: 'image/png', name: 'avatar.png' } }),
    ),
  sendFCMToken: (payload: string) =>
    axiosInstance.post<boolean>('/profile/firebase', { firebaseID: payload }),
};

export default profileApi;
