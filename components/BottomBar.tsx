import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomBarButton from './BottomBarButton';
import {IconType, NavigationParams} from '@types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  setHeight: (number: number) => void;
}

const BottomBar: FC<Props> = ({setHeight}) => {
  const {navigate} = useNavigation<NavigationProp<NavigationParams>>();
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={[styles.wrapper, {paddingBottom: Math.max(bottom, 16)}]}
      onLayout={e => setHeight(e.nativeEvent.layout.height)}>
      <View style={[StyleSheet.absoluteFill, styles.background]} />
      <BottomBarButton
        iconType={IconType.Heart}
        onPress={() => navigate('Favorites')}
      />
      <BottomBarButton iconType={IconType.Search} onPress={() => null} />
      <BottomBarButton iconType={IconType.Keyboard} onPress={() => null} />
      <BottomBarButton
        iconType={IconType.History}
        onPress={() => navigate('History')}
      />
      <BottomBarButton iconType={IconType.Settings} onPress={() => null} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  background: {backgroundColor: 'black', opacity: 0.6},
});

export default BottomBar;
