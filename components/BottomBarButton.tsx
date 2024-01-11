import {IconType} from '@types';
import {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from './Icon';

interface Props {
  iconType: IconType;
  onPress: () => void;
}

const BottomBarButton: FC<Props> = ({iconType, onPress}) => {
  return (
    <Pressable hitSlop={16} onPress={onPress} style={styles.wrapper}>
      <Icon type={iconType} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {backgroundColor: 'white', borderRadius: 16, padding: 8},
});

export default BottomBarButton;
