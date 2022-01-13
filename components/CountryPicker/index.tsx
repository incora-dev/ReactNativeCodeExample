import React from 'react';
import { Text, View } from 'react-native';
import CountryPickerModal, { Country, CountryCode } from 'react-native-country-picker-modal';
import { InputStyles } from '@app/styles';

interface ICountryPicker {
  label?: string;
  countryCode: CountryCode;
  required: boolean;
  onSelect(item: Country): void;
}

const CountryPicker = ({ label, countryCode = 'SA', onSelect, required }: ICountryPicker) => (
  <View style={InputStyles.containerStyles}>
    {label ? (
      <Text style={InputStyles.label}>
        {label}
        {required && <Text style={InputStyles.required}>*</Text>}
      </Text>
    ) : null}
    <View>
      <CountryPickerModal
        containerButtonStyle={InputStyles.textInput}
        countryCode={countryCode}
        withFilter
        withFlag={false}
        withFlagButton={false}
        withCountryNameButton
        onSelect={country => onSelect(country)}
      />
    </View>
  </View>
);

export default CountryPicker;
