import { StyleSheet } from 'react-native';
import { Colors } from '@app/styles/variables';

import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '@app/utils/helpers/LayoutHelpers';

const DropDownStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 46,
    backgroundColor: Colors.WHITE,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.TANK_GREY,
    fontSize: getFontWithScaleFactor(14),
    lineHeight: getHeightWithScaleFactor(21),
  },
  item: {
    fontSize: getFontWithScaleFactor(14),
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    zIndex: 100,
    overflow: 'hidden',
    marginBottom: 15,
  },
  title: {
    fontFamily: 'Poppins-Light',
    fontSize: getFontWithScaleFactor(14),
    color: Colors.LIGHT_GREY,
    lineHeight: getHeightWithScaleFactor(21),
    marginRight: 5,
  },
  roundedContainer: {
    borderRadius: 8,
  },
});

export default DropDownStyles;
