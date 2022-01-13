import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';

import addPhotoIcon from '@app/assets/images/add_photo.png';

interface IImagePicker {
  isPickable: boolean;
  image: ImageSourcePropType;
  imageStyles?: StyleProp<ViewStyle>;
  handlePicker(): void;
}

const ImagePicker = ({ isPickable, image, imageStyles, handlePicker }: IImagePicker) => (
  <TouchableOpacity onPress={handlePicker} activeOpacity={0.9} disabled={!isPickable}>
    <ImageBackground source={image} width={50} height={50} style={imageStyles} resizeMode='cover'>
      {isPickable && <Image source={addPhotoIcon} style={{ width: 25, height: 25 }} />}
    </ImageBackground>
  </TouchableOpacity>
);

export default ImagePicker;
