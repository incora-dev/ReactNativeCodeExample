import { FormikProps as FormikProperties } from 'formik';
import { IDropdownProps } from '@app/components/DropDown';
import { IRadioButtonsGroup } from '@app/components/RadioButtonsGroup';
import { formFieldType } from '@app/constants/base';

export type FormikProps<T, S extends keyof FormikProperties<T>> = Pick<FormikProperties<T>, S>;

export interface IFormFieldBase<T extends formFieldType> {
  name: string;
  label?: string;
  required?: boolean;
  fieldType: T;

  isHidden?: boolean;
}

export interface IFormDropdown extends IFormFieldBase<formFieldType.Select> {
  dropdown: Omit<IDropdownProps, 'label' | 'required'>;
}

export interface IFormRadio extends IFormFieldBase<formFieldType.RadioButton> {
  radioButtons: Omit<IRadioButtonsGroup, 'label' | 'required'>;
}
export interface IFormText extends IFormFieldBase<formFieldType.Text | formFieldType.TextArea> {
  textFieldType?: 'text' | 'email' | 'password';
}

export type IFormCheckbox = IFormFieldBase<formFieldType.Checkbox>;

export type IFormCountryPicker = IFormFieldBase<formFieldType.CountryPicker>;
export type IFormPhone = IFormFieldBase<formFieldType.Phone>;

export type FormField =
  | IFormDropdown
  | IFormRadio
  | IFormCheckbox
  | IFormText
  | IFormCountryPicker
  | IFormPhone;
