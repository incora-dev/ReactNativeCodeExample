import React from 'react';
import { View, Text } from 'react-native';
import { Field, FieldProps } from 'formik';
import { CountryPicker, Input, PhoneInput, RadioButtonsGroup } from '@app/components';
import CheckBox from '@app/components/Checkbox';
import { Dropdown } from '@app/components/DropDown';
import { formFieldType } from '@app/constants/base';
import { GlobalStyles } from '@app/styles';
import { FormField, FormikProps } from '@app/types/formik.types';

interface IRenderField
  extends FormikProps<unknown, 'handleChange' | 'handleBlur' | 'setFieldValue'> {
  field: FormField;
}

export const renderField = ({ field, handleChange, handleBlur, setFieldValue }: IRenderField) => {
  const { name, label, required: isRequired = false, fieldType, isHidden } = field;

  if (isHidden) return;

  return (
    <Field name={name} key={name}>
      {({ meta }: FieldProps) => (
        <View>
          {field.fieldType === formFieldType.Text || field.fieldType === formFieldType.TextArea ? (
            <Input
              type={field.textFieldType}
              label={label}
              value={meta.value}
              required={isRequired}
              multiline={fieldType === formFieldType.TextArea}
              numberOfLines={4}
              onBlur={handleBlur(name)}
              onChangeText={handleChange(name)}
            />
          ) : field.fieldType === formFieldType.RadioButton ? (
            <RadioButtonsGroup
              {...field.radioButtons}
              label={label}
              required={isRequired}
              checkedValue={meta.value}
              onChecked={value => setFieldValue(name, value)}
            />
          ) : field.fieldType === formFieldType.Select ? (
            <Dropdown
              {...field.dropdown}
              label={label}
              required={isRequired}
              onSelect={item => {
                setFieldValue(name, item?.value);
              }}
            />
          ) : field.fieldType === formFieldType.Checkbox ? (
            <CheckBox
              label={label}
              onCheck={value => {
                setFieldValue(name, value);
              }}
            />
          ) : field.fieldType === formFieldType.CountryPicker ? (
            <CountryPicker
              label={label}
              countryCode={meta.value}
              onSelect={country => setFieldValue('country', country.cca2)}
              required={isRequired}
            />
          ) : field.fieldType === formFieldType.Phone ? (
            <PhoneInput
              number={meta.value}
              onChange={handleChange(name)}
              hasLabel={!!field.label}
              required={isRequired}
            />
          ) : null}

          <Text style={GlobalStyles.errorText}>
            {((meta.touched || fieldType === formFieldType.Phone) && meta.error) || ' '}
          </Text>
        </View>
      )}
    </Field>
  );
};
