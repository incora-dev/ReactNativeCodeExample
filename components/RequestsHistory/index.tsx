import React, { useEffect } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import language from '@app/constants/languages';
import { push } from '@app/navigations/navigationRef';
import { getMyRequests } from '@app/services/index.actions';
import { AppState } from '@app/services/index.store';
import { IMyRequest } from '@app/services/modules/Requests/requests.types';
import { GlobalStyles, ModalStyles, ProfileStyles } from '@app/styles';

export interface IRenderHistoryItem {
  label: string;
  value: string;
}

export interface IRequestsHistory {
  styles?: {
    container?: StyleProp<ViewStyle>;
  };
}

export const RequestsHistory = ({ styles }: IRequestsHistory) => {
  const dispatch = useDispatch();

  const { requests: history } = useSelector((state: AppState) => state.requests);

  useEffect(() => {
    dispatch(getMyRequests.request());
  }, []);

  const renderHistoryItem = ({ label, value }: IRenderHistoryItem) => (
    <View key={label}>
      <Text style={ProfileStyles.fieldName}>{label}</Text>
      <Text style={[ProfileStyles.fieldName, ProfileStyles.fieldText]}>{value}</Text>
    </View>
  );

  const renderHistoryItems = ({ service, requestNo, submissionDate }: IMyRequest, i: number) => {
    const itemFields = [
      {
        label: language.requestsHistory.requestNumber,
        value: `#${requestNo}`,
      },
      {
        label: language.requestsHistory.submissionDate,
        value: moment(submissionDate).format('dddd, MMMM D, YYYY'),
      },
    ];

    return (
      <TouchableOpacity
        key={requestNo}
        activeOpacity={0.6}
        onPress={() =>
          push('RequestHistory', {
            requestNo,
          })
        }
      >
        <View style={ProfileStyles.block}>
          <Text style={[ProfileStyles.title, ProfileStyles.semiBold]}>{service}</Text>
          {itemFields.map(field => renderHistoryItem(field))}
        </View>

        {i !== history.length - 1 && <View style={GlobalStyles.divider} />}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Text style={ProfileStyles.blueTitle}>{language.requestsHistory.requestsHistory}</Text>
      <View style={[GlobalStyles.whiteContainer, ModalStyles.shadowContainer, styles?.container]}>
        {history.map((item, i) => renderHistoryItems(item, i))}
      </View>
    </>
  );
};
