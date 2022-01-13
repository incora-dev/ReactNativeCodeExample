import React from 'react';
import {
  Text,
  View,
  TextInput,
  I18nManager,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { InputStyles } from '@app/styles';

interface IInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  required?: boolean;
  styles?: {
    container?: StyleProp<ViewStyle>;
    input?: StyleProp<ViewStyle>;
    inputBlock?: StyleProp<ViewStyle>;
    label?: StyleProp<ViewStyle>;
  };
  placeholderTextColor?: string;
  icon?: React.ReactNode;
  iconLeft?: boolean;
  type?: 'password' | 'email' | 'text';
  onChangeText?(e: React.ChangeEvent | string): void;
  onBlur?(e: any): void;
}

const Input = ({
  label,
  placeholder,
  value,
  error,
  maxLength,
  keyboardType = 'default',
  multiline,
  numberOfLines,
  editable,
  required,
  icon,
  styles,
  placeholderTextColor,
  iconLeft,
  type = 'text',
  onChangeText,
  onBlur,
}: IInputProps) => (
  <View style={[InputStyles.containerStyles, styles?.container]}>
    {label ? (
      <Text style={[InputStyles.label, styles?.label]}>
        {label}
        {required && <Text style={InputStyles.required}>*</Text>}
      </Text>
    ) : null}
    <View style={styles?.inputBlock}>
      <TextInput
        style={[
          InputStyles.textInput,
          styles?.input,
          error && InputStyles.errorStyle,
          multiline && { height: 100 },
        ]}
        placeholder={placeholder}
        defaultValue={value}
        autoCapitalize='none'
        secureTextEntry={type === 'password'}
        maxLength={maxLength}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        placeholderTextColor={placeholderTextColor}
        textAlign={I18nManager.isRTL ? 'right' : 'left'}
        onBlur={onBlur}
        onChangeText={onChangeText}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
      {icon ? (
        <View style={[InputStyles.icon, iconLeft ? InputStyles.iconLeft : InputStyles.iconRight]}>
          {icon}
        </View>
      ) : null}
    </View>
  </View>
);

export default Input;
