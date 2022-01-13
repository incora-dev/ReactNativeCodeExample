import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import Phone from 'react-native-phone-input/dist/index';
import language from '@app/constants/languages';
import { InputStyles, PhoneInputStyles } from '@app/styles';

interface IPhoneInputProps {
  number: string;
  hasLabel?: boolean;
  required: boolean;
  onChange?(phone: string): void;
}

const PhoneInput = ({ number, hasLabel, onChange, required }: IPhoneInputProps) => {
  const phoneRef = useRef<Phone>(null);
  const [phoneNumber, setPhoneNumber] = useState(number || '');

  useEffect(() => {
    setPhoneNumber(number);
    phoneRef?.current?.setValue(number);
  }, [number]);

  const handleChangePhoneNumber = (phone: string) => {
    setPhoneNumber(phone);
    onChange?.(phone);
  };

  return (
    <View style={PhoneInputStyles.phoneNumberRow}>
      {hasLabel && (
        <Text style={InputStyles.label}>
          {language.auth.phoneNumber}
          {required && <Text style={InputStyles.required}>*</Text>}
        </Text>
      )}
      <Phone
        ref={phoneRef}
        initialCountry='sa'
        initialValue={phoneNumber}
        onPressFlag={() => console.log('open')}
        pickerButtonColor='red'
        textStyle={PhoneInputStyles.textInput}
        onChangePhoneNumber={handleChangePhoneNumber}
        style={PhoneInputStyles.phoneNumberInput}
      />
    </View>
  );
};

export default PhoneInput;
