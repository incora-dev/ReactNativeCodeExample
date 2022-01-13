import React from 'react';
import { View, Text } from 'react-native';
import RadioButton, { RadioButtonDataType } from '@app/components/RadioButton';
import { InputStyles, RadioButtonsGroupStyles } from '@app/styles';

export interface IRadioButtonsGroup {
  label?: string;
  required?: boolean;
  radioButtons?: RadioButtonDataType[];
  checkedValue?: string | number;
  columnsCount?: number;
  onChecked?(val: IRadioButtonsGroup['checkedValue']): void;
}

const RadioButtonsGroup = ({
  radioButtons = [],
  checkedValue,
  columnsCount = 1,
  onChecked,
  label,
  required,
}: IRadioButtonsGroup) => {
  const renderRadioButton = ({ label, value }: RadioButtonDataType) => (
    <View key={value} style={{ width: `${100 / columnsCount}%` }}>
      <RadioButton
        key={value}
        label={label}
        value={value}
        onChecked={onChecked}
        checked={checkedValue === value}
      />
    </View>
  );
  return (
    <>
      {label ? (
        <Text style={[InputStyles.label]}>
          {label}
          {required && <Text style={InputStyles.required}>*</Text>}
        </Text>
      ) : null}

      <View style={RadioButtonsGroupStyles.container}>
        {radioButtons.map(radioButton => renderRadioButton(radioButton))}
      </View>
    </>
  );
};

export default RadioButtonsGroup;
