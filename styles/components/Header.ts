import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from '@app/constants';

const HeaderStyles = StyleSheet.create({
  block: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.35,
  },
  image: {
    width: 80,
    height: 60,
    alignSelf: 'center',
  },
  imageBlock: {
    height: 60,
    ...StyleSheet.absoluteFill,
  },
  menuButton: {
    zIndex: 1,
  },
  svgBG: {
    position: 'absolute',
  },
  heading: {
    fontSize: 26,
    color: 'white',
    maxWidth: 320,
    textAlign: 'left',
  },
  title: {
    fontFamily: 'IBMPlexSans-Bold',
  },

  topBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    height: 60,
  },
  textBlock: {
    marginBottom: 80,
  },
});

export default HeaderStyles;
