import { ImageLibraryOptions } from 'react-native-image-picker';
import { IDropdownItemData } from '@app/components/DropDown/DropDown.types';
import languages from '@app/constants/languages';

export const avatarPickerOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  maxWidth: 200,
  maxHeight: 200,
};

export const userSectors: IDropdownItemData[] = [
  {
    id: 1,
    label: languages.auth.userSectors.Energy,
    value: 'Energy',
  },
  {
    id: 2,
    label: languages.auth.userSectors.Water,
    value: 'Water',
  },
];

export const paginationInitialState = {
  pageNumber: 0,
  pageSize: 0,
  totalCount: 0,
};

export enum formFieldType {
  Text,
  TextArea,
  RadioButton,
  Checkbox,
  Select,
  Phone,
  CountryPicker,
}
