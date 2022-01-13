import React, { useState } from 'react';
import { Text, View } from 'react-native';
import RNCheckBox from '@react-native-community/checkbox';
import { CheckBoxStyles } from '@app/styles';

interface ICheckBox {
  label?: string;
  boxType?: 'circle' | 'square';
  onCheck?(value: boolean): void;
}

const CheckBox = ({ label, boxType = 'square', onCheck }: ICheckBox) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={CheckBoxStyles.container}>
      <View style={CheckBoxStyles.checkboxContainer}>
        <RNCheckBox
          value={isSelected}
          onValueChange={value => {
            setSelection(value);
            onCheck?.(value);
          }}
          boxType={boxType}
          style={CheckBoxStyles.checkbox}
        />
        <Text style={CheckBoxStyles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default CheckBox;
