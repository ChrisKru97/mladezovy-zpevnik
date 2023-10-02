import {IconType} from '@types';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';

interface Props {
  type: IconType;
}

const Icon: FC<Props> = ({type}) => {
  switch (type) {
    case IconType.Heart:
      return (
        <VectorImage source={require('icons/heart.svg')} style={styles.icon} />
      );
    case IconType.HeartOutlined:
      return (
        <VectorImage
          source={require('icons/heart-outlined.svg')}
          style={styles.icon}
        />
      );
    case IconType.History:
      return (
        <VectorImage
          source={require('icons/history.svg')}
          style={styles.icon}
        />
      );
    case IconType.Keyboard:
      return (
        <VectorImage
          source={require('icons/keyboard.svg')}
          style={styles.icon}
        />
      );
    case IconType.Search:
      return (
        <VectorImage source={require('icons/search.svg')} style={styles.icon} />
      );
    case IconType.Settings:
      return (
        <VectorImage
          source={require('icons/settings.svg')}
          style={styles.icon}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  icon: {
    height: 26,
    width: 26,
  },
});

export default Icon;
