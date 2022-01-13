import { I18nManager } from 'react-native';

const languages = {
  ar: {
    auth: {
      phoneNumber: 'رقم الجوال',
      userName: 'اسم المستخدم',
      entityName: 'جهة العمل',
      country: 'الدولة',
      email: 'البريد الإلكتروني',
      sector: 'القطاع',
      userTypes: {
        Individual: 'أفراد',
        Industry: 'صناعي',
      },
      userSector: 'القطاع',
      userSectors: {
        Energy: ' الطاقة وإزالة الكربون',
        Water: 'الغذاء والماء والبيئة',
      },
    },
    requestsHistory: {
      requestsHistory: 'الطلبات',
      requestHistory: 'الطلبات',
      requestNumber: 'رقم الطلب',
      submissionDate: 'تاريخ الإرسال',
    },
    general: {
      request: 'قم بالطلب',
      ok: 'تم',
      save: 'حفظ',
      edit: 'تعديل',
      cancel: 'إلغاء',
      explore: 'اكتشف المزيد',
      langSwitcher: 'English',
    },
    placeholders: {
      pleaseSelect: 'الرجاء الاختيار',
    },
    pages: {
      profile: 'الحساب الشخصي',
    },
    messages: {
      invalidPhoneNumber: 'رقم الجوال المدخل غير صحيح',
      invalidEmail: 'البريد الإلكتروني المدخل غير صحيح',
      required: 'مطلوب',
    },
  },
  en: {
    auth: {
      phoneNumber: 'Phone number',
      userName: 'User Name',
      entityName: 'Entity Name',
      country: 'Country',
      email: 'Email',
      sector: 'Sector',
      userTypes: {
        Individual: 'Individual',
        Industry: 'Industry',
      },
      userSector: 'User sector',
      userSectors: {
        Energy: 'Energy & Decarbonization',
        Water: 'Food, Water & the Environment',
      },
    },
    requestsHistory: {
      requestsHistory: 'Requests History',
      requestHistory: 'Request History',
      requestNumber: 'Request number',
      submissionDate: 'Submission date',
    },
    pages: {
      profile: 'Profile',
    },
    general: {
      request: 'Request',
      ok: 'Ok',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      explore: 'Explore',
      langSwitcher: 'اللغة العربية',
    },
    placeholders: {
      pleaseSelect: 'Please select...',
    },
    messages: {
      invalidPhoneNumber: 'Invalid phone number',
      invalidEmail: 'Incorrect Email',
      required: 'Required',
    },
  },
};

export default I18nManager.isRTL ? languages.ar : languages.en;
