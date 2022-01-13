import * as Types from './profile.types';

const initialState: Types.IProfileState = {
  user: {
    id: 0,
    email: '',
    userType: 0,
    name: '',
    phoneNumber: '',
    country: '',
    userSector: '',
    entityName: '',
    profileImage: '',
    role: '',
  },
  requests: [],
  changeError: '',
  profileError: '',
  profileLoaded: false,
  profileUpdating: false,
  profileUpdated: false,
  changeLoading: false,
  changeSuccess: false,
};

export default (state = initialState, action: Types.Actions): Types.IProfileState => {
  switch (action.type) {
    case 'GET_PROFILE_SUCCESS': {
      return {
        ...state,
        profileError: '',
        profileLoaded: false,
        user: {
          ...action.payload,
        },
      };
    }
    case 'GET_PROFILE_FAILURE': {
      return {
        ...state,
        profileLoaded: false,
        profileError: action.payload,
      };
    }

    case 'EDIT_PROFILE_REQUEST':
      return {
        ...state,
        profileError: '',
        profileUpdating: true,
        profileUpdated: false,
      };
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.payload,
        profileError: '',
        profileUpdating: false,
        profileUpdated: true,
      };
    case 'EDIT_PROFILE_FAILURE':
      return {
        ...state,
        profileError: action.payload,
        profileUpdating: false,
        profileUpdated: false,
      };
    case 'CHANGE_PASSWORD_REQUEST':
      return {
        ...state,
        changeLoading: true,
        changeSuccess: false,
      };
    case 'CHANGE_PASSWORD_SUCCESS':
      return {
        ...state,
        changeError: '',
        changeLoading: false,
        changeSuccess: true,
      };
    case 'CHANGE_PASSWORD_FAILURE':
      return {
        ...state,
        changeError: action.payload,
        changeLoading: false,
        changeSuccess: false,
      };
    case 'CHANGE_IMAGE_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          profileImage: action.payload.newImage,
        },
        profileError: '',
      };
    case 'CHANGE_IMAGE_FAILURE':
      return {
        ...state,
        profileError: action.payload,
      };
    case 'RESET_PROFILE_ERROR':
      return {
        ...state,
        changeError: '',
        profileError: '',
      };

    default:
      return state;
  }
};
