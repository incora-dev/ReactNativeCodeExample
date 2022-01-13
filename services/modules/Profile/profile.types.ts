import { IUser } from '@app/services/modules/Auth/auth.types';
import { ActionCreator, ActionGroupCreator, PickRequestAction } from '@app/types/redux.types';

export interface IProfileState {
  user: IUser;
  changeError: string;
  profileError: string;
  profileLoaded: boolean;
  profileUpdating: boolean;
  profileUpdated: boolean;
  requests: Array<any>;
  changeLoading: boolean;
  changeSuccess: boolean;
}

export interface IEditRequestData {
  email?: string;
  userType?: number;
  name?: string;
  phoneNumber?: string;
  entityName?: string;
  userSector: string;
  profileImage: string;
}

export interface IPasswordRequestData {
  oldPassword: string;
  newPassword: string;
}

export interface IChangeImageSuccess {
  newImage: string;
}

export enum ProfileActions {
  GET_PROFILE = 'GET_PROFILE',
  EDIT_PROFILE = 'EDIT_PROFILE',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_IMAGE = 'CHANGE_IMAGE',
  RESET_PROFILE_ERROR = 'RESET_PROFILE_ERROR',
  SEND_FCM_TOKEN = 'SEND_FCM_TOKEN',
}

export interface IProfileFields {
  userType: number;
  name: string;
  entityName: string;
  country: string;
  email: string;
  phoneNumber: string;
  userSector: string;
}

export type Actions =
  | ActionGroupCreator<ProfileActions.GET_PROFILE, null, IUser>
  | ActionGroupCreator<ProfileActions.EDIT_PROFILE, IEditRequestData, IUser>
  | ActionGroupCreator<ProfileActions.CHANGE_PASSWORD, IPasswordRequestData>
  | ActionGroupCreator<ProfileActions.CHANGE_IMAGE, string, IChangeImageSuccess>
  | ActionGroupCreator<ProfileActions.SEND_FCM_TOKEN, string, boolean>
  | ActionCreator<ProfileActions.RESET_PROFILE_ERROR>;

export type RequestAction<ActionName> = PickRequestAction<Actions, ActionName>;
