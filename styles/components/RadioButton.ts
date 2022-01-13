import { StyleSheet } from 'react-native';
import { getFontWithScaleFactor } from '@app/utils/helpers/LayoutHelpers';

const RadioButtonStyles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  radioButtonHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  radioIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  label: {
    fontFamily: 'Poppins-Light',
    fontSize: getFontWithScaleFactor(14),
    marginLeft: 10,
    flex: 1,
  },
});

export default RadioButtonStyles;
