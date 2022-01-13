import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RadioButtonStyles, Colors } from '@app/styles';

export type RadioButtonDataType = {
  label: string;
  value: string | number;
};

interface IRadioButtonProps {
  size?: number;
  color?: string;
  borderColor?: string;
  labelColor?: string;
  checked?: boolean;
  label: string;
  value: string | number;
  onChecked?(val: IRadioButtonProps['value']): void;
}

const RadioButton = ({
  size = 24,
  color = Colors.DENIM,
  borderColor = Colors.RADIO_BORDER,
  labelColor = Colors.TANK_GREY,
  label,
  value,
  checked,
  onChecked,
}: IRadioButtonProps) => (
  <TouchableOpacity
    key={value}
    onPress={() => onChecked?.(value)}
    activeOpacity={0.8}
    style={RadioButtonStyles.radioButton}
  >
    <View
      style={[
        RadioButtonStyles.radioButtonHolder,
        {
          height: size,
          width: size,
          borderColor,
        },
      ]}
    >
      {checked ? (
        <View
          style={[
            RadioButtonStyles.radioIcon,
            {
              height: size - 6,
              width: size - 6,
              backgroundColor: color,
            },
          ]}
        />
      ) : null}
    </View>
    <Text style={[RadioButtonStyles.label, { color: labelColor }]}>{label.trim()}</Text>
  </TouchableOpacity>
);

export default RadioButton;
