import React from 'react';
import Svg, { Defs, ClipPath, Image, Rect, Polygon } from 'react-native-svg';
import ReactNative, { StyleProp, ViewStyle } from 'react-native';

interface IHeaderBG {
  styles?: {
    svgBG?: StyleProp<ViewStyle>;
  };
  SCREEN_WIDTH: number;
  SCREEN_HEIGHT: number;
  backgroundImage: ReactNative.ImageSourcePropType;
}

const HeaderBG = ({ styles, backgroundImage, SCREEN_WIDTH, SCREEN_HEIGHT }: IHeaderBG) => (
  <Svg height='100%' width='100%' style={styles?.svgBG} pointerEvents='none'>
    <Defs>
      <ClipPath id='clip'>
        <Polygon
          points={`0,0 ${SCREEN_WIDTH},0 ${SCREEN_WIDTH},${SCREEN_HEIGHT * 0.35}  0,${
            SCREEN_HEIGHT * 0.35 - 50
          }`}
        />
      </ClipPath>
    </Defs>
    <Image
      x='0'
      y='0'
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT * 0.35}
      preserveAspectRatio='xMidYMid slice'
      href={backgroundImage}
      clipPath='url(#clip)'
    />
    <Rect
      x='0'
      y='0'
      width='100%'
      height='100%'
      fill='#1253B2'
      clipPath='url(#clip)'
      opacity={0.8}
    />
  </Svg>
);

export default HeaderBG;
