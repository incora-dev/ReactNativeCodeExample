import React from 'react';
import ReactNative, { View, Image, Text } from 'react-native';
import DefaultImage from '@app/assets/images/folder.png';
import Button from '@app/components/Button';
import language from '@app/constants/languages';
import { ButtonStyles, ServiceCardStyles, ModalStyles } from '@app/styles';

interface IModalProps {
  title: string;
  text?: string;
  image?: ReactNative.ImageSourcePropType;
  buttonText?: string;
  onClick?(): void;
  isVisible?: boolean;
}

const Modal = ({
  title,
  text,
  image,
  buttonText = language.general.ok,
  onClick,
  isVisible,
}: IModalProps) => (
  <View style={[ModalStyles.bg, !isVisible && ModalStyles.hidden]}>
    <View style={[ModalStyles.container, ModalStyles.shadowContainer]} key={title}>
      <View style={ModalStyles.imageContainer}>
        <Image source={image || DefaultImage} resizeMode='contain' style={ModalStyles.photo} />
      </View>
      <View style={ModalStyles.content}>
        <Text style={ModalStyles.title}>{title}</Text>
        <Text style={ModalStyles.text}>{text}</Text>
        <View style={ModalStyles.buttonBlock}>
          <Button
            onPress={() => onClick?.()}
            text={buttonText}
            style={[ButtonStyles.button, ButtonStyles.greenButton, ServiceCardStyles.button]}
            textStyle={[ButtonStyles.whiteText, ServiceCardStyles.buttonText]}
          />
        </View>
      </View>
    </View>
  </View>
);
export default Modal;
