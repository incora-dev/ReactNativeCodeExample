import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import { ButtonStyles } from '@app/styles';

interface IButtonProps {
  text?: string;
  icon?: React.ReactNode;
  type?: 'touchable-opacity' | 'toucheble-without-feedback';
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  isLoading?: boolean;
  textStyle?: TextStyle[];
  indicatorColor?: string;
  activeOpacity?: number;
  onPress?: () => void;
}

const Button = ({
  text,
  icon = null,
  type = 'touchable-opacity',
  style = [],
  disabled,
  textStyle = [],
  isLoading = false,
  indicatorColor = '#fff',
  activeOpacity = 0.9,
  onPress,
}: IButtonProps) => {
  const renderContent = () => (
    <View style={ButtonStyles.buttonContainer}>
      <Text style={[textStyle, isLoading && ButtonStyles.disabled]}>{text}</Text>
      {isLoading && (
        <ActivityIndicator
          style={ButtonStyles.activityIndicator}
          size='small'
          color={indicatorColor}
        />
      )}
      {icon}
    </View>
  );

  const touchableOpacity = (
    <TouchableOpacity
      onPress={onPress}
      style={[style, disabled ? ButtonStyles.disabled : ButtonStyles.enabled]}
      disabled={isLoading || disabled}
      activeOpacity={activeOpacity}
    >
      {renderContent()}
    </TouchableOpacity>
  );

  switch (type) {
    case 'touchable-opacity':
      return touchableOpacity;
    case 'toucheble-without-feedback':
      return (
        <TouchableWithoutFeedback
          onPress={onPress}
          style={[style, isLoading || disabled ? ButtonStyles.disabled : ButtonStyles.enabled]}
          disabled={isLoading || disabled}
        >
          {renderContent()}
        </TouchableWithoutFeedback>
      );
    default:
      return touchableOpacity;
  }
};

export default Button;
