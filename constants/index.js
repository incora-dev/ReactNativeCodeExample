import { Dimensions, StatusBar } from 'react-native';

export const BASE_URL = 'https://...';

export const validationExp = {
  phoneNumberRegExp: /^\+?[0][1-9]\d{11}$|^\+?[1-9]\d{11}$/g,
  passwordRegExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const SCROLLVIEW_PROPS = {
  showsVerticalScrollIndicator: false,
  bounces: false,
};
