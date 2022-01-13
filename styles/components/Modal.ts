import { StyleSheet } from 'react-native';
import { Colors, Mixins } from '@app/styles/variables';

import {
  getFontWithScaleFactor,
  getWidthWithScaleFactor,
  getHeightWithScaleFactor,
} from '@app/utils/helpers/LayoutHelpers';

const ModalStyles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(249,250,252, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1000,
    zIndex: 1000,
  },
  hidden: {
    position: 'relative', // android bug (otherwise display: none isn't working)
    display: 'none',
  },
  container: {
    width: '90%',
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontWithScaleFactor(14),
    color: Colors.DARK_BLUE,
    lineHeight: getHeightWithScaleFactor(56),
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: getFontWithScaleFactor(12),
    color: Colors.SLATE_GREY,
    lineHeight: getHeightWithScaleFactor(28),
    textAlign: 'center',
  },
  buttonBlock: {
    width: getWidthWithScaleFactor(180),
    alignSelf: 'center',
    marginTop: 30,
  },
  shadowContainer: {
    ...Mixins.boxShadow(
      '#B7C6DC',
      {
        height: 20,
        width: 0,
      },
      0.33,
      30,
      7,
    ),
  },
  photo: {
    maxWidth: 100,
    maxHeight: 100,
  },
  content: {},
});

export default ModalStyles;
