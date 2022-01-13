import { IUser } from '@app/services/modules/Auth/auth.types';
import { FormikProps, FormField } from '@app/types/formik.types';

type ProfileFields = IUser;

export interface IHistoryItem {
  id: string;
  submissionDate: string;
}

export type RenderField = { field: FormField } & FormikProps<
  ProfileFields,
  'handleChange' | 'handleBlur' | 'setFieldValue'
>;
