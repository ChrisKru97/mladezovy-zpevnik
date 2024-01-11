import {FC, useEffect} from 'react';
import {Animated, Pressable, StyleSheet, useAnimatedValue} from 'react-native';
import Icon from './Icon';
import {IconType} from '@types';

interface Props {
  isFavorite?: boolean;
  onToggle: () => void;
  white?: boolean;
}

const FavoriteIcon: FC<Props> = ({isFavorite, onToggle, white}) => {
  const animatedValue = useAnimatedValue(0, {
    useNativeDriver: true,
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFavorite ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, isFavorite]);

  const inverseValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <Pressable hitSlop={12} onPress={onToggle} style={styles.container}>
      <Animated.View style={[{opacity: animatedValue}, styles.icon]}>
        <Icon type={IconType.Heart} />
      </Animated.View>
      <Animated.View style={[{opacity: inverseValue}, styles.icon]}>
        <Icon type={white ? IconType.HeartWhite : IconType.HeartOutlined} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
  icon: {
    position: 'absolute',
  },
});

export default FavoriteIcon;
