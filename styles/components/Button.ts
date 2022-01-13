import { StyleSheet } from 'react-native';
import {
  getWidthWithScaleFactor,
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '@app/utils/helpers/LayoutHelpers';
import Colors from '../colors';

const ButtonStyles = StyleSheet.create({
  activityIndicator: {
    marginLeft: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    paddingLeft: 10,
  },
  button: {
    paddingHorizontal: getWidthWithScaleFactor(27),
    paddingVertical: getHeightWithScaleFactor(10),
  },
  greenButton: {
    borderRadius: 10,
    backgroundColor: Colors.BUTTON_BG,
  },
  whiteText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontWithScaleFactor(14),
    color: Colors.WHITE,
  },
  disabled: {
    opacity: 0.6,
  },
  enabled: {
    opacity: 1,
  },
});

export default ButtonStyles;
