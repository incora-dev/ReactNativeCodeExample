import { StyleSheet } from 'react-native';
import { Colors } from '@app/styles/variables';
import {
  getWidthWithScaleFactor,
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '@app/utils/helpers/LayoutHelpers';

const ProfileStyles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: getHeightWithScaleFactor(-125),
  },
  whiteContainer: {
    marginBottom: 35,
    zIndex: 10,
  },
  profileImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidthWithScaleFactor(64),
    height: getHeightWithScaleFactor(64),
    marginBottom: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontWithScaleFactor(20),
    lineHeight: getHeightWithScaleFactor(28),
    color: Colors.TANK_GREY,
    textAlign: 'left',
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontWithScaleFactor(18),
    lineHeight: getHeightWithScaleFactor(28),
    color: Colors.SLATE_GREY,
    textAlign: 'left',
  },
  block: {
    paddingVertical: getHeightWithScaleFactor(30),
    paddingHorizontal: getWidthWithScaleFactor(30),
  },
  fieldsContainer: {
    zIndex: 10,
  },

  fieldName: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontWithScaleFactor(20),
    color: Colors.FIELD_NAME,
    lineHeight: getHeightWithScaleFactor(28),
    borderWidth: 0,
    paddingHorizontal: 0,
    marginBottom: 3,
    textAlign: 'left',
  },
  editInput: {
    paddingHorizontal: 10,
  },
  fieldText: {
    color: Colors.TANK_GREY,
    paddingBottom: 12,
  },
  button: {
    color: Colors.BUTTON_BG,
  },
  blueTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontWithScaleFactor(24),
    color: Colors.DARK_BLUE,
    lineHeight: getHeightWithScaleFactor(56),
    marginBottom: 5,
  },
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
  buttonBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  greenButton: {
    marginLeft: 10,
    width: getWidthWithScaleFactor(120),
    paddingHorizontal: getWidthWithScaleFactor(20),
  },
  topBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  requestHistory: {
    marginBottom: 60,
  },
});

export default ProfileStyles;
