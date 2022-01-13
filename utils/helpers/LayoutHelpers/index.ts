import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

const MOCKUP_WIDTH = 414;
const MOCKUP_HEIGHT = 869;

export function getWidthWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}

export function getHeightWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

export function getFontWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}
