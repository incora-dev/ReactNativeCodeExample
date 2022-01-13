import { StyleSheet } from 'react-native';
import { Colors } from '@app/styles/variables';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '@app/utils/helpers/LayoutHelpers';

const GlobalStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9FAFC',
  },
  hidden: {
    display: 'none',
  },
  whiteContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
  },
  textRed: {
    color: Colors.REQUIRED_RED,
  },
  shadowContainer: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: Colors.VERY_DARK_GRAYISH_BLUE,
    shadowOpacity: 0.14,
    shadowRadius: 10,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontWithScaleFactor(14),
    textTransform: 'capitalize',
    paddingBottom: 0,
    lineHeight: getHeightWithScaleFactor(20),
  },
  greyText: {
    color: Colors.SLATE_GREY,
  },
  greenText: {
    color: Colors.BUTTON_BG,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.BORDER_GREY,
    marginVertical: 5,
  },
  errorText: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontWithScaleFactor(14),
    textAlign: 'left',
    color: Colors.REQUIRED_RED,
    marginBottom: 5,
  },
});

export default GlobalStyles;
