import {FC, useState} from 'react';
import {View, useAnimatedValue} from 'react-native';

const SongSettings: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const opacity = useAnimatedValue(1, {
    useNativeDriver: true,
  });

  return (
    <View
      style={{
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'green',
      }}></View>
  );
};

export default SongSettings;
