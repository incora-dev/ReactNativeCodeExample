import React from 'react';
import ReactNative, {
  View,
  Image as RNImage,
  TouchableOpacity,
  Text as RNText,
  ViewStyle,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '@app/assets/images/Logo.png';
import HeaderBG from '@app/assets/svg/HeaderBG';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@app/constants';
import { HeaderStyles, Colors } from '@app/styles';

interface IHeaderProps {
  title: string;
  subtitle?: string;
  navigation: any;
  backgroundImage: ReactNative.ImageSourcePropType;
  style?: {
    textBlock?: ViewStyle;
  };
  onTouchEnd?: () => void;
}

const Header = ({
  title,
  subtitle,
  backgroundImage,
  navigation,
  style,
  onTouchEnd,
}: IHeaderProps) => (
  <View style={HeaderStyles.container} onTouchEnd={onTouchEnd}>
    <HeaderBG
      styles={{ svgBG: HeaderStyles.svgBG }}
      {...{ SCREEN_WIDTH, SCREEN_HEIGHT, backgroundImage }}
    />
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={HeaderStyles.block}>
        <View style={HeaderStyles.topBlock}>
          <TouchableOpacity
            style={HeaderStyles.menuButton}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Icon name='menu' size={30} color={Colors.WHITE} />
          </TouchableOpacity>
          <View style={HeaderStyles.imageBlock}>
            <RNImage source={Logo} resizeMode='contain' style={HeaderStyles.image} />
          </View>
        </View>
        <View style={[HeaderStyles.textBlock, style?.textBlock]}>
          <RNText style={[HeaderStyles.heading, HeaderStyles.title]}>{title.trim()}</RNText>
          {!!subtitle && <RNText style={HeaderStyles.heading}>{subtitle}</RNText>}
        </View>
      </View>
    </SafeAreaView>
  </View>
);

export default Header;
