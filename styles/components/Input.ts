import { StyleSheet } from 'react-native';
import { Colors } from '@app/styles/variables';
import { getFontWithScaleFactor } from '@app/utils/helpers/LayoutHelpers';

const InputStyles = StyleSheet.create({
  containerStyles: {
    marginBottom: 5,
  },
  textInput: {
    fontSize: getFontWithScaleFactor(16),
    color: Colors.TANK_GREY,
    borderColor: Colors.BORDER_GREY,
    borderWidth: 1,
    height: 46,
    paddingHorizontal: 22,
    justifyContent: 'center',
  },
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontFamily: 'Poppins-Light',
    fontSize: getFontWithScaleFactor(14),
    color: Colors.TANK_GREY,
    lineHeight: 21,
    textAlign: 'left',
    marginRight: 10,
    paddingBottom: 10,
  },
  errorStyle: {
    borderWidth: 1,
    borderColor: Colors.STRONG_RED,
  },
  icon: {
    position: 'absolute',
    transform: [
      {
        translateY: -13,
      },
    ],
    top: '50%',
  },
  iconLeft: {
    left: 10,
  },
  iconRight: {
    right: 10,
  },
  required: {
    color: Colors.REQUIRED_RED,
  },
});

export default InputStyles;
