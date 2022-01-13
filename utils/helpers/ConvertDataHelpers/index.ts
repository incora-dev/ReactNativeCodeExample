import { IDropdownItemData } from '@app/components/DropDown/DropDown.types';
import language from '@app/constants/languages';
import { ServicePages } from '@app/navigations/types';
import { ISector, IType } from '@app/services/modules/ServiceInfo/serviceInfo.types';

export const getUserType = (userType: number) => {
  switch (userType) {
    case 0:
      return language.auth.userTypes.Individual;
    case 1:
      return language.auth.userTypes.Industry;
    default:
      return '';
  }
};

export const getUserSector = (userSector: string) => {
  switch (userSector) {
    case 'Energy':
      return language.auth.userSectors.Energy;
    case 'Water':
      return language.auth.userSectors.Water;
    default:
      return '';
  }
};
