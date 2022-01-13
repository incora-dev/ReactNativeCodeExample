import React, { useEffect, useState } from 'react';
import { Platform, View, Text } from 'react-native';
import * as ReactImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Yup from 'yup';
import defaultAvatar from '@app/assets/images/default_avatar.png';
import { Button } from '@app/components';
import ImagePicker from '@app/components/ImagePicker';
import { avatarPickerOptions, formFieldType, userSectors } from '@app/constants/base';
import language from '@app/constants/languages';
import { navigate } from '@app/navigations/navigationRef';
import { RenderField } from '@app/pages/SignUp/SignUp.types';
import { editProfile, getProfile } from '@app/services/index.actions';
import { AppState } from '@app/services/index.store';
import { IUser } from '@app/services/modules/Auth/auth.types';
import { ProfileStyles, ButtonStyles, Colors, GlobalStyles, ModalStyles } from '@app/styles';
import { FormField } from '@app/types/formik.types';
import { getUserSector, getUserType } from '@app/utils/helpers/ConvertDataHelpers';
import { validatePhone } from '@app/utils/helpers/general';
import { renderField } from '@app/utils/helpers/RenderHelpers';
import { profileFieldsValidation } from '@app/utils/validation-schemas';

const UserInfo = () => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const { user, profileUpdated, profileUpdating } = useSelector((state: AppState) => state.profile);

  const userFields: FormField[] = [
    {
      name: 'entityName',
      label: language.auth.entityName,
      fieldType: formFieldType.Text,
    },
    {
      name: 'name',
      label: language.auth.userName,
      fieldType: formFieldType.Text,
    },
    {
      name: 'country',
      label: language.auth.country,
      fieldType: formFieldType.CountryPicker,
    },
    {
      name: 'email',
      label: language.auth.email,
      fieldType: formFieldType.Text,
      textFieldType: 'email',
    },
    {
      name: 'phoneNumber',
      label: language.auth.phoneNumber,
      fieldType: formFieldType.Phone,
    },
    {
      name: 'userSector',
      label: language.auth.userSector,
      fieldType: formFieldType.Select,
      dropdown: {
        title: language.auth.sector,
        items: userSectors,
        initialSelectedOption: user.userSector,
      },
    },
  ];

  useEffect(() => {
    dispatch(getProfile.request());
  }, []);

  useEffect(() => {
    if (profileUpdated) {
      setIsEdit(false);
    }
  }, [profileUpdated]);

  const handleEditProfile = (submitForm: FormikHelpers<IUser>['submitForm']) => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      submitForm();
    }
  };

  const handleEditCancelation = (resetForm: FormikHelpers<IUser>['resetForm']) => {
    setIsEdit(false);
    resetForm();
  };

  const handlePicker = async (setFieldValue: RenderField['setFieldValue']) => {
    ReactImagePicker.launchImageLibrary(avatarPickerOptions, async response => {
      const { didCancel } = response;

      if (!didCancel) {
        const { uri } = response;

        setFieldValue('profileImage', Platform.OS === 'android' ? `file://${uri}` : uri);
      }
    });
  };

  return (
    <Formik
      initialValues={user}
      enableReinitialize
      onSubmit={values => {
        dispatch(
          editProfile.request({
            ...values,
            profileImage: values.profileImage !== user.profileImage ? values.profileImage : '',
            phoneNumber: validatePhone(values.phoneNumber),
          }),
        );
      }}
      validationSchema={Yup.object().shape(profileFieldsValidation)}
    >
      {({
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        isValid,
        dirty,
        submitForm,
        resetForm,
      }) => (
        <>
          <View style={ProfileStyles.topBlock}>
            <View style={ProfileStyles.buttonBlock}>
              {isEdit && (
                <Button
                  text={language.general.cancel}
                  textStyle={[ButtonStyles.whiteText]}
                  style={[ButtonStyles.button, ButtonStyles.greenButton, ProfileStyles.greenButton]}
                  onPress={() => handleEditCancelation(resetForm)}
                />
              )}
              <Button
                text={isEdit ? language.general.save : language.general.edit}
                onPress={() => handleEditProfile(submitForm)}
                isLoading={profileUpdating}
                textStyle={[ButtonStyles.whiteText]}
                disabled={dirty && !isValid}
                style={[ButtonStyles.button, ButtonStyles.greenButton, ProfileStyles.greenButton]}
                icon={
                  isEdit ? (
                    <MaterialIcons name='save' size={20} color={Colors.WHITE} />
                  ) : (
                    <MaterialIcons name='edit' size={20} color={Colors.WHITE} />
                  )
                }
              />
            </View>
          </View>
          <View
            style={[
              GlobalStyles.whiteContainer,
              ProfileStyles.whiteContainer,
              ModalStyles.shadowContainer,
            ]}
          >
            <View style={ProfileStyles.block}>
              <ImagePicker
                image={
                  values.profileImage
                    ? { uri: values.profileImage, width: 50, height: 50 }
                    : defaultAvatar
                }
                imageStyles={ProfileStyles.profileImage}
                handlePicker={() => handlePicker(setFieldValue)}
                isPickable={isEdit}
              />
              <Text style={ProfileStyles.title}>{user.name}</Text>
              <Text style={ProfileStyles.subText}>{getUserType(user.userType)}</Text>
            </View>
            <View style={GlobalStyles.divider} />
            <View style={ProfileStyles.block}>
              <View style={ProfileStyles.fieldsContainer}>
                {userFields.map(({ label, ...field }) => (
                  <React.Fragment key={field.name}>
                    <Text style={ProfileStyles.fieldName}>{label}</Text>
                    {isEdit ? (
                      renderField({ field, handleChange, handleBlur, setFieldValue })
                    ) : (
                      <Text style={[ProfileStyles.fieldName, ProfileStyles.fieldText]}>
                        {field.name === 'userSector'
                          ? getUserSector(values.userSector)
                          : values[field.name as keyof typeof user]}
                      </Text>
                    )}
                  </React.Fragment>
                ))}
              </View>

              <View>
                <Text style={ProfileStyles.fieldName}>{language.auth.password}</Text>
                <Button
                  text={language.auth.changePassword}
                  textStyle={[ProfileStyles.fieldName, ProfileStyles.button]}
                  onPress={() => navigate('ChangePassword')}
                />
              </View>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default UserInfo;
