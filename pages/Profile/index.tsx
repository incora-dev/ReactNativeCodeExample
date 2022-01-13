import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import BGImage from '@app/assets/images/header-bg.png';
import warningImg from '@app/assets/images/warning.png';
import { Header, Modal } from '@app/components';
import { RequestsHistory } from '@app/components/RequestsHistory';
import UserInfo from '@app/components/UserInfo';
import language from '@app/constants/languages';
import { RootPages, RootStackParamList } from '@app/navigations/types';
import { AppState } from '@app/services/index.store';
import { GlobalStyles, ProfileStyles } from '@app/styles';

type ProfileProps = StackScreenProps<RootStackParamList, RootPages.PROFILE>;

const Profile = ({ navigation }: ProfileProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { profileError } = useSelector((state: AppState) => state.profile);

  useEffect(() => {
    setIsModalOpen(!!profileError);
  }, [profileError]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={GlobalStyles.container}>
          <Header
            navigation={navigation}
            backgroundImage={BGImage}
            title={language.pages.profile}
          />
          <View style={ProfileStyles.content}>
            <UserInfo />
            <RequestsHistory styles={{ container: ProfileStyles.requestHistory }} />
          </View>
        </View>
      </ScrollView>

      <Modal
        isVisible={isModalOpen}
        title='Something went wrong!'
        text={profileError}
        image={warningImg}
        onClick={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default Profile;
