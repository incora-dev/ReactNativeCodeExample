import * as Yup from 'yup';
import { validationExp } from '@app/constants';
import language from '@app/constants/languages';

Yup.setLocale({
  mixed: {
    required: language.messages.required,
  },
});

const phoneValidation = Yup.string()
  .matches(validationExp.phoneNumberRegExp, language.messages.invalidPhoneNumber)
  .required();

export const userFieldsValidation = {
  name: Yup.string().required(),
  entityName: Yup.string().nullable(),
  country: Yup.string().required(),
  email: Yup.string().email(language.messages.invalidEmail).required(),
  userSector: Yup.string().nullable(),
};

export const profileFieldsValidation = {
  ...userFieldsValidation,
  phoneNumber: phoneValidation,
};
