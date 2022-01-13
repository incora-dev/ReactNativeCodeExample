import { StyleSheet, I18nManager } from 'react-native';
import { Colors } from '@app/styles/variables';
import { getFontWithScaleFactor } from '@app/utils/helpers/LayoutHelpers';

const PhoneInputStyles = StyleSheet.create({
  phoneNumberInput: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
    height: 46,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    borderColor: Colors.BORDER_GREY,
    borderWidth: 1,
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: getFontWithScaleFactor(14),
    color: Colors.TANK_GREY,
    textAlign: 'left',
    height: '100%',
    paddingHorizontal: I18nManager.isRTL ? 15 : 0,
  },
  phoneNumberRow: {
    marginBottom: 5,
    width: '100%',
  },
  phoneNumberLabel: {
    fontSize: getFontWithScaleFactor(14),
    color: Colors.TANK_GREY,
    lineHeight: 21,
    textTransform: 'uppercase',
    textAlign: 'left',
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default PhoneInputStyles;
